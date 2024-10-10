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



const Anfahrt: React.FC = () => {
  return (
    <div className="bg-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
      <img
                src="erle18.jpg"
                alt="Karte"
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
      </div>
    </div>
  );
};

export default Anfahrt;