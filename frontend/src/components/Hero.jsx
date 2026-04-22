import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-content animate-on-scroll">
                <h2 className="greeting">Hello, I'm</h2>
                <h1 className="name">Ravitheja <span className="text-gradient">X</span></h1>
                <h3 className="role">Full Stack Developer</h3>
                <p className="bio">
                    I build premium, aesthetic, and dynamic web applications. 
                    Specialized in React, Node.js, and modern UX design.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View the Work</a>
                    <a href="#contact" className="btn btn-secondary" style={{marginLeft: '1rem'}}>Contact Me</a>
                </div>
            </div>
        </section>
    );
};
export default Hero;
