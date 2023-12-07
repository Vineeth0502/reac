import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './main.css';

const ContactForm = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.toggle('dark-mode', savedTheme === 'dark');
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleNavbar = () => {
    setShowNavbar((prevShowNavbar) => !prevShowNavbar);
  };

  const toggleTheme = () => {
    const body = document.body;
    const newIsDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode', newIsDarkMode);
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem('theme', newIsDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={`transition-colors duration-300 ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar toggleNavbar={toggleNavbar} />
      <div>
        <div className="glitch-wrapper">
          <div className="glitch" data-text="Contact Me">
            Contact Me
          </div>
        </div>

        {/* Contact Form Section */}
        <section className="contact-form1">
          <div className="container3">
            <div className={`contact-form1 ${showNavbar ? 'shown' : 'block'}`}>
              <h2>Send Me a Message</h2>
              <form
                id="fs-frm"
                name="simple-contact-form"
                acceptCharset="utf-8"
                action="https://formspree.io/f/mvojnyyg"
                method="post"
              >
                <fieldset id="fs-frm-inputs">
                  <label htmlFor="full-name">Full Name</label>
                  <input type="text" name="name" id="full-name" required />
                  <label htmlFor="email-address">Email Address</label>
                  <input type="email" name="_replyto" id="email-address" required />
                  <label htmlFor="message">Message</label>
                  <textarea rows="5" name="message" id="message" required />
                  <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
                </fieldset>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </section>
      </div>
      {/* Dark Mode Toggle Button */}
      <button id="themeToggle" className="mode" onClick={toggleTheme}>
        <img src="pics/moon.png" alt="Dark Mode" />
      </button>
      <Footer />
    </div>
  );
};

export default ContactForm;
