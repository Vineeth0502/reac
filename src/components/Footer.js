import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-center text-white">
      <div className="flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <img src="pics/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
          <img src="pics/instagram.png" alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <img src="pics/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
        </a>
        <a href="https://www.snapchat.com/add/your-snapchat-username" target="_blank" rel="noopener noreferrer">
          <img src="pics/snapchat.png" alt="Snapchat" className="w-8 h-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
