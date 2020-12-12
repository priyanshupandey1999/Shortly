import React from 'react'
import ContactForm from './ContactForm'

function ConnectCommunity() {
    return (
        <div className="connect-community">
            <div className="community-heading">Connect with the community.</div>
            <div className="connect-community-grid">
                <img src="images/app-install.svg" alt="" />
                <div className="contact-form">
                <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default ConnectCommunity
