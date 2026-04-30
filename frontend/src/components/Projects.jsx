import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from './SocialIcons';

const Projects = () => {
    const projects = [
        {
            title: 'RetailCanvas E-Commerce',
            description: 'A modern full-stack e-commerce platform featuring a sleek UI, category-based browsing, and integrated shopping features.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            image: '/assets/retailcanvas.png',
            link: 'https://shop-smart-commerce.netlify.app/',
            github: 'https://github.com/ravithejagolla/Shop-Smart-E-Commerce'
        },
        {
            title: 'QueryMind - NL to SQL',
            description: 'An AI-powered application that converts natural language queries into complex SQL queries, enabling users to retrieve data from databases without writing SQL.',
            tech: ['React', 'LangChain', 'OpenAI', 'Node.js', 'PostgreSQL'],
            image: '/assets/querymind.png',
            link: 'https://querymind-nltosql.netlify.app/',
            github: 'https://github.com/ravithejagolla/QueryMind'
        },
        {
            title: 'Health Buddy',
            description: 'A dedicated health platform facilitating seamless interactions, messaging, and appointment scheduling between patients and doctors.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            image: '/assets/healthcare.png',
            link: 'https://elegant-hamster-c90294.netlify.app/',
            github: 'https://github.com/ravithejagolla/HealthConnect'
        },
        {
            title: 'Eat-Echo',
            description: 'A voice-powered restaurant discovery app — just say a city name into the mic and instantly find nearby restaurants. Built with Web Speech API for a hands-free, intuitive search experience.',
            tech: ['React', 'Web Speech API', 'Google API', 'CSS'],
            image: '/assets/eatecho.png',
            link: 'https://eat-echo-app1.netlify.app/Home',
            github: 'https://github.com/raju0076/EatEcho'
        }
    ]

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Featured <span className="text-gradient">Projects</span></h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="glass-card project-card"
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="overlay-links">
                                        <a href={project.github} className="icon-link" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                                        <a href={project.link} className="icon-link" target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-badge">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
