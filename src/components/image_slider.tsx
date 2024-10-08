import React, { useState, useEffect } from 'react';

const images = [
  'picture.jpg',
  'pic2.jpg',
  'pic3.jpg',
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000); // Wechselt alle 5 Sekunden das Bild
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full" style={{ height: 'calc(100vh)' }}> {/* 80px entspricht der Header-Höhe */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
        <h2 className="text-2xl font-bold">Willkommen auf unserem Campingplatz!</h2>
      </div>
    </div>
  );
};

export default ImageSlider;
