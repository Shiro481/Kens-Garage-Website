import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import WhyKens from '../components/WhyKens';
import FeaturedBuilds from '../components/FeaturedBuilds';
import Testimonials from '../components/Testimonials';
import QuoteForm from '../components/QuoteForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
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
