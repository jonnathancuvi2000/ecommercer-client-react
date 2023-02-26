import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import '../style/Slider.css';
import { sliderItems } from '../data'
import styled from 'styled-components';
import { deleteData_products } from '../redux/cardRedux';
import { useDispatch } from 'react-redux';


export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(0)
    const dispatch = useDispatch();


    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0
                ? slideIndex - 1
                : 2);
        } else {
            setSlideIndex(slideIndex < 2
                ? slideIndex + 1
                : 0);
        }

    }

    //     const Wrapper = styled.div`
    //   transition: all 1.5s ease;
    //   transform: translateX(${(props) => props.slideIndex * -100}vw);
    // `;

    const Slide = styled.div`
          background-color: #${(props) => props.bg};
    `;


    const vacciarPrdouct = () => {
        console.log("productso eliminados .......")
        dispatch(deleteData_products());

    }

    return (
        <div className='container-slider'>
            <div className="arrow arrow-left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined></ArrowLeftOutlined>
            </div>
            {/* <Wrapper className="wraper-slider" slideIndex={slideIndex}> */}
            <div className="wraper-slider" style={{ transform: `translateX(-${slideIndex * 100}vw)` }}>

                {sliderItems.map((item) =>
                    <Slide className="slide" bg={item.bg} key={item.id}>
                        <div className="imgContainer">
                            <img className='image' alt='' src={item.img} />
                        </div>
                        <div className="infContainer">
                            <h1 className="title">{item.title}</h1>
                            <p className="description">{item.desc}</p>
                            <button className='btn' onClick={vacciarPrdouct}>show now</button>
                        </div>
                    </Slide>
                )}
            </div>
            <div className="arrow arrow-right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined></ArrowRightOutlined>
            </div>
        </div>
    )
}
