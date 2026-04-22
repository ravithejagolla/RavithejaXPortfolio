import React from 'react';
import './Projects.css';

const Projects = () => {
    // Static data for projects
    const projects = [
        {
            title: 'Shop-Smart E-Commerce',
            description: 'A full-stack e-commerce application with secure authentication, cart management, and Stripe integration.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            link: '#'
        },
        {
            title: 'AI Chat Assistant',
            description: 'A Retrieval-Augmented Generation chatbot utilizing real-time web search and dynamic UI responses.',
            tech: ['React', 'OpenAI', 'Node.js'],
            link: '#'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Featured <span className="text-gradient">Projects</span></h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-card project-card animate-on-scroll">
                            <h3>{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tech-badge">{t}</span>
                                ))}
                            </div>
                            <a href={project.link} className="btn btn-secondary project-link">View Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
