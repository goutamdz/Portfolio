import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';
import About from './components/About';
import Education from './components/Education';
function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <SkillsSection/>
      <Contact/>
    </>
  )
}

export default App;