import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './animations.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;