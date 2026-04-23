import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutExperience from './pages/AboutExperience';
import Projects from './pages/Projects';
import CertificationsContact from './pages/CertificationsContact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-experience" element={<AboutExperience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certifications-contact" element={<CertificationsContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
