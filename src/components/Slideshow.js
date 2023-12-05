// Slideshow.js
import React, { useState } from 'react';
import './styles.css'

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow-container">
      <button className="arrow-button left" onClick={prevSlide}>
        {'<'}
      </button>

      <div className="slide">
        <img src={slides[currentIndex].image} alt={slides[currentIndex].alt} />
        <p className="caption">{slides[currentIndex].caption}</p>
      </div>

      <button className="arrow-button right" onClick={nextSlide}>
        {'>'}
      </button>
    </div>
  );
};

export default Slideshow;
