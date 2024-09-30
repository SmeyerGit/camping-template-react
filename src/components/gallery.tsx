import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Unsere Referenzen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <img src="https://via.placeholder.com/300" alt="Reference 1" className="w-full h-64 object-cover"/>
            <button className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white py-2 px-4 w-full">
              Details ansehen
            </button>
          </div>
          <div className="relative">
            <img src="https://via.placeholder.com/300" alt="Reference 2" className="w-full h-64 object-cover"/>
            <button className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white py-2 px-4 w-full">
              Details ansehen
            </button>
          </div>
          <div className="relative">
            <img src="https://via.placeholder.com/300" alt="Reference 3" className="w-full h-64 object-cover"/>
            <button className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white py-2 px-4 w-full">
              Details ansehen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
