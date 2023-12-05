import React from 'react';
import './styles.css';

const ContactSection = () => {
  return (
    <div id="contact" className="contact-container bg-black py-12">
      <div className="contact-content text-white text-center">
        <h1 className="contact-title text-3xl font-bold mb-6">
          Interested to work with me?
        </h1>
        <span className="contact-text block mb-2">Drop a message to </span>
        <a
          href="contact.html"
          className="contact-email text-blue-500 underline"
        >
          vineethkketham@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
