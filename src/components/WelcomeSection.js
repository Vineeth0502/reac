// WelcomeSection.js
import React from 'react';
import './main.css';


const WelcomeSection = () => {
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
          href="#aboutme"
          className="arrow-button text-4xl   transform hover:scale-110 transition-transform"
          onClick={redirectToAboutMe}
        >
          &#9660;
        </a></div>
      </div>
    </div>
  );
};

export default WelcomeSection;
