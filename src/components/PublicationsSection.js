import React from 'react';
import './styles.css';

const PublicationsSection = () => {
  return (
    <div>
      <div className="glitch-wrapper">
        <div className="glitch" data-text="Publications">Publications</div>
      </div>

      <section id="publications" className="contenttwo">
        {/* Research Publication */}
        <div className="publication-item grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Section with Image */}
          <div className="left">
            <div className="dotted-box">
              <img src="pics/paper.png" alt="Your Image Alt Text" className="w-full" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">LEO - Virtual Assistance</h2>
            <p>Published in the International Journal of Scientific Research in Engineering and Management (IJSREM).</p>
            <p>Authors: K. Rajesh, K. Vineeth, M. Manasa, M. Chandan, V. Sirisha</p>
            <p className="text-blue-500">Link: <a href="https://ijsrem.com/download/leo-the-virtual-assistance/" target="_blank" rel="noopener noreferrer">LEO - Virtual Assistance</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicationsSection;
