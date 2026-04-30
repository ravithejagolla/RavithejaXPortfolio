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
                    <h1 className="name">Ravitheja <span className="text-gradient">Golla</span></h1>
                    <p className="bio" style={{ fontSize: '1.25rem', marginTop: '1rem', fontWeight: 300 }}>
                        A passionate Full Stack Developer focused on building elegant, scalable, and user-centric web applications.
                    </p>
                    <div className="hero-buttons" style={{ marginTop: '2rem' }}>
                        <a href="https://drive.google.com/uc?export=download&id=1AeEss6NcB6bv4UKcSdw8rVPimo11cOLn" target="_blank" rel="noopener noreferrer" download className="btn btn-primary">
                            <Download size={18} style={{marginRight: '8px', verticalAlign: 'middle'}} />
                            Download Resume
                        </a>
                    </div>
                    <div className="hero-socials">
                        <a href="https://github.com/ravithejagolla" className="social-link" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                        <a href="http://linkedin.com/in/ravitheja-golla-880661310/" className="social-link" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                        <a href="https://twitter.com/ravithejagolla" className="social-link" target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
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
