import React, { useState } from 'react';
import './i18n';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import MenuGrid from './components/MenuGrid/MenuGrid';
import Testimonials from './components/Testimonials/Testimonials';
import Story from './components/Story/Story';
import Footer from './components/Footer/Footer';
import ReservationModal from './components/ReservationModal/ReservationModal';
import RevealOnScroll from './components/RevealOnScroll/RevealOnScroll';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      <Navbar onReserve={() => setIsModalOpen(true)} />
      <main>
        <Hero />
        <RevealOnScroll>
          <MenuGrid />
        </RevealOnScroll>
        <RevealOnScroll>
          <Story />
        </RevealOnScroll>
        <RevealOnScroll>
          <Testimonials />
        </RevealOnScroll>
      </main>
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </div>
  );
}

export default App;