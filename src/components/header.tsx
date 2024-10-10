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
    {/* Logo als klickbares Link mit geschnörkelter Schrift */}
    <a href="/" className="text-3xl font-bold font-cursive">
      <h1 className="text-3xl">Zur Erleninsel</h1>
    </a>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex space-x-6">
      <a href="/camping" className="hover:text-green-500 font-bold text-2xl">Camping</a>
      <a href="/freizeit" className="hover:text-green-500 font-bold text-2xl">Freizeit</a>
      <a href="/preise" className="hover:text-green-500 font-bold text-2xl">Preise</a>
      <a href="/impressionen" className="hover:text-green-500 font-bold text-2xl">Impressionen</a>
      <a href="/kontakt" className="hover:text-green-500 font-bold text-2xl">Kontakt</a>
      <a href="/anfahrt" className="hover:text-green-500 font-bold text-2xl">Anfahrt</a>
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
        <a href="/camping" className="hover:text-green-500 font-bold text-2xl block">Camping</a>
      </li>
      <li>
        <a href="/freizeit" className="hover:text-green-500 font-bold text-2xl block">Freizeit</a>
      </li>
      <li>
        <a href="/preise" className="hover:text-green-500 font-bold text-2xl block">Preise</a>
      </li>
      <li>
        <a href="/impressionen" className="hover:text-green-500 font-bold text-2xl block">Impressionen</a>
      </li>
      <li>
        <a href="/kontakt" className="hover:text-green-500 font-bold text-2xl block">Kontakt</a>
      </li>
      <li>
        <a href="/anfahrt" className="hover:text-green-500 font-bold text-2xl block">Anfahrt</a>
      </li>
    </ul>
  </nav>
</header>

  );
};

export default Header;
