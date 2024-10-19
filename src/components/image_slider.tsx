import React, { useState, useEffect } from 'react';

const images = [
  'pic2.jpg',
  'pic3.jpg',
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // Start der Animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Bild wechseln
        setIsAnimating(false); // Zurücksetzen der Animation
      }, 300); // Schnelle Fade-Out-Dauer (200ms)
    }, 7000); // Bildwechsel alle 5 Sekunden

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full" style={{ height: 'calc(100vh)' }}>
      <div className="absolute inset-0 transition-opacity duration-500 ease-in-out" style={{ opacity: isAnimating ? 0.9 : 1 }}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 transition-all duration-200 ease-in-out">
        <h2 className="text-2xl font-bold">Willkommen auf unserem Campingplatz!</h2>
      </div>
    </div>
  );
};

export default ImageSlider;
