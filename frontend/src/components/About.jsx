import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-grid">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="about-image animate-on-scroll"
                >
                    <div className="image-wrapper">
                        <img src="/assets/profile_pro.png" alt="Ravitheja" />
                        <div className="image-border"></div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="about-text animate-on-scroll"
                >
                    <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
                    <p>
                        Hi, I'm <strong>Ravitheja</strong>! I am a passionate Full Stack Developer with a keen eye for aesthetic design and a love for creating seamless user experiences.
                        With a background in computer science and years of experience building scalable web applications, I bridge the gap between
                        complex back-end logic and intuitive front-end interfaces.
                    </p>
                    <p>
                        My journey in tech started with a curiosity for how things work under the hood, which evolved into a career dedicated to
                        mastering the latest technologies and best practices in web development.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
