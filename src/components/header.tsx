import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Schaltet das Menü ein/aus
  };

  return (
    <header className="bg-white text-green-600 p-6 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold">Campingplatz</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-green-500 font-bold text-2xl">Home</a>
          <a href="#about" className="hover:text-green-500 font-bold text-2xl">Camping</a>
          <a href="#book" className="hover:text-green-500 font-bold text-2xl">Buchen</a>
          <a href="#gallery" className="hover:text-green-500 font-bold text-2xl">Referenzen</a>
        </nav>

        {/* Hamburger Button für Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden block focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-green-600">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a href="#home" className="hover:text-gray-200 block">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-200 block">
                Über uns
              </a>
            </li>
            <li>
              <a href="#book" className="hover:text-gray-200 block">
                Buchen
              </a>
            </li>
            <li>
              <a href="#references" className="hover:text-gray-200 block">
                Referenzen
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
