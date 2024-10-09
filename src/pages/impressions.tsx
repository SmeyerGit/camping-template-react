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
import Banner from '../components/banner'



const Impressionen: React.FC = () => {
  return (
    <div className="bg-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
      <Text />
      <FAQ/>
      <Text/>
      <ReferenceSection/>
    </div>
    </div>
  );
};

export default Impressionen;