import React from 'react';

const ReferencesSection: React.FC = () => {
  return (
    <section id="references" className="py-12 bg-gray-50">
      <div className="container max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <img src="erle13.jpg" alt="Reference 1" className="w-full h-64 object-cover"/>
            <button className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white py-2 px-4 w-full">
              Details ansehen
            </button>
          </div>
          <div className="relative">
            <img src="erle14.jpg" alt="Reference 2" className="w-full h-64 object-cover"/>
            <button className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white py-2 px-4 w-full">
              Details ansehen
            </button>
          </div>
          <div className="relative">
            <img src="erle5.jpg" alt="Reference 3" className="w-full h-64 object-cover"/>
            <button className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white py-2 px-4 w-full">
              Details ansehen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
