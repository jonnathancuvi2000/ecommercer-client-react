import React, { useEffect, useState } from 'react';
import '../Style_Screem/Cart.css';
import Navbar from '../components/Navbar';
import Anoucenment from '../components/Anoucenment';
import Footer from '../components/Footer';
import { Add, Remove, Delete } from "@material-ui/icons";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../requestMethods';
import { Link, useNavigate } from 'react-router-dom';
import { updateProduct, removeProduct } from '../redux/cardRedux'


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



    let cart = useSelector(state => state.cart);
    localStorage.setItem('productos', JSON.stringify(cart.products));


    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                        amount: cart.totalPrice * 100, // this has to be the same "amount" tha it is in the button below
                    }
                );
                console.log(res.data);
                navigate('/success', { state: res.data })
            } catch (error) {

            }
        }
        stripeToken && makeRequest(); // it just going to run thsi function if "stripeToken" exist 
    }, [stripeToken, cart.totalPrice, navigate])


    // solo actualice y empeso aa funcionar esto ------------   
    const handelClickDecrease = (product, cantidad) => {
        // no puedes cambiar los datos que extraes directamente de redux, almacene en localstorace para cambiarlos
        if (cantidad > 0) {
            console.log(product);
            const priceProduct = product.price;
            const type = "decres";
            console.log(cantidad);
            console.log("DECRE");
            let productos = localStorage.getItem('productos')
            // console.log(typeof(JSON.parse(productos)))
            let datos = JSON.parse(productos);
            console.log(datos);
            datos.map((item) => {
                if (item._id === product._id) {
                    item.quantity = cantidad;
                }
                return '';
            })
            console.log(datos);
            dispatch(updateProduct({ datos, priceProduct, type }))
        }

    }

    const handelClickIncrease = (product, cantidad) => {
        console.log(product);
        const priceProduct = product.price;
        console.log(cantidad);
        const type = "incres";

        console.log("INCRE");
        let productos = localStorage.getItem('productos')
        // console.log(typeof(JSON.parse(productos)))
        let datos = JSON.parse(productos);
        console.log(datos);
        datos.map((item) => {
            if (item._id === product._id) {
                item.quantity = cantidad;
            }
            return '';
        })
        console.log(datos);
        dispatch(updateProduct({ datos, priceProduct, type }))

    }

    const handelClickRemoveProduct = (product, precio, cantidad) => {
        dispatch(removeProduct({ product, precio, cantidad }))
    }

    console.log(cart)

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
                                        <div className="icon" onClick={() => handelClickDecrease(product, product.quantity - 1)} >
                                            <Remove />
                                        </div>
                                        <div className="ProductAmount-Cart">{product.quantity}</div>
                                        <div className="icon" onClick={() => handelClickIncrease(product, product.quantity + 1)}>
                                            <Add />
                                        </div>
                                    </div>
                                    <div className="ProductPrice-Remove">
                                        <div className="ProductPrice-Cart">$ {product.price * product.quantity}</div>
                                        <div className="remove-icon" onClick={() => handelClickRemoveProduct(product, product.price, product.quantity)}>
                                            <Delete />
                                        </div>
                                    </div>
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

                        {/* <SummaryItem className="SummaryItem-Cart">
                            <span className="SummaryItemText-Cart">Estimated Shipping</span>
                            <span className="SummaryItemPrice">$ 5.90</span>
                        </SummaryItem >

                        <SummaryItem className="SummaryItem-Cart">
                            <span className="SummaryItemText-Cart">Shipping Discount</span>
                            <span className="SummaryItemPrice">$ -5.90</span>
                        </SummaryItem > */}

                        <SummaryItem className="SummaryItem-Cart">
                            <span className="SummaryItemText-Cart">Total</span>
                            <span className="SummaryItemPrice">$  {cart.totalPrice}</span>
                        </SummaryItem >


                        {/* <StripeCheckout
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
                        </StripeCheckout> */}
                        <Link to={'/order'}>
                            <button className="btn-compra">Realizar Compra</button>
                        </Link>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
