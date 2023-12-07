import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <div id="contact" className="contact-container bg-black py-12">
      <div className="contact-content text-white text-center">
        <h1 className="contact-title text-3xl font-bold mb-6">
          Interested to work with me?
        </h1>
        <span className="contact-text block mb-2">Drop a message to </span>
        <a
          className="contact-email text-blue-500 underline"
        >
         <Link to="/contact">vineethkketham@gmail.com </Link> 
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
