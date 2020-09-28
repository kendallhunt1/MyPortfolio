import React from 'react';
import Nav from './Nav.js'
import './App.css';
import RectangleHolder from './RectangleHolder.js';
import MyWork from './MyWork.js';
import MySkills from './MySkills.js';
import AboutMe from './AboutMe.js';
import Footer from './Footer.js';

function App() {
  return (
    <div>
      <Nav />
      <RectangleHolder />
      <MyWork />
      <MySkills />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
