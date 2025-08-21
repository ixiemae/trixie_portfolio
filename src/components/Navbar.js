import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return(
        <nav className="navbar">
                <Link to="/" className="navbar-brand">
                    Trixie's Portfolio
                </Link>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;