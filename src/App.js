import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import EducationSection from './components/EducationSection';
import AboutMeSection from './components/AboutMeSection';
import DarkVariantExample from './components/DarkVariantExample';
import PublicationsSection from './components/PublicationsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';
import Slideshow from './components/Slideshow';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.toggle('dark-mode', savedTheme === 'dark');
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);
  const slides = [
    {
      image: '/pics/vineeth1.jpg',
      alt: 'Slide 1',
      caption: 'Caption for Slide 1',
    },
    {
      image: '/pics/vineeth2.jpg',
      alt: 'Slide 2',
      caption: 'Caption for Slide 2',
    },
    {
      image: '/pics/vineeth2.jpg',
      alt: 'Slide 3',
      caption: 'Caption for Slide 3',
    },
    {
      image: '/pics/vineeth2.jpg',
      alt: 'Slide 4',
      caption: 'Caption for Slide 4',
    },
  ];
  

  const toggleNavbar = () => {
    var navbarContainer = document.getElementById("navbarContainer");
    var menuIcon = document.querySelector(".menu-icon");

    navbarContainer.style.display = navbarContainer.style.display === "flex" ? "none" : "flex";
    navbarContainer.style.opacity = navbarContainer.style.opacity === "1" ? "0" : "1";
    navbarContainer.style.transform = navbarContainer.style.transform === "translateY(0)" ? "translateY(-20px)" : "translateY(0)";

    menuIcon.style.transform = menuIcon.style.transform === "rotate(45deg)" ? "rotate(0)" : "rotate(45deg)";
  };

  const toggleTheme = () => {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={`transition-colors duration-300 ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar toggleNavbar={toggleNavbar} />
      <WelcomeSection />
      <AboutMeSection />
      <EducationSection />
      <DarkVariantExample />
      <div>
      <Slideshow slides={slides} />
    </div>
      <PublicationsSection />
      <WorkExperience />
      <SkillsSection />
      <ContactSection />
      <Footer />
      {/* Dark Mode Toggle Button */}
      <button id="themeToggle" className="mode" onClick={toggleTheme}>
        <img src="pics/moon.png" alt="Dark Mode" />
      </button>
    </div>
  );
};

export default App;
