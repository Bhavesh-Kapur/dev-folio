import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import LifeChangelog from './components/LifeChangelog';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <Header />
      <Projects />
      <LifeChangelog />
      <Contact />
    </div>
  );
}

export default App;
