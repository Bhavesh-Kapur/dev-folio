import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          Looking for a DevOps engineer with expertise in cloud-native microservices? 
          Let's discuss how I can help build scalable, automated systems for your team.
        </p>
        
        <div className="contact-links">
          <a href="mailto:ddnbhavesh@gmail.com" className="contact-btn">
            Send Email
          </a>
          <a href="https://www.linkedin.com/in/bhavesh-sanjiv-kapur-951826287/" target="_blank" rel="noopener noreferrer" className="contact-btn">
            LinkedIn
          </a>
          <a href="https://github.com/Bhavesh-Kapur" target="_blank" rel="noopener noreferrer" className="contact-btn">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
