import React, { useEffect, useState } from 'react';
import '../Style_Screem/Product.css';
import Anoucenment from '../components/Anoucenment';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Add, Remove } from "@material-ui/icons";
import { Link, useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cardRedux';
import { useDispatch } from 'react-redux';


const Product = () => {

    const FilterColor = styled.div`
        background-color: ${(props) => props.color};
  `;

    const Button = styled.button`
        &:hover{
            background-color: #f8f4f4;
        }
  `
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get('/products/find/' + id);
                setProduct(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getProduct();
    }, [id])// eveytime that my ID changes it will run the funtion inside USEEFFECTclg

    const handleQuantity = (type) => {
        if (type === 'dec') {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    const handleClick = () => {
        console.log(size);
        dispatch(
            // when we add three dots  "..." to "product"  we send all de information in "product", tha is, the  quantity, color, size  and the product 
            addProduct({ ...product, quantity, color, size })
        );
    }

    return (
        <div className='containerProduct'>
            <Navbar></Navbar>
            <Anoucenment></Anoucenment>
            <div className="Wrapper-Product">
                <div className="ImgContainer-Product">
                    <img className='Image-Product' src={product.img} alt="" />
                </div>
                <div className="InfoContainer-Product">
                    <h1 className="Title-Product">{product.title}</h1>
                    <p className='desc-Product'>{product.desc}</p>
                    <span className="Price-Product">$ {product.price}</span>

                    <div className="FilterContainer-Product">
                        <div className="Filter-Product">
                            <span className="FilterTitle-Product">Color</span>
                            {product.color?.map((c) => ( // I had to add ? because in that the code sure that teh array is not empty
                                <FilterColor className="FilterColor-Product" color={c} key={c} onClick={() => setColor(c)}></FilterColor >
                            ))}
                            {/* <FilterColor className="FilterColor-Product" color="black"></FilterColor >
                            <FilterColor className="FilterColor-Product" color="darkblue"></FilterColor >
                            <FilterColor className="FilterColor-Product" color="gray"></FilterColor > */}
                        </div>

                        <div className="Filter-Product">
                            <span className="FilterTitle-Product">Size</span>
                            <select name="" id="" className="FilterSize-Product" onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map((s) => ( // I had to add ? because in that the code sure that teh array is not empty
                                    <option value={s} className="FilterSizeOption-Product" key={s}>{s}</option>
                                ))}
                                {/* <option value="" className="FilterSizeOption-Product">XS</option>
                                <option value="" className="FilterSizeOption-Product">S</option>
                                <option value="" className="FilterSizeOption-Product">M</option>
                                <option value="" className="FilterSizeOption-Product">L</option>
                                <option value="" className="FilterSizeOption-Product">XL</option> */}
                            </select>
                        </div>
                    </div>

                    <div className="AddContainer-Product">
                        <div className="AmountContainer-Product">
                            <Remove onClick={() => handleQuantity('dec')} />
                            <span className="Amount-Product">{quantity}</span>
                            <Add onClick={() => handleQuantity('inc')} />
                        </div>
                        <Button onClick={handleClick} className='Button-Product'>ADD TO CART</Button>
                    </div>

                </div>
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Product
