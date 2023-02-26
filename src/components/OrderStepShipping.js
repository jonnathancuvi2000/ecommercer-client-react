import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import '../style/OrderStepShipping.css'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { publicRequest, userRequest } from '../requestMethods'
import StripeCheckout from 'react-stripe-checkout';

// const KEY = process.env.REACT_APP_STRIPE;
const KEY = 'pk_test_51LwuQPBCQsKLwo4BNBHJO9Np9LMJah450gzALtIjPpeYZDFg3WOROZ5J0qzVaUQxqrGGdA1GHpYFY4kOdt6sYyOA00Uma2k2Yd'


export default function OrderStepShipping({ setCurrentStep }) {
    const orderInfo = useSelector(state => state.orderInfo)
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate()


    const handleClick = async () => {
        try {
            const res = await publicRequest.post(`/buys`, orderInfo);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post('/checkout/payment',
                    {
                        tokenId: stripeToken.id,
                        amount: (orderInfo.cartInfo.totalPrice) * 100, // this has to be the same "amount" tha it is in the button below
                    }
                );
                console.log(res.data);
                handleClick()
                navigate('/success', { state: { paymentInfo: res.data, dataUser: orderInfo } })
            } catch (error) {

            }
        }
        stripeToken && makeRequest(); // it just going to run thsi function if "stripeToken" exist 
    }, [stripeToken, orderInfo, navigate])

    const onToken = (token) => {
        setStripeToken(token);
        // console.log(token)
    }
    return (
        <>
            <h1>Summary Order</h1>
            <div className='Wrapper-OrderSumary'>
                <div className="orderSumaryLeft">
                    <div className="orderInfo orderShipping">
                        <div className="title-edit">
                            <div>
                                <h3>Shipping</h3>
                            </div>
                            <a onClick={() => setCurrentStep(1)}>Edit</a>

                        </div>
                        <div className="userName">
                            <span className="sub-title-info">Name: </span>
                            <span className="">{orderInfo.shippingInfo.fullName}</span>
                        </div>
                        <div className="userAddress">
                            <span className="sub-title-info">Address: </span>
                            <span className="">{orderInfo.shippingInfo.address}, </span>
                            <span className="">{orderInfo.shippingInfo.city}, </span>
                            <span className="">{orderInfo.shippingInfo.postalCode}, </span>
                            <span className="">{orderInfo.shippingInfo.country}.</span>
                        </div>
                    </div>
                    <div className="orderInfo orderPayment">
                        <div className="title-edit">
                            <div>
                                <h3>Payment</h3>
                            </div>
                            <a onClick={() => setCurrentStep(2)}>Edit</a>
                        </div>
                        <div className="userName">
                            <span className="sub-title-info">Payment: </span>
                            <span className="">{orderInfo.paymet}</span>
                        </div>
                    </div>
                    <div className="orderInfo orderProduct">
                        <div className="title-edit">
                            <div>
                                <h3>Products</h3>
                            </div>
                            <Link to={`/cart/`}>
                                Edit
                            </Link>
                        </div>
                        {orderInfo.cartInfo.products.map(product => (
                            <div className="info-products">
                                <div className="img"><img src={product.img} alt="" /></div>
                                <div className="name">{product.title}</div>
                                <div className="quantity">{product.quantity}</div>
                                <div className="price">$ {product.price}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="orderSumaryRght">
                    <h3>Sumary</h3>
                    <div className="item">
                        <span >Items Number: </span>
                        <span >{orderInfo.cartInfo.quantity}</span>
                    </div>
                    <div className="item">
                        <span >Shipping: </span>
                        <span >$ 0</span>
                    </div>
                    <div className="item">
                        <span >Sub Total: </span>
                        <span >$ {orderInfo.cartInfo.totalPrice}</span>
                    </div>
                    <div className="item">
                        <span >Total: </span>
                        <span >$ {orderInfo.cartInfo.totalPrice}</span>
                    </div>

                    {/* <button className="btn-compra" onClick={handleClick}>Checkout - Strip</button> */}
                    <StripeCheckout
                        name="Ecommerce App"
                        image='https://play-lh.googleusercontent.com/58RktDMZt1DTMWICx_3X7AiedtZcYhzhK_jAqnLF-9TYzSLMthcR9oaRMB6ZjsZm2A'
                        shippingAddress
                        billingAddress
                        description="Pay with Stripe"
                        amount={(orderInfo.cartInfo.totalPrice) * 100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <button className="Button-Cart">CheckOut Now - Stripe</button>
                    </StripeCheckout>
                </div>

            </div>
            <div className="butsshippingSumary">
                <Button style={{
                    backgroundColor: "teal",
                    marginRight: '20px',
                    paddingLeft: '50px',
                    paddingRight: '50px',
                }} onClick={() => setCurrentStep(2)} variant='contained' color='primary'>Back</Button>
                {/* <Button style={{
                    backgroundColor: "teal",
                }} variant='contained' color='primary'>Finish</Button> */}
            </div>
        </>
    )
}
