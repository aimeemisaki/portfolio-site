import './index.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Experiences from './components/Experiences/Experiences';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to ='/' />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  )
}

export default App;
