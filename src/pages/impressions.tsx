import React from 'react';
import FullSizeGallery from '../components/full_size_gallery';

const ImpressionenPage: React.FC = () => {
  return (
    <div>
      {/* Banner / Titelbereich */}
      <section className="relative py-12 bg-white text-black text-center flex items-center justify-center">
        <h1 className="text-5xl font-bold">Impressionen</h1>
      </section>

      {/* Galerie */}
      <FullSizeGallery />
    </div>
  );
};

export default ImpressionenPage;
