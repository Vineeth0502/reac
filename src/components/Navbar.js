import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleNavbar }) => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    smoothScrollTo(link);
    
  };

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      const { top } = targetElement.getBoundingClientRect();
      const offset = window.pageYOffset || document.documentElement.scrollTop;
  
      window.scrollTo({
        top: top + offset,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <div className="fixed top-0 left-0 w-full bg-black bg-opacity-80 py-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/#Home"
                className={`text-white ${activeLink === 'Home' && 'font-bold'}`}
                style={{
                  background: activeLink === 'Home' ? '#87CEEB' : 'transparent',
                  padding: activeLink === 'Home' ? '8px 12px' : '8px',
                }}
                onClick={() => handleLinkClick('Home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#aboutme"
                className={`text-white ${activeLink === 'aboutme' && 'font-bold'}`}
                style={{
                  background: activeLink === 'aboutme' ? '#87CEEB' : 'transparent',
                  padding: activeLink === 'aboutme' ? '8px 12px' : '8px',
                }}
                onClick={() => handleLinkClick('aboutme')}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/#education"
                className={`text-white ${activeLink === 'education' && 'font-bold'}`}
                style={{
                  background: activeLink === 'education' ? '#87CEEB' : 'transparent',
                  padding: activeLink === 'education' ? '8px 12px' : '8px',
                }}
                onClick={() => handleLinkClick('education')}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/#projects"
                className={`text-white ${activeLink === 'projects' && 'font-bold'}`}
                style={{
                  background: activeLink === 'projects' ? '#87CEEB' : 'transparent',
                  padding: activeLink === 'projects' ? '8px 12px' : '8px',
                }}
                onClick={() => handleLinkClick('projects')}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/#worksection"
                className={`text-white ${activeLink === 'worksection' && 'font-bold'}`}
                style={{
                  background: activeLink === 'worksection' ? '#87CEEB' : 'transparent',
                  padding: activeLink === 'worksection' ? '8px 12px' : '8px',
                }}
                onClick={() => handleLinkClick('worksection')}
              >
                Work Section
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                className={`text-white ${activeLink === 'contact' && 'font-bold'}`}
                style={{
                  background: activeLink === 'contact' ? '#87CEEB' : 'transparent',
                  padding: activeLink === 'contact' ? '8px 12px' : '8px',
                }}
                onClick={() => handleLinkClick('contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex space-x-4 items-center">
        <a href="https://www.linkedin.com/in/vineethketham/" target="_blank" className="text-white">
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
            <span className="line block w-full h-1 bg-white mb-1 transition-all duration-300"></span>
            <span className="line block w-full h-1 bg-white mb-1 transition-all duration-300"></span>
            <span className="line block w-full h-1 bg-white transition-all duration-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
