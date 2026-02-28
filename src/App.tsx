import React from 'react';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import WhyKens from './components/WhyKens';
import FeaturedBuilds from './components/FeaturedBuilds';
import Testimonials from './components/Testimonials';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Toaster position="top-right" theme="dark" />
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyKens />
      <FeaturedBuilds />
      <Testimonials />
      <QuoteForm />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}