import React from 'react';
import './Footer.css';
import { Mail } from 'lucide-react';
import { Github, Linkedin, Twitter } from './SocialIcons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#" className="logo">Ravitheja<span className="text-gradient">.dev</span></a>
                        <p>Building digital experiences that matter.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-socials">
                        <h4>Socials</h4>
                        <div className="social-icons">
                            <a href="#" aria-label="Github"><Github size={20} /></a>
                            <a href="#" aria-label="Linkedin"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Mail"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ravitheja. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
