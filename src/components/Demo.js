import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './styles.css';
import './main.css';

const Demo = () => {
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

  const toggleDetails = (id) => {
    const detailsElement = document.getElementById(id);
    detailsElement.style.display = detailsElement.style.display === "none" ? "block" : "none";
  };

  return (
    <div className={`transition-colors duration-300 ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar toggleNavbar={toggleNavbar} />
      <div className="glitch-wrapper text-center">
        <div className="glitch" data-text="Work Experience">Work Experience</div>
      </div>

      {/* Work Experience Content */}
      <section id="workexperience" className="contentone container mt-5">

        {/* DizitalZap Internship */}
        <div className="card mb-3">
          <div className="card-header">
            DizitalZap - Hyderabad, IND
          </div>
          <div className="card-body">
            <a href="https://digitalzap.in/">
              <img src="pics/digitalzap.avif" alt="DizitalZap Logo" className="img-fluid mb-3" />
            </a>
            <h5 className="card-title">Intern - Junior Associate Software Engineer</h5>
            <p className="card-text"><strong>Project: KAIRA</strong></p>
            <button className="btn btn-primary mt-3" onClick={() => toggleDetails('dizitalzap-details')}>Explore!</button>
            <div id="dizitalzap-details" style={{ display: 'none', padding: '10px' }}>
              <p className="card-text">01st April 2021 - 10th July 2021</p>
              <ul className="list-group">
                <li className="list-group-item">Designed and established user-friendly WordPress websites.</li>
                <li className="list-group-item">Optimized check-out page, resulting in a 25% increase in user clicks and a subsequent 33% increase in customer purchases.</li>
                <li className="list-group-item">Proactively liaised with the design team and project manager to ensure efficient and timely project delivery.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Thepaperbrains Internship */}
        <div className="card mb-3">
          <div className="card-header">
            ThePaperBrains - Hyderabad, IND
          </div>
          <div className="card-body">
            <a href="https://thepaperbrains.com/">
              <img src="pics/thepaperbrains.png" alt="ThePaperBrains Logo" className="img-fluid mb-3" />
            </a>
            <h5 className="card-title">Intern - Full Stack Developer</h5>
            <p className="card-text"><strong>Projects: Viitjee, Vintage Retreat, thepaperbrains</strong></p>
            <button className="btn btn-primary mt-3" onClick={() => toggleDetails('thepaperbrains-details')}>Explore!</button>
            <div id="thepaperbrains-details" style={{ display: 'none', padding: '10px' }}>
              <p className="card-text">08th Feb 2023 - 9th May 2023</p>
              <ul className="list-group">
                <li className="list-group-item">Worked as a Full Stack Developer, designing websites according to client specifications.</li>
                <li className="list-group-item">Developed websites for the company, ensuring functionality and user experience.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Execlerate Internship */}
        <div className="card mb-3">
          <div className="card-header">
            Execlerate - Remote
          </div>
          <div className="card-body">
            <a href="https://experience.4excelerate.org/">
              <img src="pics/excelerate.jpeg" alt="Execlerate Logo" className="img-fluid mb-3" />
            </a>
            <h5 className="card-title">Intern - Data Analyst</h5>
            <p className="card-text"><strong>Projects: Facebook Ad - Campaign</strong></p>
            <button className="btn btn-primary mt-3" onClick={() => toggleDetails('excelerate-details')}>Explore!</button>
            <div id="excelerate-details" style={{ display: 'none', padding: '10px' }}>
              <p className="card-text">22nd Aug 2023 - 25th Sep 2023</p>
              <ul className="list-group">
                <li className="list-group-item">During my internship at Excelerate, I led Team 5A in optimizing GlobalShala's "Superhero U" Facebook ad campaigns. We analyzed 11 campaigns, focusing on metrics like engagement rate, impressions, reach, frequency, and cost per result. We recommended the discontinuation of less productive campaigns, enhancing campaign efficiency and conversion rates.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mode Toggle Button */}
      <button id="themeToggle" className="mode" onClick={toggleTheme}>
        <img src="pics/moon.png" alt="Dark Mode" />
      </button>
      <Footer />
    </div>
  );
};

export default Demo;
