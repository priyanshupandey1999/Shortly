import React from 'react'

function Navbar() {
    return (
        <div className = "navbar">
            <img src ='images/logo.svg' className = "logo" alt="" />
            <ul>
                <li><a href="/#">Features</a></li>
                <li><a href="/#">Pricing</a></li>
                <li><a href="/#">Resources</a></li>
            </ul>
            <div className="right-button">
                <a href="/#">Login</a>
                <a href="/#" className="btn">Sign Up</a>
            </div>
        </div>
    )
}

export default Navbar
