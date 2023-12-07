import React from 'react';
import './styles.css';


const EducationSection = () => {
  // Sample education data
  const educationData = [
    {
      id: 1,
      logoSrc: "pics/saint_louis.png",
      institutionLink: "https://www.slu.edu/",
      institutionName: "Saint Louis University",
      degree: "Master's in Computer Science",
      duration: "Present - Aug 2023",
    },
    {
      id: 2,
      logoSrc: "pics/nmrec.png",
      institutionLink: "https://www.nmrec.edu.in/",
      institutionName: "Nalla Malla Reddy Engineering College - JNTUH",
      degree: "Bachelor of Computer Science And Engineering",
      duration: "Aug 2019 - June 2023",
    },
    {
      id: 3,
      logoSrc: "pics/narayana.png",
      institutionLink: "https://www.narayanajuniorcolleges.com/",
      institutionName: "Narayana Jr College",
      degree: "Hyderabad, India",
      duration: "Aug 2017 - May 2019",
    },
    {
      id: 4,
      logoSrc: "pics/triveni.png",
      institutionLink: "https://www.trivenitalentschools.com/",
      institutionName: "Triveni Talent School",
      degree: "Khammam, India",
      duration: "March 2017",
    },
  ];

  // Function to create an education item
  const createEducationItem = (data) => {
    return (
      <div key={data.id} className="education-item bg-white p-6 rounded-lg shadow-md">
        <a href={data.institutionLink} target="_blank" rel="noopener noreferrer">
          <img src={data.logoSrc} alt={`${data.institutionName} Logo`} className="logo max-w-full mb-4" />
        </a>
        <h2 className="text-xl font-bold mb-2">{data.institutionName}</h2>
        <p className="text-gray-600 mb-2">{data.degree}</p>
        <p className="text-gray-600">{data.duration}</p>
      </div>
    );
  };

  return (
    <div>
      <div className="glitch-wrapper" id="education">
        <div className="glitch" data-text="Education">Education</div>
      </div>

      {/* Education Content Section */}
      <section className="grid grid-cols-2 gap-4 mt-10">
        {/* Map through education data and create education items */}
        {educationData.map((itemData) => (
          createEducationItem(itemData)
        ))}
      </section>
    </div>
  );
};

export default EducationSection;
