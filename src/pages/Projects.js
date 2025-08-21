import React from "react";
import { Link } from 'react-router-dom';
import '../css/Project.css';

const Projects = () => {
    return(
        <div className="projects-simple">
            <h1>My Projects</h1>
            
            <div className="project-list">
                <div className="project-item">
                    <img src={require('../images/sweet_brews_website.png')} className="project-image" style={{width: '100%', borderRadius: '8px', marginBottom: '10px'}} />
                    <h2>Sweet Brews Website</h2>
                    <p className="project-role">Front-end Developer</p>
                    <p>A modern coffee shop website with a built-in online ordering system, developed using HTML, CSS, and JavaScript to allow users to browse the menu, add items to a cart, and place orders seamlessly.</p>
                    <div className="project-tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                </div>

                <div className="project-item">
                    <img src={require('../images/cfe_reviewer.jpg')} className="project-image" style={{width: '100%', borderRadius: '8px', marginBottom: '10px'}} />
                    <h2>CFE Reviewer for CMA Students</h2>
                    <p className="project-role">Full Stack Developer</p>
                    <p>A website and mobile app designed for CMA students to review and prepare for CFE exams, offering accessible study materials and practice tests across platforms.</p>
                    <div className="project-tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>PHP</span>
                        <span>MySQL</span>
                    </div>
                </div>

                <div className="project-item">
                    <img src={require('../images/rms_system.png')} className="project-image" style={{width: '100%', borderRadius: '8px', marginBottom: '10px'}} />
                    <h2>Registration Management System</h2>
                    <p className="project-role">Full Stack Developer</p>
                    <p>A registration management system website for students, teachers, and admins, allowing user-specific access to registration, profile management, and administrative controls for efficient enrollment and data management.</p>
                    <div className="project-tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>PHP</span>
                        <span>MySQL</span>
                    </div>
                </div>

                <div className="project-item">
                    <img src={require('../images/joshoeixi_cs.png')} className="project-image" style={{width: '100%', borderRadius: '8px', marginBottom: '10px'}} />
                    <h2>Joshoeixi Coffee Shop Website</h2>
                    <p className="project-role">Full Stack Developer</p>
                    <p>An inventory management system website for Joshoeixi Coffee Shop, enabling staff and admins to monitor stock levels, manage product entries, track supplies, and streamline inventory operations for efficient daily management.</p>
                    <div className="project-tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>PHP</span>
                        <span>MySQL</span>
                    </div>
                </div>

                <div className="project-item">
                    <img src={require('../images/money_manager.png')} className="project-image" style={{width: '100%', borderRadius: '8px', marginBottom: '10px'}} />
                    <h2>Money Manager Website</h2>
                    <p className="project-role">Full Stack Developer</p>
                    <p>A personal finance management system website that allows users to track income, expenses, savings, and budgets, offering insightful analytics and tools for effective money management and financial planning.</p>
                    <div className="project-tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>PHP</span>
                        <span>MySQL</span>
                    </div>
                </div>

                <div className="project-item">
                    <img src={require('../images/nature_memory_game.png')} className="project-image" style={{width: '100%', borderRadius: '8px', marginBottom: '10px'}} />
                    <h2>Nature Memory Game</h2>
                    <p className="project-role">Full Stack Developer</p>
                    <p>Test your memory and enjoy the beauty of nature with our fun and relaxing matching game. Flip cards, find pairs, and explore stunning nature-themed images as you play!</p>
                    <div className="project-tech">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                </div>
            </div>
        
            <center><Link to="/" className="back-btn">← Back to Home</Link></center>

        </div>
    )
}

export default Projects;