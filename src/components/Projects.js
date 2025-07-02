
import './Projects.css';

const Projects=()=>{
    return(
        <section id='Projects'>
            <h2>Personal Projects</h2>
            <div className='project-item'>
                <h2>Take Notes Project</h2>
                <p>Tech Stack Used: React.JS, HTML, CSS</p>
                <iframe title='Take Notes Project' src="https://harshverma2609.github.io/notes/" width="100%" height="600px"></iframe>
            </div>
            <div className='project-item'>
                <h2>Windows 11 Home Page Clone</h2>
                <p>Tech Stack Used: JavaScript, HTML, CSS</p>
                <iframe title='Windows 11 Home Page Clone Project' src="https://harshverma2609.github.io/Windows-11-Clone/" width="100%" height="600px"></iframe>
            </div>
        </section>
    );
}

export default Projects;
