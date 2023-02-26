import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import '../Style_Screem/Order.css'
import { useDispatch, useSelector } from 'react-redux';
import { addPayment } from '../redux/orderRedux';


export default function OrderStepPayment({ setCurrentStep }) {
    const [payment, setPayment] = useState('pickUp');
    const dispatch = useDispatch()
    const orderInfo = useSelector(state => state.orderInfo);

    useEffect(() => {
        if (orderInfo.paymet) {
            setPayment(orderInfo.paymet)
        }
    }, [])

    const handleChange = (e) => {
        setPayment(e.target.value)
    }

    const handelClick = () => {
        dispatch(addPayment({ payment }))
    }

    console.log(payment)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1>Payment</h1>
            <div className="Wrapper-Payment">
                <FormControl>
                    {/* <FormLabel id="demo-radio-buttons-group-label">Payment</FormLabel> */}
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        onChange={handleChange}
                        value={payment}
                    >
                        <FormControlLabel value="pickUp" control={<Radio />} label="Pick up from store" />
                        <FormControlLabel value="stripe" control={<Radio />} label="Stripe" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div>

                <Button style={{
                    backgroundColor: "teal",
                    marginRight: '20px',
                    paddingLeft: '50px',
                    paddingRight: '50px',
                }} onClick={() => setCurrentStep(1)} variant='contained' color='primary'>Back</Button>
                <Button style={{
                    backgroundColor: "teal",
                    paddingLeft: '50px',
                    paddingRight: '50px',
                }} onClick={() => { setCurrentStep(3); handelClick() }} variant='contained' color='primary'>Next</Button>
            </div>
        </div>
    )
}
