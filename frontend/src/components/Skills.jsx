import React from 'react';
import './Skills.css';

const Skills = () => {
    // Static data representing your skills
    const skillsData = [
        { category: 'Frontend', items: ['React.js', 'HTML5/CSS3', 'JavaScript', 'Tailwind', 'Vite'] },
        { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'RESTful APIs'] },
        { category: 'Database & DevOps', items: ['MongoDB', 'SQL', 'Git', 'AWS Basics', 'Docker'] }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title animate-on-scroll">My <span className="text-gradient">Skills</span></h2>
                <div className="skills-grid">
                    {skillsData.map((skillset, index) => (
                        <div key={index} className="glass-card skill-card animate-on-scroll">
                            <h3>{skillset.category}</h3>
                            <ul className="skill-list">
                                {skillset.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Skills;
