import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../style/Success.css'
import { CheckCircleOutline } from "@material-ui/icons";
import { useDispatch } from 'react-redux';
import { deleteData_user } from '../redux/userRedux';
import { deleteData_products } from '../redux/cardRedux';
import { deleteData_Order } from '../redux/orderRedux';


const Success = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // console.log(location.state.dataUser.cartInfo.products);

    const handleClick = () =>{
        // dispatch(deleteData_user());
        dispatch(deleteData_products());
        dispatch(deleteData_Order());
        navigate("/");

    }
    return (
        <div className='successfull-payment'>
            <div className="Warapper-successfull-pay">
                <div className="successfull-pay-top">
                    <h1  className='successfull-payment-title'>Payment Succesfull</h1>
                    <div className="successfull-icon">
                        <CheckCircleOutline style={{ fontSize: 60, color: 'rgb(7, 219, 7' }} />
                    </div>
                </div>
                <div className="successfull-pay-below">
                    <div className="successfull-pay-info">
                        <span className='   '>User id</span>
                        <span>{location.state.dataUser.userId}</span>
                    </div>
                    <div className="successfull-pay-info">
                        <span className='   '>Transaction id</span>
                        <span>{location.state.paymentInfo.id}</span>
                    </div>
                    <div className="successfull-pay-table">
                        <table>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                            {location.state.dataUser.cartInfo.products.map(product => (
                                <tr key={product.title}>
                                    <td>{product.title} </td>
                                    <td>{product.price} </td>
                                    <td>{product.quantity}</td>
                                </tr>

                            ))}
                        </table>
                    </div>
                    <div className="successfull-pay-info">
                        <span className='title-successfull-pay'>Amount paid</span>
                        <span>{location.state.dataUser.cartInfo.totalPrice}</span>
                    </div>
                </div>
                <div className="successfull-pay-btns">
                    <button className="btn-successfull-pay" onClick={handleClick}>Back to the Store</button>
                    <button className="btn-successfull-pay" onClick={handleClick}>Close</button>
                </div>

            </div>
        </div>
    )
}

export default Success
