import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
import '../Style_Screem/Login.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault(); // whit this he page does not refresh 
        login(dispatch, { username, password });
    }

    return (
        <div className='Container-Login'>
            <div className="Wrapper-Login">
                <h1 className="Title-Login">Sing In</h1>
                <form action="" className="Form-Login">
                    <input type="text" placeholder='username' className="Input-Login" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder='password' className="Input-Login" onChange={(e) => setPassword(e.target.value)} />
                    <button className="Button-Login" onClick={handleClick} disabled={isFetching}>Login</button>
                    {error && <span className='Error-Login'>Someting went wrong ...</span>}
                    <a href="" className="Link-Login">DO NOT YOU REMEMBER THE PASSWORD?</a>
                    <a href="" className="Link-Login">CREATE A NEW ACCOUNT</a>
                </form>
            </div>

        </div>
    )
}
