import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Mock successful submission since there's no backend!
        // To use a real service without a backend, you'd change the form's onSubmit or action to 
        // a service like Formspree (e.g., https://formspree.io/f/YOUR_ID)
        setStatus('Sending...');
        
        setTimeout(() => {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        }, 1000);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Get In <span className="text-gradient">Touch</span></h2>
                <div className="contact-container animate-on-scroll">
                    <div style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                        <p>I am currently open to new opportunities. Whether you have a question or just want to connect, my inbox is always open!</p>
                        <p style={{ marginTop: '1rem' }}>Feel free to reach out via the form below or directly at <a href="mailto:gollaravitheja007@gmail.com" style={{ color: 'var(--accent-cyan)' }}>gollaravitheja007@gmail.com</a>.</p>
                        <p style={{ marginTop: '0.5rem' }}>You can also find me on <a href="http://linkedin.com/in/ravitheja-golla-880661310/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)' }}>LinkedIn</a> and <a href="https://github.com/ravithejagolla" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)' }}>GitHub</a>.</p>
                    </div>
                    <form className="glass-card contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                        {status && <p className="status-msg">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contact;
