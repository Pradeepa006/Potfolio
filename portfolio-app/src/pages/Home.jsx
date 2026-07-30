import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Achievements from '../components/sections/Achievements';
import Profiles from '../components/sections/Profiles';
import Resume from '../components/sections/Resume';
import Contact from '../components/sections/Contact';

function Home() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Pradeepa Subramani | Software Engineer</title>
        <meta name="description" content="Portfolio of Pradeepa Subramani, Software Engineering Intern at ABB. Full-Stack Web Developer passionate about building scalable applications." />
        <meta property="og:title" content="Pradeepa Subramani | Portfolio" />
        <meta property="og:description" content="Software Engineer & Full Stack Web Developer." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Profiles />
      <Resume />
      <Contact />
    </div>
  );
}

export default Home;
