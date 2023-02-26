import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import '../Style_Screem/Order.css'
import { makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { addShippingInfo } from '../redux/orderRedux'
// import { updateProduct, removeProduct } from '../redux/cardRedux'


const focusedColor = "rgba(81, 203, 238, 1)";
const useStyles = makeStyles({
    root: {
        // input label when focused
        "& label.Mui-focused": {
            color: focusedColor
        },
        // focused color for input with variant='standard'
        "& .MuiInput-underline:after": {
            borderBottomColor: focusedColor
        },
        // focused color for input with variant='filled'
        "& .MuiFilledInput-underline:after": {
            borderBottomColor: focusedColor
        },
        // focused color for input with variant='outlined'
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: focusedColor
            }
        }
    }
});


export default function OrderSpetAddress({ setCurrentStep }) {
    const classes = useStyles();
    const [shippingInfo, setShippingInfo] = useState(null)
    const cartInfo = useSelector(state => state.cart);
    const userInfo = useSelector(state => state.user);
    const dispatch = useDispatch()

    // let shippingAddress = JSON.parse(localStorage.getItem('shippingAddress'))
    const orderInfo = useSelector(state => state.orderInfo);
    let shippingAddress = orderInfo.shippingInfo;
    console.log(shippingAddress)



    useEffect(() => {
        if (shippingAddress) {
            setShippingInfo(shippingAddress);
        }
    }, [])


    const handleUserData = (e) => {
        const value = e.target.value;
        setShippingInfo({
            ...shippingInfo,
            [e.target.name]: value
        })
    }

    const handelClick = () => {
        // localStorage.setItem('shippingAddress', JSON.stringify(shippingInfo));
        // we get the current user
        const currentUserID = userInfo.currentUser._id
        dispatch(addShippingInfo({ cartInfo, shippingInfo, currentUserID }))
    }


    return (
        <div className='shippingAddress' >
            <h1>Shipping Address</h1>
            <div>
                <TextField defaultValue={shippingAddress ? shippingAddress.fullName : ""} name='fullName' onChange={(e) => handleUserData(e)} className={classes.root} label='Full Name' margin='normal' variant='outlined' color='secondary' />
            </div>
            <div>
                <TextField defaultValue={shippingAddress ? shippingAddress.address : ''} name='address' onChange={(e) => handleUserData(e)} className={classes.root} label='Address' margin='normal' variant='outlined' color='secondary' />
            </div>
            <div>
                <TextField defaultValue={shippingAddress ? shippingAddress.city : ''} name='city' onChange={(e) => handleUserData(e)} className={classes.root} label='City' margin='normal' variant='outlined' color='secondary' />
            </div>
            <div>
                <TextField defaultValue={shippingAddress ? shippingAddress.postalCode : ''} name='postalCode' onChange={(e) => handleUserData(e)} className={classes.root} label='Postal Code' margin='normal' variant='outlined' color='secondary' />
            </div>
            <div>
                <TextField defaultValue={shippingAddress ? shippingAddress.country : ''} name='country' onChange={(e) => handleUserData(e)} className={classes.root} label='Country' margin='normal' variant='outlined' color='secondary' />
            </div>
            <div>
                <Button style={{
                    backgroundColor: "teal",
                    paddingLeft: '50px',
                    paddingRight: '50px',
                }}
                    onClick={() => { setCurrentStep(2); handelClick() }} variant='contained' color='primary'>Next</Button>
            </div>
        </div>
    )
}
