import React, { useState } from 'react';
import Lightbox from './lightbox';

const images = [
  'https://via.placeholder.com/800x600?text=Bild+1',
  'https://via.placeholder.com/800x600?text=Bild+2',
  'https://via.placeholder.com/800x600?text=Bild+3',
  'https://via.placeholder.com/800x600?text=Bild+4',
  'https://via.placeholder.com/800x600?text=Bild+5',
  'https://via.placeholder.com/800x600?text=Bild+6',
  'https://via.placeholder.com/800x600?text=Bild+7',
];

const FullSizeGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    console.log("Clicked image source:", src);  // Bildpfad anzeigen
    setSelectedImage(src); // Setzt das Bild in den Zustand
  };

  const handleCloseLightbox = () => {
    console.log("Closing Lightbox");
    setSelectedImage(null); // Schließt die Lightbox
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto">
       

        {/* Galerie-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(src)} // Öffnet die Lightbox
            >
              <img
                src={src}
                alt={`Impression ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              {/* Overlay mit Hover-Effekt */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox anzeigen, wenn ein Bild ausgewählt ist */}
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={handleCloseLightbox} />
      )}
    </div>
  );
};

export default FullSizeGallery;
