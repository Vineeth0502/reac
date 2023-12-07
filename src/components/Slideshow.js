// Slideshow.js
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import './styles.css';

const Slideshow = ({ slides, autoAdvanceInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    let intervalId;

    const autoAdvance = () => {
      intervalId = setInterval(() => {
        nextSlide();
      }, autoAdvanceInterval);
    };

    autoAdvance(); 

    return () => {
      clearInterval(intervalId);
    };
  }, [autoAdvanceInterval]);

  return (
    <div className="relative w-full overflow-hidden slideshow-container pt-36">
       <div className="glitch-wrapper" id="projects">
        <div className="glitch" data-text="Projects ">Projects</div>
      </div>

      <button
        className="absolute  transform -translate-y-1/2 text-white text-4xl left-4 bg-transparent border-none cursor-pointer z-10 arrow-button1 left"
        onClick={prevSlide}
      >
        {'<'}
      </button>

      <div className="relative inline-block slide" onClick={openModal}>
        <img src={slides[currentIndex].image} alt={slides[currentIndex].alt} className="w-full h-auto cursor-pointer" />
        <img src={slides[currentIndex].image1} alt={slides[currentIndex].alt} className=" h-auto cursor-pointer absolute bottom-20  font-extrabold	text-xl	 left-right1  top-40  bg-opacity-50 text-white p-4 text-base caption" />
        
        {/* Display repository link */}
        <h1 className="absolute bottom-10 font-extrabold text-xl left-right top-1/2 bg-opacity-50 text-white p-4 text-base caption">
          {slides[currentIndex].title}
          {slides[currentIndex].repository && (
            <a
              href={slides[currentIndex].repository}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 ml-2"
            >
              (GitHub)
            </a>
          )}
        </h1>

        <p className="absolute bottom-3 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-base caption">
          {slides[currentIndex].caption}
        </p>
       
      </div>

      <button
        className="absolute  transform -translate-y-1/2 text-white text-4xl right-4 bg-transparent border-none cursor-pointer arrow-button1 right"
        onClick={nextSlide}
      >
        {'>'}
      </button>

      <Modal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        content={slides[currentIndex].content}
      />
    </div>
  );
};

export default Slideshow;
