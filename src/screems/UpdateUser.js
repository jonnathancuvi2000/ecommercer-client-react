import React, { useEffect, useState } from 'react';
import '../Style_Screem/UpdateUser.css';
import { updagteUser } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { AccountCircle } from '@material-ui/icons'
import axios from 'axios';
import Footer from '../components/Footer'


export default function UpdateUser() {

  const [userInfo, setUserInfo] = useState(null)
  const [errorPassword, setErrorPassword] = useState(true)
  const dispath = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser);
  console.log(currentUser)

  useEffect(() => {
    if (currentUser && !userInfo) {
      setUserInfo(currentUser)
      console.log("???????????")
      console.log(userInfo)
    }
  }, [currentUser, userInfo])

  const handelClik = async (e) => {
    e.preventDefault(); // whit this he page does not refresh 

    setErrorPassword(true);
    updagteUser(dispath, userInfo);

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
    <div >
      <Navbar></Navbar>
      <div className='Container-UpdateUser'>
        <div className="Wrapper-UpdateUser">
          <div className="UpdateUser-top">
            <AccountCircle style={{ fontSize: 60, color: '#ccc', textAlign: 'center' }} />
            <h1 className="Title-UpdateUser">Edit Profile User</h1>
          </div>
          <form action="" className="Form-UpdateUser">
            <input defaultValue={currentUser.name} name='name' onChange={(e) => handleChange(e)} required type="text" placeholder='name' className="Input_Register" />
            <input defaultValue={currentUser.lastname} name='lastname' onChange={(e) => handleChange(e)} required type="text" placeholder='last name' className="Input_Register" />
            <input defaultValue={currentUser.username} name='username' onChange={(e) => handleChange(e)} required type="text" placeholder='username' className="Input_Register" />
            <input defaultValue={currentUser.email} name='email' onChange={(e) => handleChange(e)} required type="text" placeholder='email' className="Input_Register" />
            <input name='password' onChange={(e) => handleChange(e)} required type="text" placeholder='New password' className="Input_Register" />
            <input name='confiPassword' onChange={(e) => handleChange(e)} required type="text" placeholder='Confirm new password' className="Input_Register" />
            {!errorPassword &&
              <span className="Password-UpdateUser">
                Something has gone wrong, pleace check the passwors is the same
              </span>
            }
            <div className="btns">
              <button onClick={handelClik} className="Button-UpdateUser">Edit</button>
            </div>
          </form>
        </div>

      </div>
      <Footer />
      
    </div>
  )
}
