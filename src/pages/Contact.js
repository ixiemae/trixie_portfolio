import React from "react";
import { Link } from 'react-router-dom';
import '../css/Contact.css';
import fb from '../facebook.png';
import github from '../github.png';

const Contact = () => {
    return(
        <div className="contact-container">
            <h1 className="contact-title">Contact Information</h1>
            
            <div className="contact-details">
                <div className="contact-card">
                    <h2>Get in touch with me!</h2>
                    <div className="contact-items-container">
                        <div className="contact-item">
                            <strong>Email:</strong> trgu.motil.au@phinmaed.com
                        </div>
                        <div className="contact-item">
                            <strong>Phone:</strong> +63 992 673 1512
                        </div>
                        <div className="contact-item">
                            <strong>Location:</strong> Nueva Ecija, Philippines
                        </div>
                        <div className="contact-item">
                            <strong>Socials:</strong> 
                            <a href="https://m.facebook.com/trixiem0til/" target="_blank">
                                <img src={fb} alt="My portrait" className="fblogo" />
                            </a>
                            <a href="https://github.com/ixiemae" target="_blank">
                                <img src={github} alt="My portrait" className="fblogo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="back-btn-container">
                <Link to="/" className="back-btn">← Back to Home</Link>
            </div>
        </div>
    )
}

export default Contact;