// WelcomeSection.js
import React, { useState } from 'react';
import './main.css';
import { Link } from 'react-router-dom';


const WelcomeSection = () => {
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
  const redirectToAboutMe = () => {
    console.log("redirectToAboutMe function called");
    const aboutMeSection = document.getElementById("aboutme");

    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with ID 'aboutme' not found.");
    }
  };

  return (
    <div id="Home" className="bg-gray-800 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <img src="pics/vineeth1.jpg" alt="Profile Image" className="w-32 h-32 rounded-full mx-auto mb-6" />
        <h1 className="text-3xl font-semibold">Welcome To My Portfolio</h1>
        <div className='relative top-36'><a
          className="arrow-button text-4xl   transform hover:scale-110 transition-transform"
        >
          <Link
to="/#aboutme"
className={`text-white ${activeLink === 'aboutme' && 'font-bold'}`}
style={{
  background: activeLink === 'aboutme' ? '#87CEEB' : 'transparent',
  padding: activeLink === 'aboutme' ? '8px 12px' : '8px',
}}
onClick={() => handleLinkClick('aboutme')}
>
&#9660;
</Link>
        </a></div>
      </div>
    </div>
  );
};

export default WelcomeSection;



