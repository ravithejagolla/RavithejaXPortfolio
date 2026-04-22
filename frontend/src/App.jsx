import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }); // run after every render to catch newly added elements if data loads dynamically

  return (
    <>
      <header>
        <div className="container">
          <a href="#" className="logo">Ravitheja<span className="text-gradient">.dev</span></a>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
