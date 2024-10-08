import React from 'react';
import Header from './header';
import ImageSlider from './image_slider';
import BookingSection from './booking_section';
import TextSection from './text_section';
import Gallery from './gallery';
import Footer from './footer';
import FAQ from './faq';
import ReferenceSection from './references';
import Text from './text'



const Home: React.FC = () => {
  return (
    <div>
      <Text />
      <Gallery />
      <FAQ/>
      <Text/>
      <ReferenceSection/>
    </div>
  );
};

export default Home;
