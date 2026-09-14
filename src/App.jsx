import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'; // Add lenis base css just in case
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import PageTransition from './components/PageTransition/PageTransition';
import Navbar from './features/Navigation/Navbar';
import Footer from './features/Footer/Footer';
import FloatingCTA from './components/FloatingCTA/FloatingCTA';

import Home from './pages/Home/Home';
import GeneralDentistry from './pages/Services/GeneralDentistry';
import CosmeticDentistry from './pages/Services/CosmeticDentistry';
import DentalImplants from './pages/Services/DentalImplants';
import Orthodontics from './pages/Services/Orthodontics';
import RootCanal from './pages/Services/RootCanal';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  const location = useLocation();

  // Initialize Lenis for buttery smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  // Scroll to top automatically when navigating between pages
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services/general-dentistry" element={<GeneralDentistry />} />
            <Route path="/services/cosmetic-dentistry" element={<CosmeticDentistry />} />
            <Route path="/services/dental-implants" element={<DentalImplants />} />
            <Route path="/services/orthodontics" element={<Orthodontics />} />
            <Route path="/services/root-canal-treatment" element={<RootCanal />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;
