import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import '../style/Spinner.css'

export default function Spinner() {
    return (
        <div className='spiner-container'>
            <div className="spiner">
                <ClipLoader color="teal" />
            </div>
        </div>
    )
}
