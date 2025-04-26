import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Certificate from './pages/Certificate';
import Project from './pages/Project';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/certificates' element={<Certificate />} />
        </Routes>

        <Analytics />
      </BrowserRouter>
    </>
  )
}

export default App;
