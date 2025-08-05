import React from 'react'
import "./footer.css"
import footerface from "../../assats/facebook.png"
import footertwit from "../../assats/twitter.png"
import footerinsta from "../../assats/insta.png"

const Footer = () => {
    return (
        <div className='mainfooter'>

            <div className='mainfooter1'>
                <h1 style={{ color: "white" }}>LUXURY</h1>
                <p style={{ color: "white", display: "flex", marginBottom: '10px', paddingLeft: '25px' }}>HOTELS</p>
                <p style={{ color: "white" }}>497 Evergreen Rd. Roseville, CA 95673 <br />+44 345 678 903 <br />luxury_hotels@gmail.com</p>
            </div>

            <div className='mainfooter2'>
                <h2>About Us </h2>
                <h2>Contact </h2>
                <h2>Terms & Conditions</h2>
            </div>

            <div className='mainfooter3'>
                <div className='Facebook'>
                    <img src={footerface} alt='footerimg' />
                    <h2 style={{ color: "white" }}>Facebook</h2>
                </div>
                <div className='Twitter'>
                    <img src={footertwit} alt='footerimg' />
                    <h2 style={{ color: "white" }}>Twitter </h2>
                </div>
                <div className='Instagram'>
                    <img src={footerinsta} alt='footerimg' />
                    <h2 style={{ color: "white" }}>Instagram</h2>
                </div>
            </div>

            <div className='mainfooter4'><h2 style={{ color: "white" }}>Subscribe to our newsletter</h2>
                <div className='footerinbut'>
                    <input type='text' id="inputID" placeholder='Email Address' className='footerinput' />
                    <button className='footerbutton'>OK</button>
                </div>
            </div>

        </div>
    )
}

export default Footer