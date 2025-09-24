import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-dark-900/95 backdrop-blur-md shadow-lg shadow-dark-900/50'
        : 'bg-transparent'
    }`}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo/Brand */}
          <div className='text-2xl font-bold font-display'>
            <span className='text-gradient'>Emmanuel</span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <a href="#home" className='text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium'>
              Home
            </a>
            <a href="#about" className='text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium'>
              About
            </a>
            <a href="#service" className='text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium'>
              Services
            </a>
            <a href="#project" className='text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium'>
              Projects
            </a>
            <a href="#contact" className='text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium'>
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <button className='btn-primary'>
              Connect Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className='md:hidden text-white p-2 rounded-lg hover:bg-dark-800 transition-colors duration-300'
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className='py-4 space-y-4 bg-dark-800/95 backdrop-blur-md rounded-lg mx-4 mt-2'>
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className='block text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium px-4 py-2'
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className='block text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium px-4 py-2'
            >
              About
            </a>
            <a
              href="#service"
              onClick={() => setIsMobileMenuOpen(false)}
              className='block text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium px-4 py-2'
            >
              Services
            </a>
            <a
              href="#project"
              onClick={() => setIsMobileMenuOpen(false)}
              className='block text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium px-4 py-2'
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className='block text-gray-300 hover:text-primary-400 transition-colors duration-300 font-medium px-4 py-2'
            >
              Contact
            </a>
            <div className='px-4 pt-2'>
              <button className='btn-primary w-full'>
                Connect Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;