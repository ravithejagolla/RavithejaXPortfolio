import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Github, Linkedin, Twitter } from './SocialIcons';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-grid">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <h2 className="greeting">Hello, I'm</h2>
                    <h1 className="name">Ravitheja <span className="text-gradient"></span></h1>
                    <h3 className="role">Full Stack Developer</h3>
                    <p className="bio">
                        I build premium, aesthetic, and dynamic web applications. 
                        Specialized in React, Node.js, and modern UX design.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#" className="btn btn-secondary" style={{marginLeft: '1rem'}}>
                            <Download size={18} style={{marginRight: '8px', verticalAlign: 'middle'}} />
                            Resume
                        </a>
                    </div>
                    <div className="hero-socials">
                        <a href="#" className="social-link"><Github size={24} /></a>
                        <a href="#" className="social-link"><Linkedin size={24} /></a>
                        <a href="#" className="social-link"><Twitter size={24} /></a>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hero-image"
                >
                    <div className="blob-bg"></div>
                    <img src="/assets/profile_pro.png" alt="Ravitheja" />
                </motion.div>
            </div>
            
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
