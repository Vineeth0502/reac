import React from 'react';
import ProgressBar from './ProgressBar';
import SkillIcon from './SkillIcon';

const SkillsSection = () => {
  const skills = [
    { name: 'Java', proficiency: 80, iconSrc: 'pics/java.png' },
    { name: 'Python', proficiency: 90, iconSrc: 'pics/py.png' },
    { name: 'Android Development', proficiency: 70, iconSrc: 'pics/as.png' },
    { name: 'React JS', proficiency: 85, iconSrc: 'pics/react.png' },
    { name: 'Node JS', proficiency: 75, iconSrc: 'pics/njs.png' },
    { name: 'Mongo DB', proficiency: 85, iconSrc: 'pics/mdb.png' },
    // Add more skills as needed
  ];

  return (
    <div id="skills" className="bg-gray-800 p-10">
      <div className="glitch-wrapper">
        <div className="glitch text-white" data-text="Skills">Skills</div>
      </div>

      <div className="skills-container text-white">
        <div className="skills-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item bg-gray-700 p-6 rounded-md transition-transform transform hover:scale-105">
                <SkillIcon iconSrc={skill.iconSrc} alt={skill.name} />
                <h3 className="skill-name text-xl font-semibold mt-4 mb-2">{skill.name}</h3>
                <ProgressBar proficiency={skill.proficiency} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
