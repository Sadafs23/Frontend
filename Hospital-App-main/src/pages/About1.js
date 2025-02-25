import React from "react";
import "../styles/About.css"; // Import CSS file

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <header className="about-hero">
        <h1>FamilyCare Heaven Hospital</h1>
        <p>Excellence in Healthcare, Compassion in Service</p>
      </header>

      {/* Introduction */}
      <section className="about-intro">
        <h2>Who We Are</h2>
        <p>
          FamilyCare Heaven Hospital is a world-class healthcare institution dedicated to delivering 
          exceptional medical services with compassion, expertise, and innovation. 
          We prioritize patient well-being, cutting-edge technology, and ethical medical practices.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="about-mvv">
        <div className="mvv-card">
          <h3>🚀 Our Vision</h3>
          <p>
            To be a global leader in healthcare, pioneering groundbreaking treatments 
            and setting new standards in patient care and medical research.
          </p>
        </div>
        <div className="mvv-card">
          <h3>🌍 Our Mission</h3>
          <p>
            Deliver high-quality, patient-centered care, drive medical innovation, 
            and ensure accessible healthcare for all communities.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <h2>Why Choose Us?</h2>
        <div className="why-cards">
          <div className="why-card">
            <h3>🏥 Advanced Facilities</h3>
            <p>Equipped with cutting-edge medical technology for accurate diagnoses and treatments.</p>
          </div>
          <div className="why-card">
            <h3>👨‍⚕️ Expert Specialists</h3>
            <p>Our globally trained doctors provide world-class medical expertise.</p>
          </div>
          <div className="why-card">
            <h3>📊 Personalized Care</h3>
            <p>Every patient receives tailored treatment plans and compassionate care.</p>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="about-departments">
        <h2>Our Specialized Departments</h2>
        <ul>
          <li>🫀 Cardiology</li>
          <li>🧠 Neurology</li>
          <li>🏥 Emergency & Trauma</li>
          <li>🤰 Maternity & Neonatal Care</li>
          <li>🦴 Orthopedics</li>
          <li>👁️ Ophthalmology</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="about-contact">
        <h2>Connect With Us</h2>
        <p>Need expert medical care? Contact us today!</p>
        <a href="/contact" className="contact-btn">Book an Appointment</a>
      </section>
    </div>
  );
};

export default About;
