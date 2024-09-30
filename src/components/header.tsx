import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-600 text-white p-6 h-20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Campingplatz</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
            <li><a href="#about" className="hover:text-gray-200">Über uns</a></li>
            <li><a href="#book" className="hover:text-gray-200">Buchen</a></li>
            <li><a href="#references" className="hover:text-gray-200">Referenzen</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
