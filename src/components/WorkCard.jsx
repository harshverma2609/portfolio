// WorkCard.jsx
import React from 'react';
import './WorkExp.css';

const WorkCard = ({
  image,
  title,
  duration,
  role,
  workType,
  responsibilities,
  demoLink,
  flipDirection
}) => {
  return (
    <div className="cardContent">
      <div className={`innerCard ${flipDirection}`}>
        <div className="frontSide">
          <img src={image} alt={title} />
          <h2>{role}</h2>
          <h3>{duration}</h3>
        </div>
        <div className="backSide">
          <p>{workType}</p>
          <ul>
            {responsibilities.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              Demo Work
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
