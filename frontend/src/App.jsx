import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <a href="#" className="logo">Ravitheja<span className="text-gradient">.dev</span></a>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a 
                href="https://drive.google.com/uc?export=download&id=1AeEss6NcB6bv4UKcSdw8rVPimo11cOLn" 
                download 
                onClick={(e) => {
                  window.open("https://drive.google.com/file/d/1AeEss6NcB6bv4UKcSdw8rVPimo11cOLn/view", "_blank", "noopener,noreferrer");
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
