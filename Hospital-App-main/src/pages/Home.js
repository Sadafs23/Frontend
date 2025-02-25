import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <>
            {/* Hero Image */}
            <img height="500px" width="100%"
                className="hero-image"
                src="https://media.geeksforgeeks.org/wp-content/uploads/20240229162347/Hospital-Management-System.webp"
                alt="Hospital Banner"
            />

            {/* Home Content */}
            <div className="home-container">
                <h1 className="welcome-title">Welcome to FamilyCare Heaven Hospital</h1>
                <p className="welcome-message">
                    We are dedicated to providing the best care for our patients. Schedule your appointment today!
                </p>

                {/* Service Links */}
                <div className="animation-container">
                    
                    <Link to="/register" className="animated-box">Patient Registration</Link>
                    <Link to="/contact" className="animated-box">Appointment Scheduling</Link>
                    <Link to="/consultation" className="animated-box">Consultation</Link>
                    <Link to="/patients" className="animated-box">Medical Records</Link>
                </div>
            </div>
        </>
    );
};

export default Home;
