import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../assets/CSS/Navbar.css';
import logo from "../assets/vedxians.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Roadmaps', href: '#roadmap' },
    { name: 'Practice', href: '#yt' },
    { name: 'DSA', href: '#dsa' },
    { name: 'Notes', href: '#note' },
  ];

  return (
    <nav className="w-full bg-[#1A1A1A]/80 shadow-md px-4 py-3 fixed top-0 left-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="VedX Logo" className="w-10 h-10" />
          <span className="glowing text-xl font-bold text-[#00FFFF]">VedX Coding School</span>
        </div>

        {/* Hamburger Icon */}
        <div className="block md:hidden">
          <button
            className="text-2xl text-gray-200 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-semibold text-gray-300 text-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-[#00FFFF] transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://www.youtube.com/@Vedxians"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg"
            >
              YouTube
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="w-full mt-4 md:hidden  rounded-md shadow-md p-4 space-y-3 text-gray-300 text-md ">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-1 hover:text-[#00FFFF] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.youtube.com/@Vedxians"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg"
              onClick={() => setMenuOpen(false)}
            >
              YouTube
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
