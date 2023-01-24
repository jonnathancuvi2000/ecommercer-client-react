import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import '../style/Slider.css';
import { sliderItems } from '../data'
import styled from 'styled-components';

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(0)

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

    const Wrapper = styled.div`
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

    const Slide = styled.div`
          background-color: #${(props) => props.bg};
    `;


    return (
        <div className='container-slider'>
            <div className="arrow arrow-left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined></ArrowLeftOutlined>
            </div>
            <Wrapper className="wraper-slider" slideIndex={slideIndex}>
                {sliderItems.map((item) =>
                    <Slide className="slide" bg={item.bg} key={item.id}>
                        <div className="imgContainer">
                            <img className='image' alt='' src={item.img} />
                        </div>
                        <div className="infContainer">
                            <h1 className="title">{item.title}</h1>
                            <p className="description">{item.desc}</p>
                            <button className='btn'>show now</button>
                        </div>
                    </Slide>
                )}
            </Wrapper>
            <div className="arrow arrow-right" onClick={() => handleClick("left")}>
                <ArrowRightOutlined></ArrowRightOutlined>
            </div>
        </div>
    )
}
