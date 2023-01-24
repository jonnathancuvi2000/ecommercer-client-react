import React from 'react';
import '../Style_Screem/Register.css';

export default function Register() {
  return (
    <div className='Container-Register'>
      <div className="Wrapper-Register">
        <h1 className="Title-Register">CREATE AN ACCOUNT</h1>
        <form action="" className="Form-Register">
          <input type="text" placeholder='name' className="Input_Register" />
          <input type="text" placeholder='last name' className="Input_Register" />
          <input type="text" placeholder='username' className="Input_Register" />
          <input type="text" placeholder='email' className="Input_Register" />
          <input type="text" placeholder='password' className="Input_Register" />
          <input type="text" placeholder='confirm password' className="Input_Register" />
          <span className="Agreement-Register">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="Button-Register">CREATE</button>
        </form>
      </div>

    </div>
  )
}
