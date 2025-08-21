import React from "react";
import { Link } from 'react-router-dom';
import myImage from '../images/my_image.jpg';
import '../css/About.css';

const About = () => {
    return(
        <div className="about-container">
            <h1 className="about-title">About Me!</h1>
            <div className="about-content">
                <img src={myImage} alt="My portrait" className="about-image" />
                <div className="about-text">
                    <p>Hello! My name is Trixie Mae DG. Motil. I am 20 years old and currently a student at Phinma Araullo University pursuing a Bachelor of Science in Information Technology, Major in System Development.</p>
                    
                    <h2>Education</h2>
                    <p>Bachelor of Science in Information Technology<br />
                    Phinma Araullo University<br />
                    2023 - Present</p>
                    
                    <h2>Skills</h2>
                    <ul className="skills-list">
                        <li>Frontend Development (HTML, CSS, JavaScript, React)</li>
                        <li>Backend Development (MySQL)</li>
                        <li>Database Management</li>
                        <li>UI/UX Design</li>
                    </ul>
                    
                    <Link to="/" className="back-button">← Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default About;