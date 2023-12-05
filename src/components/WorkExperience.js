// WorkExperience.js
import React from 'react';

const WorkExperience = () => {
  const redirectToWorkDetails = () => {
    // Implement your logic for redirecting to work details
    console.log('Redirect to work details');
  };

  return (
    <div className="glitch-wrapper" id="worksection">
      <div className="glitch" data-text="Clients I Have Worked With">
        Clients I Have Worked With
      </div>

      {/* Work Experience Content */}
      <section id="work" className="contenttwo">
        {/* Client Section */}
        <div className="work-item">
          {/* Client Container for Horizontal Scrolling */}
          <div className="flex overflow-x-auto">
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
            <button onClick={redirectToWorkDetails} className="bg-blue-500 text-white px-4 py-2">
              View More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
