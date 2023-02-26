import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OrderSpetAddress from '../components/OrderSpetAddress'
import OrderStepPayment from '../components/OrderStepPayment'
import OrderStepShipping from '../components/OrderStepShipping'
import '../Style_Screem/Order.css'
import { StepLabel, Step, Stepper, makeStyles } from '@material-ui/core'

export default function Order() {
  const [currentStep, setCurrentStep] = useState(1);
  const useStyles = makeStyles(() => ({
    root: {
      "& .MuiStepIcon-active": { color: "teal" },
      "& .MuiStepIcon-completed": { color: "teal" },
      // "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" }
    }
  }));
  function showStep(step) {
    switch (step) {
      case 1:
        return <OrderSpetAddress setCurrentStep={setCurrentStep} />
      case 2:
        return <OrderStepPayment setCurrentStep={setCurrentStep} />
      case 3:
        return <OrderStepShipping setCurrentStep={setCurrentStep} />
      default:
        return
    }
  }

  const c = useStyles();

  return (
    <div className='containerOrder'>
      <Navbar />
      <div className="Wrapper-Order">
        {/* <h1 className="Title-Order">Your Order</h1> */}
        <div className="Steepers" >
          <Stepper className={c.root} style={{ width: '100%', }} activeStep={currentStep} orientation='horizontal'>
            <Step className='step'>
              <StepLabel><span className='label-stepper'>Login</span></StepLabel>
            </Step>
            <Step className='step'>
              <StepLabel style={{ color: 'red' }}><span className='label-stepper'>Address</span></StepLabel>

            </Step>
            <Step className='step'>
              <StepLabel><span className='label-stepper'>Payment</span></StepLabel>

            </Step>
            <Step className='step'>
              <StepLabel><span className='label-stepper'>Order</span></StepLabel>

            </Step>
          </Stepper>
        </div>
        {
          showStep(currentStep)
        }

      </div>
      <Footer />
    </div>
  )
}
