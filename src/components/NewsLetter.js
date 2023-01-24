import React from 'react';
import { Send } from "@material-ui/icons";
import styled from "styled-components";
import '../style/NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='container-Newsletter'>
            <h1 className="title-NewsLetter">NewsLetter</h1>
            <p className="desc-Newsletter">I just wroyte this because I did not know what else I could write</p>
            <div className="inputContainer">
                <input type="text" placeholder='Your Email'/>
                <button>
                    <Send />
                </button>
            </div>
        </div>
    )
}

export default NewsLetter
