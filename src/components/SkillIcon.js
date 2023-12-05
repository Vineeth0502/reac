import React from 'react';
import './styles.css';

const SkillIcon = ({ iconSrc, alt }) => {
  return (
    <div className="flex justify-center">
      <img src={iconSrc} alt={alt} className="w-60" />
    </div>
  );
};

export default SkillIcon;
