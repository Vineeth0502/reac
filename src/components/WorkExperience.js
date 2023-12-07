// WorkExperience.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const WorkExperience = () => {

  return (
    <div className="glitch text-center" id="worksection">
       <div className="glitch-wrapper" id="projects">
        <div className="glitch" data-text="Clients I have Worked With">Clients I have Worked With</div>
      </div>

      {/* Work Experience Content */}
     <section id="work" className="">
        {/* Client Section */}
        <div className="work-item">
          {/* Client Container for Horizontal Scrolling */}
          <div className="flex ">
            {/* Row 2: Images */}
            <div className="client">
              <img src="pics/digitalzap.avif" alt="Client 1 Logo" />
            </div>

            <div className="client">
              <img src="pics/thepaperbrains.png" alt="Client 2 Logo" />
            </div>

            <div className="client">
              <img src="pics/excelerate.jpeg" alt="Client 3 Logo" />
            </div>
          </div>

          {/* Row 3: Button (Fixed) */}
          <div className="client-button">
           
           <Link to="/demo"> <button className="bg-blue-500 text-sm	 text-white px-4 py-2">
              View More
            </button></Link>
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
