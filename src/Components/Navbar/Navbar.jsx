import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Sewwandi</div>
                <div>toggle</div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Education</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                        <li> <button className="button">
                            Contact me
                        </button>
                        </li>
                    </ul>
                </div>
               
                
            </div>
        </div>

    )
}

export default Navbar