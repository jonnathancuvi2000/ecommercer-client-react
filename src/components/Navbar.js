
import React from 'react';
import '../style/Navbar.css'
// import styled from 'styled-components';
import { Search, ShoppingCartOutlined, Person } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import DropdownItem from './DropdownItem';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { deleteData_user } from "../redux/userRedux";
import { deleteData_products } from '../redux/cardRedux';
import { deleteData_Order } from '../redux/orderRedux'
// images 
import user from '../img/user.png';
import edit from '../img/edit.png';
import settings from '../img/settings.png';
import help from '../img/question.png';
import logout from '../img/log-out.png';

export default function Navbar() {
    const currentUser = useSelector((state) => state.user.currentUser);
    // console.log(currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }

        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    // we get the quantity from de STORE
    const quantity = useSelector(state => state.cart.quantity);

    const handleLongOut = () => {
        console.log('LongOut');
        dispatch(deleteData_user());
        dispatch(deleteData_products());
        dispatch(deleteData_Order());
        navigate("/");
    }

    const handleMyProfile = () => {
        console.log('MyPRifle');

    }
    const handleEditProfile = () => {
        console.log('Edit Profile');
        navigate('/editprofile')

    }
    const handleSettings = () => {
        console.log('settings');

    }
    const handleHelp = () => {
        console.log('help');

    }

    return (
        <div>
            <div className='contenedor'>
                <div className='wrapper'>
                    <div className='left'>
                        <span className='Language-Navbar'> EN </span>
                        <div className='sercheContainer'>
                            <input />
                            <Search style={{ color: "gray", fontSize: 16 }} />
                        </div>
                    </div>
                    <div className='center'>
                        <Link to={'/'} className='link-logo'>
                            <div className='logo'>
                                ECCMMERCE-APP.
                            </div>
                        </Link>
                    </div>
                    <div className='right'>
                        <Link to={'/'} className='link-logo'>
                            <div className='menuItem'>Home</div>
                        </Link>
                        <Link to={'/products'} className='link-logo'>
                            <div className='menuItem'>Productos</div>
                        </Link>
                        {/* <Link to={'/about'} className='link-logo'>
                            <div className='menuItem'>About</div>
                        </Link> */}
                        <Link to={'/login/'} className='link-logo'>
                            {!currentUser &&
                                <div className='menuItem'>Sigh In</div>
                            }
                        </Link>
                        <Link to={'/register/'} className='link-logo'>
                            {!currentUser &&
                                <div className='menuItem'>Registar</div>
                            }
                        </Link>

                        <Link to={`/cart/`}>
                            <div className='menuItem'>
                                <Badge badgeContent={quantity} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </div>
                        </Link>
                        {currentUser &&
                            <div className="menu-container" ref={menuRef}>
                                <div className="menu-trigger" onClick={() => { setOpen(!open) }}>
                                    <div className="icon-ui">
                                        <Person />
                                    </div>
                                </div>
                                <div className={`dropdwon-nemu ${open ? 'active' : 'inactive'}`}>
                                    <div className="menu-title">
                                        <h3>{currentUser ? currentUser.username : "Usuario"} </h3>
                                        <h5>{currentUser ? currentUser.email : "Usuario@gmail.com"} </h5>
                                    </div>
                                    <ul>
                                        {/* <DropdownItem img={user} text={"My Profile"} click={handleMyProfile} /> */}
                                        <DropdownItem img={edit} text={"Edit Profile"} click={handleEditProfile} />
                                        {/* <DropdownItem img={settings} text={"Setting"} click={handleSettings} /> */}
                                        <DropdownItem img={help} text={"Help"} click={handleHelp} />
                                        <DropdownItem img={logout} text={"Long Out"} click={handleLongOut} />
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
