import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import MenuGrid from '../../components/MenuGrid/MenuGrid';
import Testimonials from '../../components/Testimonials/Testimonials';
import Story from '../../components/Story/Story';
import Footer from '../../components/Footer/Footer';
import ReservationModal from '../../components/ReservationModal/ReservationModal';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      <Navbar onReserve={() => setIsModalOpen(true)} />
      <main>
        <Hero />
        <MenuGrid />
        <Story />
        <Testimonials />
      </main>
      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Footer />
    </div>
  );
}

export default HomePage;