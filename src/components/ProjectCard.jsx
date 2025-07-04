import React, { useState, useEffect } from 'react';
import './Projects.css';

const ProjectCard = ({ title, description, points, iframeLink }) => {
  const [iframeMounted, setIframeMounted] = useState(false);
  const [iframeVisible, setIframeVisible] = useState(false);

  const toggleIframe = () => {
    if (!iframeMounted) {
      // First mount the iframe
      setIframeMounted(true);
    } else {
      // Hide the iframe visually first
      setIframeVisible(false);

      // After transition duration (600ms), unmount it
      setTimeout(() => setIframeMounted(false), 600);
    }
  };

  // When iframeMounted becomes true, show it with animation
  useEffect(() => {
    if (iframeMounted) {
      // Delay adding the visible class to allow CSS transition
      const timer = setTimeout(() => setIframeVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, [iframeMounted]);

  return (
    <div className='project-item'>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <button className='preview-btn' onClick={toggleIframe}>
        {iframeVisible ? '👀 Hide Live Preview' : '🚀 Launch Live Preview'}
      </button>
      {iframeMounted && (
        <iframe
          title={title}
          src={iframeLink}
          className={iframeVisible ? 'visible' : ''}
        />
      )}
    </div>
  );
};

export default ProjectCard;
