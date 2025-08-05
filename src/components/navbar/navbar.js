import React from 'react'
import "./navbar.css"
import buttonimg from "../../assats/home.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <div className="MainContiner">

                <div className='mainsaidbar'>

                    <div className='mainsaidbar_left'>

                        <div className='mainsaidbar_left_back'>
                            <h2 style={{ color: "#14274A" }}>LUXURY</h2>
                            <p style={{ color: "#14274A" }}>HOTELS</p>
                        </div>

                    </div>

                    <div className='mainsaidbar_right'>

                        <Link to="/">
                            <h3>Home</h3>
                        </Link>

                        <Link to="/facelities">
                            <h3>Facilities</h3>
                        </Link>

                        <Link to="/rooms">
                            <h3>Rooms</h3>
                        </Link>

                        <Link to="/contact">
                            <h3>Contact-us</h3>
                        </Link>

                    </div>
                </div>

                <div className='mainpage'>
                    <div className='empty'>
                        <div className='mainpage-left'>
                            <h3>WELCOME TO</h3>
                            <h3 style={{ color: "white", fontSize: 56 }}>LUXURY</h3>
                            <h3>HOTELS</h3>
                            <span style={{ color: "white" }}>Book your stay and enjoy Luxury <br />
                                redefined at the most affordable rates</span>
                        </div>
                    </div>
                    <div className='mainpage-right'>

                    </div>
                </div>

                <div className='main-button'>
                    <button> <img className='buttonimage' src={buttonimg} alt='buttonimg' /> BOOK NOW</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar