import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Terminal, Monitor } from 'lucide-react';

const Skills = () => {
    const skillsData = [
        { 
            category: 'Frontend', 
            icon: <Monitor size={24} />,
            items: ['React.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind', 'Vite'] 
        },
        { 
            category: 'Backend', 
            icon: <Server size={24} />,
            items: ['Node.js', 'Express.js', 'Python', 'RESTful APIs'] 
        },
        { 
            category: 'Database & DevOps', 
            icon: <Database size={24} />,
            items: ['MongoDB', 'SQL', 'Git', 'AWS Basics', 'Docker'] 
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
                <div className="skills-grid">
                    {skillsData.map((skillset, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card skill-card"
                        >
                            <div className="skill-header">
                                <div className="skill-icon">{skillset.icon}</div>
                                <h3>{skillset.category}</h3>
                            </div>
                            <ul className="skill-list">
                                {skillset.items.map((item, i) => (
                                    <li key={i}>
                                        <div className="skill-dot"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Skills;
