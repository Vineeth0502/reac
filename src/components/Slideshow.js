// Slideshow.js
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import './styles.css';

const Slideshow = ({ autoAdvanceInterval = 5000 }) => {

  const slides = [
    {
      image: 'pics/12.jpg',
      image1: 'pics/leo.jpg',

      alt: 'Slide 1',
      title: 'LEO - Virtual Assistant (2023) - AI Model',
      repository: 'https://github.com/Vineeth0502/Leo',


      caption: 'In the technological landscape of 2023, the emergence of "LEO - Virtual Assistant" showcases an innovative approach to artificial intelligence. This project revolves around the creation of an AI model, developed using Python programming, to serve as a personal assistant capable of performing tasks through voice commands. The application integrates advanced features such as speech recognition and a user-friendly graphical interface constructed with the PyQt5 framework.',
      content: {
        title: 'Title for Slide 1',
        description: 'In the technological landscape of 2023, the emergence of "LEO - Virtual Assistant" showcases an innovative approach to artificial intelligence. This project revolves around the creation of an AI model, developed using Python programming, to serve as a personal assistant capable of performing tasks through voice commands. The application integrates advanced features such as speech recognition and a user-friendly graphical interface constructed with the PyQt5 framework.The "LEO - Virtual Assistant" project represents a significant leap in the realm of AI-driven personal assistants. By combining speech recognition, Python programming, and a user-friendly GUI, this application offers a glimpse into the future of intuitive and efficient human-computer interactions. As technology continues to advance, virtual assistants like "LEO" pave the way for more accessible and integrated AI solutions in our daily lives',
      },
      
    },
    {
      image: 'pics/12.jpg',
      image1: 'pics/chat.jpg',
      alt: 'Slide 2',
      title: 'BaatCheeth (2022) - Android App – Using Firebase Console',
      repository: 'https://github.com/Vineeth0502/BaatCheeth.git',

      caption: '"Bhaatcheeth" is a chat application designed to provide users with a seamless and interactive communication experience using Firebase as its backend infrastructure. This application aims to facilitate real-time messaging, fostering connections and conversations among users in a secure and efficient manner. "Bhaatcheeth" stands out as a user-friendly and feature-rich chat application, embracing Firebase robust services to deliver a secure, scalable, and real-time communication platform. Whether for personal or professional use, Bhaatcheeth fosters meaningful connections and efficient conversations in a digital environment.',
      content: {
        title: 'Title for Slide 2',
        description: 'Bhaatcheeth is a chat application that uses Firebase as its backend infrastructure to provide a secure and interactive communication experience. It uses Firebase real-time database for instant message delivery, allowing users to engage in dynamic conversations without manual refreshing. Firebase Authentication ensures only authorized users have access, protecting their privacy and data. Users can customize their profiles, making the chat experience more engaging. Bhaatcheeth supports both one-on-one and group conversations, allowing users to create and participate in collaborative discussions. Users can share multimedia content, and Firebase Cloud Storage stores and retrieves multimedia files. Firebase Cloud Messaging allows users to receive push notifications for new messages, even when the application is in the background. The applications offline support ensures users can access their chat history and sync data when the internet connection is reestablished. Firebases scalable and reliable infrastructure ensures Bhaatcheeth remains responsive and efficient, fostering meaningful connections and efficient conversations in a digital environment.',
      },
    },
    {
      image: 'pics/12.jpg',
      image1: 'pics/mern.png',
      alt: 'Slide 3',
      title: 'PaatVihar (2023) - Web Application : MERN Stack',
      repository: 'https://github.com/Mukeshreddy122/PaatVihar.git',

      caption: 'The "PaatVihar" web application, developed in 2023, represents a comprehensive solution for school exploration and selection, employing the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application serves as a valuable resource for parents seeking the ideal educational environment for their children. "PaatVihar" stands out as a cutting-edge web application, leveraging the power of the MERN stack to offer an immersive and informative experience for parents exploring school options. By incorporating virtual tours and real-time database capabilities, the application empowers parents to make well-informed decisions regarding their childrens education.',
      content: {
        title: 'Title for Slide 2',
        description: '"PaatVihar" is a 2023 web application that uses the MERN (MongoDB, Express.js, React.js, Node.js) stack to provide a comprehensive solution for school exploration and selection. The application uses MongoDB as the real-time database, Node.js for server-side functionality, and React.js as the frontend framework for a seamless and responsive user experience. It offers virtual tours for each listed school, allowing parents to explore facilities, classrooms, and amenities. This feature aids parents in making informed decisions about the best educational fit for their children. MongoDBs integration ensures efficient and real-time data storage, while Node.js handles server-side logic, ensuring a scalable and efficient backend infrastructure. React.js in the frontend development ensures a user-friendly and interactive interface. "PaatVihar" simplifies the school selection process for parents by providing a centralized platform for exploring multiple schools, comparing virtual tours, and making informed decisions about the most suitable educational institutions. By incorporating virtual tours and real-time database capabilities, "PaatVihar" empowers parents to make well-informed decisions about their childrens education.',
      },
    },
    {
      image: 'pics/12.jpg',
      image1: 'pics/django.jpg',
      alt: 'Slide 4',
      title: 'MediFit (2022) - Web Application : Using HTML/CSS &Django ',
      repository: 'https://github.com/Vineeth0502/',

      caption: '"MediFit," developed in 2022, is a web application designed to promote proactive health management by combining traditional web technologies with cutting-edge machine learning (ML) capabilities. Employing HTML/CSS for frontend development and Django for server-side logic, this application provides an integrated approach to health prediction and prevention. "MediFit" represents a fusion of web technology and machine learning, offering a holistic approach to health management. Through its predictive capabilities, personalized recommendations, and live interaction features, the application stands as an innovative tool for individuals seeking to enhance their overall health and well-being.',
      content: {
        title: 'Title for Slide 2',
        description: '"MediFit" is a web application developed in 2022 that uses machine learning (ML) to promote proactive health management. The application uses HTML/CSS for frontend design and Django for server-side logic, allowing for seamless communication between the frontend and database. ML algorithms are used to predict and prevent diabetes and heart disease, providing personalized health predictions. The application uses SQLlite as its real-time database, ensuring efficient storage and retrieval of user-related health data. It also offers personalized diet tips based on ML analysis, promoting healthier eating habits. Additionally, the application provides live yoga pose correction, allowing users to ensure correct pose execution through real-time feedback. "MediFit" aims to empower users to take control of their health by combining predictive analytics with personalized recommendations and interactive features like live yoga pose correction. It represents an innovative tool for individuals seeking to enhance their overall health and well-being.',
      },
    },
  ];

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
