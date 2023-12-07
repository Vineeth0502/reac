// App.js
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import EducationSection from './components/EducationSection';
import AboutMeSection from './components/AboutMeSection';
import PublicationsSection from './components/PublicationsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';
import Slideshow from './components/Slideshow';
import Modal from 'react-modal';
import Demo from './components/Demo';
import ContactForm from './components/ContactForm';

Modal.setAppElement('#root');

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      // Check local storage for saved theme preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        setIsDarkMode(savedTheme === 'dark');
      }
    }, []);
  
  
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
    
    <div>
      <Slideshow  />
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

const App = () => {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/contact" element={<ContactForm />} />

      </Routes>
    </Router>
  );
};

export default App;
