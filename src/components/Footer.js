import React from 'react'

function Footer() {
    return (
        <div className="footer-grid">
            <img src ='images/logo.svg' className = "logo"  />
            <div className="footer-link">
                <ul>
                    <li>Features</li>
                    <li>Detailed Analytics</li>
                    <li>Courses</li>
                    <li>Boot-Camp</li>
                </ul>
            </div>
            <div className="footer-link">
                <ul>
                    <li>Partners</li>
                    <li>SpaceX</li>
                    <li>Google</li>
                    <li>Microsoft</li>
                </ul>
            </div>
            <div className="footer-link">
                <ul>
                    <li>Company</li>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-link">
                <ul>
                    <li>Social Media</li>
                    <li><i><img src ='images/icon-facebook.svg' /></i><i><img src ='images/icon-instagram.svg' /></i><i><img src ='images/icon-pinterest.svg' /></i><i><img src ='images/icon-twitter.svg' /></i></li>
                </ul>
            </div>
            
            
        </div>
    )
}

export default Footer
