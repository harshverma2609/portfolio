// WorkExp.jsx
import React from 'react';
import WorkCard from './WorkCard';
import './WorkExp.css';

const WorkExp = () => {
  const experiences = [
    {
      image: require('./images/TheMobiadz-Logo-Copy.png'),
      title: 'TheMobiAdz',
      duration: '03 JUN, 2024 - 02 AUG, 2024',
      role: 'Full Stack Web Developer Intern',
      workType: 'On-Site Intern',
      responsibilities: [
        'Designed and deployed advanced features using ReactJS and PHP, including responsive loaders and Swiper carousel sliders; now used in 10+ projects to enhance user experience.',
        'Integrated Amazon’s Product Advertising API 5.0 and Google Sheets for data exchange and lead generation, and created landing pages and HTML5 ads that boosted lead generation by 20% and improved client satisfaction.',
        'Crafted a custom Node.js API and implemented MySQL to enhance handling and processing of two-step form inputs, increasing data consistency and application performance.'
      ],
      demoLink: 'https://harshverma2609.github.io/GamingWebsite',
      flipDirection: 'flipLeft'
    },
    {
      image: require('./images/NIC-logo2.png'),
      title: 'NIC',
      duration: '15 Jan, 2024 - 23 Feb, 2024',
      role: 'Front-End Developer Intern',
      workType: 'Remote Intern',
      responsibilities: [
        'Built a comprehensive website using React.js, HTML5, and CSS3, enhancing accessibility and transparency of parliamentary information.',
        'Redesigned interactive user interfaces optimized for various devices, resulting in a 15% rise in user satisfaction and improved accessibility across different screen sizes and resolutions.'
      ],
      demoLink: 'https://harshverma2609.github.io/NIC-Intern-Project/',
      flipDirection: 'flipRight'
    }
  ];

  return (
    <section id='work'>
      <h2>Work Experience</h2>
      <div className="cardContainer">
        {experiences.map((exp, index) => (
          <WorkCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default WorkExp;
