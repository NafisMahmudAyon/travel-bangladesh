'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?href=format&fit=crop&w=100&h=100&q=80"
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover"
          /> */}
          <div className={`font-bold text-xl md:text-2xl ${isScrolled ? 'text-forest' : 'text-white'}`}>
            Discover Bangladesh
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-forest-light`}>Home</Link>
          <Link href="/about" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-forest-light`}>About</Link>
          <Link href="/destinations" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-forest-light`}>Destinations</Link>
          <Link href="/packages" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-forest-light`}>Tour Packages</Link>
          <Link href="/services" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-forest-light`}>Services</Link>
          <Link href="/contact" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-forest-light`}>Contact</Link>
          <Button variant={isScrolled ? "default" : "outline"} className={isScrolled ? "bg-forest text-white" : "border-white text-white hover:bg-white bg-transparent hover:text-forest"}>
            Plan Your Trip
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden absolute w-full bg-white shadow-md ${isMenuOpen ? 'block animate-slide-down' : 'hidden'
          }`}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          <Link href="/" className="text-gray-800 hover:text-forest" onClick={toggleMenu}>Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-forest" onClick={toggleMenu}>About</Link>
          <Link href="/destinations" className="text-gray-800 hover:text-forest" onClick={toggleMenu}>Destinations</Link>
          <Link href="/packages" className="text-gray-800 hover:text-forest" onClick={toggleMenu}>Tour Packages</Link>
          <Link href="/services" className="text-gray-800 hover:text-forest" onClick={toggleMenu}>Services</Link>
          <Link href="/contact" className="text-gray-800 hover:text-forest" onClick={toggleMenu}>Contact</Link>
          <Button className="!bg-forest text-white w-full mt-2" onClick={toggleMenu}>
            Plan Your Trip
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header