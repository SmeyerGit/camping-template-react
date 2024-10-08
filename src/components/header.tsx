import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Zustand für das Burger-Menü

  // Scroll-Funktion überwachen
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Scroll-Ereignis hinzufügen
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Menü ein- und ausklappen
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white text-green-600 shadow-lg' : 'bg-gray-800 bg-opacity-25 text-white'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold">Campingplatz</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-green-500 font-bold text-2xl">Home</a>
          <a href="#about" className="hover:text-green-500 font-bold text-2xl">Camping</a>
          <a href="#book" className="hover:text-green-500 font-bold text-2xl">Buchen</a>
          <a href="#references" className="hover:text-green-500 font-bold text-2xl">Referenzen</a>
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
      <nav
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        } bg-green-600 bg-opacity-90 text-white`}
      >
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <a href="#home" className="hover:text-green-500 font-bold text-2xl block">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-500 font-bold text-2xl block">Camping</a>
          </li>
          <li>
            <a href="#book" className="hover:text-green-500 font-bold text-2xl block">Buchen</a>
          </li>
          <li>
            <a href="#references" className="hover:text-green-500 font-bold text-2xl block">Referenzen</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
