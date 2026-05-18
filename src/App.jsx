import './index.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  // Global scroll-reveal observer for sections tagged with reveal class
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <WhyUs />
        <Doctors />
        <Testimonials />
        <Resources />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
