import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../assets/CSS/Navbar.css';
import logo from "../assets/vedxians.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Roadmaps', href: '#roadmap' },
    { name: 'YT Problems', href: '#yt' },
    { name: 'DSA', href: '#dsa' },
    { name: 'Notes', href: '#note' },
  ];

  return (
    <nav className="w-full bg-white shadow-md px-4 py-3 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="VedX Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-blue-600">VedX Coding School</span>
        </div>

        {/* Hamburger Icon */}
        <div className="block md:hidden">
          <button
            className="text-2xl text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-semibold text-gray-800 text-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-600">
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://www.youtube.com/@Vedxians"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              YouTube
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="w-full mt-4 md:hidden bg-white rounded-md shadow-md p-4 space-y-3 text-gray-800 text-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-1 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.youtube.com/@Vedxians"
              className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
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
