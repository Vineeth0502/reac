import React from 'react';
import './styles.css';

const ProgressBar = ({ proficiency }) => {
  return (
    <div className="flex items-center mt-2">
      <div className="w-full bg-gray-300 h-4 rounded-md overflow-hidden">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
