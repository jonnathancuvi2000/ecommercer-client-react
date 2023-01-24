import React, { useEffect, useState } from 'react';
import '../Style_Screem/Cart.css';
import Navbar from '../components/Navbar';
import Anoucenment from '../components/Anoucenment';
import Footer from '../components/Footer';
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';


// const KEY = process.env.REACT_APP_STRIPE;
const KEY = 'pk_test_51LwuQPBCQsKLwo4BNBHJO9Np9LMJah450gzALtIjPpeYZDFg3WOROZ5J0qzVaUQxqrGGdA1GHpYFY4kOdt6sYyOA00Uma2k2Yd'


export default function Cart() {

    const ProductColor = styled.div`
        background-color: ${(props) => props.color};
        `;

    const TopButton = styled.button`
            border: ${(props) => props.type === "filled" && "none"};
            background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
            color: ${(props) => props.type === "filled" && "white"};
            `;


    const SummaryItem = styled.div`
            font-weight: ${(props) => props.type === "total" && "500"};
            font-size: ${(props) => props.type === "total" && "24px"};
            `;



    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
        // console.log(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post('/checkout/payment',
                    {
                        tokenId: stripeToken.id,
                        amount: cart.totalPrice, // 25
                    }
                );
                console.log(res.data);
                navigate('/success', { state: res.data })
            } catch (error) {

            }
        }
        stripeToken && makeRequest(); // it just going to run thsi function if "stripeToken" exist 
    }, [stripeToken, cart.totalPrice, navigate])
    return (
        <div className='Container-Cart'>
            <Navbar></Navbar>
            <Anoucenment />
            <div className="Wrapper-Cart">
                <h1 className="Title-Cart">YOUR CART</h1>
                <div className="Top-Cart">
                    <TopButton className="TopButton-Cart">CONTINUE SHOPPING</TopButton>
                    <div className="TopTexts-Cart">
                        <span className="TopText-Cart">Shopping Bag(2)</span>
                        <span className="TopText-Cart">Your Wishlist (0)</span>
                    </div>
                    <TopButton className="TopButton-Cart" type="filled">CHECKOUT NOW</TopButton >
                </div>

                <div className="Bottom-Cart">
                    <div className="Info-Cart">

                        {cart.products?.map(product => (
                            <div className="Product-Cart">
                                <div className="ProductDetail-Cart">
                                    <img className='Image-Cart' src={product.img} alt="" />
                                    <div className="Details-Cart">
                                        <span className="ProductName-Cart">
                                            <b>Product:</b> {product.title}
                                        </span>
                                        <span className="ProductId-Cart">
                                            <b>ID:</b> {product._id}
                                        </span>
                                        <ProductColor className="ProductColor-Cart" color={product.color} ></ProductColor>
                                        <span className="ProductSize-Cart">
                                            <b>Size:</b> {product.size}
                                        </span>
                                    </div>
                                </div>

                                <div className="PriceDetail-Cart">
                                    <div className="ProductAmountContainer-Cart">
                                        <Add />
                                        <div className="ProductAmount-Cart">{product.quantity}</div>
                                        <Remove />
                                    </div>
                                    <div className="ProductPrice-Cart">$ {product.price * product.quantity}</div>
                                </div>

                            </div>

                        ))}

                        <hr className="Hr-Cart" />

                    </div>

                    <div className="Summary-Cart">
                        <h1 className="SummaryTitle-Cart">ORDER SUMMARY</h1>
                        <SummaryItem className="SummaryItem-Cart">
                            <span className="SummaryItemText-Cart">Subtotal</span>
                            <span className="SummaryItemPrice">$ {cart.totalPrice}</span>
                        </SummaryItem >

                        <SummaryItem className="SummaryItem-Cart">
                            <span className="SummaryItemText-Cart">Estimated Shipping</span>
                            <span className="SummaryItemPrice">$ 5.90</span>
                        </SummaryItem >

                        <SummaryItem className="SummaryItem-Cart">
                            <span className="SummaryItemText-Cart">Shipping Discount</span>
                            <span className="SummaryItemPrice">$ -5.90</span>
                        </SummaryItem >

                        <SummaryItem className="SummaryItem-Cart">
                            <span className="SummaryItemText-Cart">Total</span>
                            <span className="SummaryItemPrice">$  {cart.totalPrice}</span>
                        </SummaryItem >


                        <StripeCheckout
                            name="Ecommerce App"
                            image='https://play-lh.googleusercontent.com/58RktDMZt1DTMWICx_3X7AiedtZcYhzhK_jAqnLF-9TYzSLMthcR9oaRMB6ZjsZm2A'
                            shippingAddress
                            billingAddress
                            description="Pago utilizando Stripe"
                            amount={cart.totalPrice * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <button className="Button-Cart">CHECKOUT NOW</button>
                        </StripeCheckout>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
