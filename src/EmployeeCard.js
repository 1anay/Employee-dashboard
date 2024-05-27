import React from 'react';
import './App.css';

const EmployeeCard = ({ name, position, imageUrl, graphicUrl }) => {
  return (
    <div className="employee-card">
      <div className="image-container">
        <img src={imageUrl} 
        alt={`${name}`} 
        className="employee-image" />
      </div>
      <div className="details">
        <h2>Employee of the 
          Month</h2>
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
      <div className="graphic">
        <img src={graphicUrl} alt="Graphic" />
      </div>
    </div>
  );
};

export default EmployeeCard;
