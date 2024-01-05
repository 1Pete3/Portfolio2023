// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import ProfessionalExperience from './pages/ProfessionalExperience'
import Education from './pages/Education';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Professional-Experience" element={<ProfessionalExperience />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/Projects" element={<Projects />}/>
      <Route path="/Resume" element={<Resume />} />
    </Routes>
  );
};

export default App;
