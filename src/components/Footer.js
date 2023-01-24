import React from 'react';
import '../style/Footer.css';
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";
import styled from 'styled-components';


const Footer = () => {

    const SocialIcon = styled.div`
    background-color: #${(props) => props.color};
    `
    return (
        <div className='container-footer'>
            <div className="left-footer">
                <h1 className="logo-footer">LAMA.</h1>
                <p className="des-footer">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </p>
                <div className="socialContainer">
                    <SocialIcon className='socialIcon' color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon className='socialIcon' color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon className='socialIcon' color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon className='socialIcon' color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </div>
            </div>
            <div className="center-footer">
                <h3 className='title-footer'>Useful Links</h3>
                <ul className='list-footer'>
                    <li className='listItem-footer'>Home</li>
                    <li className='listItem-footer'>Cart</li>
                    <li className='listItem-footer'>Man Fashion</li>
                    <li className='listItem-footer'>Woman Fashion</li>
                    <li className='listItem-footer'>Accessories</li>
                    <li className='listItem-footer'>My Account</li>
                    <li className='listItem-footer'>Order Tracking</li>
                    <li className='listItem-footer'>Wishlist</li>
                    <li className='listItem-footer'>Wishlist</li>
                    <li className='listItem-footer'>Terms</li>
                </ul>
            </div>
            <div className="right-footer">
                <h3 className='title-footer'>Contact</h3>
                <div className="contactItema">
                    <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
                </div>
                <div className="contactItema">
                    <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
                </div>
                <div className="contactItema">
                    <MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev
                </div >
                <img className='payment' src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
            </div>
        </div>
    )
}

export default Footer
