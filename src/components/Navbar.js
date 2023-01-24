
import React from 'react';
import '../style/Navbar.css'
// import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export default function Navbar() {
    // we get the quantity from de STORE
    const quantity = useSelector(state => state.cart.quantity);

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
                        <div className='logo'>LAMA.</div>
                    </div>
                    <div className='right'>
                        <div className='menuItem'>Registar</div>
                        <div className='menuItem'>Sigh In</div>
                        <Link to={`/cart/`}>
                            <div className='menuItem'>
                                <Badge badgeContent={quantity} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
