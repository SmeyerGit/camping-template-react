import React from 'react';
import Header from './components/header';
import ImageSlider from './components/image_slider';
import BookingSection from './components/booking_section';
import TextSection from './components/text_section';
import Gallery from './components/gallery';
import Footer from './components/footer';
import FAQ from './components/faq';
import ReferenceSection from './components/references';
import Text from './components/text'
import PricesPage from './pages/price_page'
import Home from './pages/home'
import Impressionen from './pages/impressions';
import Kontakt from './pages/contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Anfahrt from './pages/anfahrt';



const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Menü wird auf allen Seiten angezeigt */}
        <ImageSlider/>
        <BookingSection />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/preise" element={<PricesPage />} /> {/* Preise-Seite */}
          <Route path="/impressionen" element={<Impressionen />} /> {/* Preise-Seite */}
          <Route path="/kontakt" element={<Kontakt />} /> {/* Preise-Seite */}
          <Route path="/anfahrt" element={<Anfahrt />} /> {/* Preise-Seite */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
