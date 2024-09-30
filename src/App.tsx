import React from 'react';
import Header from './components/header';
import ImageSlider from './components/image_slider';
import BookingSection from './components/booking_section';
import TextSection from './components/text_section';
import ReferencesSection from './components/gallery';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ImageSlider />
      <BookingSection />
      <TextSection />
      <ReferencesSection />
      <Footer />
    </div>
  );
};

export default App;
