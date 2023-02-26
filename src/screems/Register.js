import React, { useState } from 'react';
import '../Style_Screem/Register.css';
import { register } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';

export default function Register() {

  const [userInfo, setUserInfo] = useState(null)
  const [errorPassword, setErrorPassword] = useState(true)
  const dispath = useDispatch()

  const handelClik = (e) => {
    e.preventDefault(); // whit this he page does not refresh 
    if (userInfo.password === userInfo.confiPassword) {
      setErrorPassword(true);
      delete userInfo.confiPassword // delete de 
      // we send teh data to the data base 
      register(dispath, userInfo);
    } else {
      setErrorPassword(false);
    }
  }

  const handleChange = (e) => {
    const value = e.target.value
    setUserInfo({
      ...userInfo,
      [e.target.name]: value
    })
  }
  console.log(userInfo)

  return (
    <div className='Container-Register'>
      <div className="Wrapper-Register">
        <h1 className="Title-Register">CREATE AN ACCOUNT</h1>
        <form action="" className="Form-Register">
          <input name='name' onChange={(e) => handleChange(e)} required type="text" placeholder='name' className="Input_Register" />
          <input name='lastname' onChange={(e) => handleChange(e)} required type="text" placeholder='last name' className="Input_Register" />
          <input name='username' onChange={(e) => handleChange(e)} required type="text" placeholder='username' className="Input_Register" />
          <input name='email' onChange={(e) => handleChange(e)} required type="text" placeholder='email' className="Input_Register" />
          <input name='password' onChange={(e) => handleChange(e)} required type="text" placeholder='password' className="Input_Register" />
          <input name='confiPassword' onChange={(e) => handleChange(e)} required type="text" placeholder='confirm password' className="Input_Register" />
          {!errorPassword &&
            <span className="Password-Register">
              Something has gone wrong, pleace check the passwors is the same
            </span>
          }
          <span className="Agreement-Register">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button onClick={handelClik} className="Button-Register">CREATE</button>
        </form>
      </div>

    </div>
  )
}
