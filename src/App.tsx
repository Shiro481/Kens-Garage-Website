import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import BuildsPage from './pages/BuildsPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';

export default function App() {
  return (
    <Router>
      <Toaster position="top-right" theme="dark" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/builds" element={<BuildsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </Router>
  );
}