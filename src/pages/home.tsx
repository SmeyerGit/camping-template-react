import React from 'react';
import Header from '../components/header';
import ImageSlider from '../components/image_slider';
import BookingSection from '../components/booking_section';
import TextSection from '../components/text_section';
import Gallery from '../components/gallery';
import Footer from '../components/footer';
import FAQ from '../components/faq';
import ReferenceSection from '../components/references';
import Text from '../components/text'



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
