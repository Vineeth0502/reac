import React from 'react';

const Navbar = ({ toggleNavbar }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black bg-opacity-80 py-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <ul className="flex space-x-6">
            <li><a href="index.html" className="text-white">Home</a></li>
            <li><a href="#aboutme" className="text-white">About Me</a></li>
            <li><a href="#education" className="text-white">Education</a></li>
            <li><a href="#projects" className="text-white">Projects</a></li>
            <li><a href="#worksection" className="text-white">Work Experience</a></li>
            <li><a href="#contact" className="text-white">Contact Me</a></li>
          </ul>
        </div>
        
        <div className="flex space-x-4 items-center">
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" className="text-white">
            <img src="pics/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/your-instagram-profile" target="_blank" className="text-white">
            <img src="pics/instagram.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" className="text-white">
            <img src="pics/whatsapp.png" alt="Whatsapp" className="w-6 h-6" />
          </a>
          <a href="https://www.snapchat.com/add/your-snapchat-username" target="_blank" className="text-white">
            <img src="pics/snapchat.png" alt="Snapchat" className="w-6 h-6" />
          </a>
        </div>
        
        <div className="cursor-pointer lg:hidden" onClick={toggleNavbar}>
          <div className="hamburger-menu w-6 h-6">
            <span className="line block w-full h-1 bg-white mb-1"></span>
            <span className="line block w-full h-1 bg-white mb-1"></span>
            <span className="line block w-full h-1 bg-white"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
