import React from "react";
import { Link } from 'react-router-dom';
import myImage from '../images/my_image.jpg';
import moneyManagerImg from '../images/money_manager.png';
import rmsImg from '../images/rms_system.png';

const Home = () => {
    return(
        <div className="home-container">
            <section className="hero-section">
                <img src={myImage} alt="My portrait" className="profile-img" />
                <div className="intro-content">
                    <h1>WELCOME TO MY PORTFOLIO!</h1>
                    <p className="intro-text">Hello! I am <b>Trixie Mae DG. Motil</b> and I am excited to share my projects and experiences with you.</p>
                    <Link to="/about" className="view-btn">More About Me →</Link>
                </div>
            </section>

            <section className="projects-preview">
                <h2>Featured Projects</h2>
                <div className="project-cards">
                    <div className="project-card">
                        <img src={moneyManagerImg} alt="Money Manager" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
                        <h3>Money Manager Website</h3>
                        <p>Full Stack Developer</p>
                        <p>A personal finance management system for tracking income, expenses, and budgets.</p>
                        <Link to="/projects" className="view-btn">View Project →</Link>
                    </div>

                    <div className="project-card">
                        <img src={rmsImg} alt="Registration Management System" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
                        <h3>Registration Management System</h3>
                        <p>Full Stack Developer</p>
                        <p>A system for managing student and teacher registration, profiles, and admin controls.</p>
                        <Link to="/projects" className="view-btn">View Project →</Link>
                    </div>
                </div>

                <Link to="/projects" className="view-all-btn">View All Projects</Link>
            </section>

            <section className="contact-preview">
                <h2>Let's Work Together!</h2>
                <p>Interested in my work or want to discuss opportunities?</p>
                <Link to="/contact" className="contact-btn">Contact Me</Link>
            </section>
        </div>
    )
}

export default Home;
