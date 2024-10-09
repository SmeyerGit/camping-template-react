import React from 'react';

interface LightboxProps {
  image: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
      onClick={onClose} // Schließt die Lightbox bei Klick auf den Hintergrund
    >
      <img src={image} alt="Full-size" className="max-w-full max-h-full" />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
      >
        &times; {/* Schließen-Button */}
      </button>
    </div>
  );
};

export default Lightbox;
