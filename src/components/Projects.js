import './Projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectList = [
    {
      title: 'Take Notes Project',
      description: 'A React.js-based note-taking website with category-based filtering and local storage.',
      points: [
        'Add, delete, and organize notes with smooth real-time updates.',
        'Category-based filtering and keyword search for easy navigation.',
        'Persistent note storage using React and LocalStorage API.'
      ],
      iframeLink: 'https://harshverma2609.github.io/notes/'
    },
    {
      title: 'Windows 11 Home Screen Clone',
      description: 'A clone of Windows 11 desktop with interactive weather, calendar, and calculator widgets using Vanilla JavaScript.',
      points: [
        'Live date-time display, functional calculator, and calendar.',
        'Wallpaper auto-change every 10 seconds with transition animation.',
        'Integrated OpenWeatherMap API for real-time weather updates.'
      ],
      iframeLink: 'https://harshverma2609.github.io/Windows-11-Clone/'
    }
  ];

  return (
    <section id='Projects'>
      <h2>Personal Projects</h2>
      {projectList.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;
