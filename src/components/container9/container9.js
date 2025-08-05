import React from 'react'
import "./container9.css"
import rasm from "../../assats/rasm.png"

const Container9 = () => {
    return (
        <div className='main9'>
            <h1>Testimonials</h1>
            <p>"Calm, Serene, Retro – What a way to relax and enjoy"</p>
            <p style={{ display: "flex", justifyContent: "center" }}>Mr. and Mrs. Baxter, UK</p>
            <div className='rasm9'>
                <img src={rasm} alt='rasm' />
            </div>
        </div>
    )
}

export default Container9