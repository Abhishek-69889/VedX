import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../assets/CSS/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Notes', href: '#notes' },
    { name: 'DSA', href: '#dsa' },
    { name: 'Quize', href: '#quiz' },
    // { name: 'Languages', href: '#languages' },
    // { name: 'Roadmaps', href: '#roadmap' },
    // { name: 'Resources', href: '#resources' },
    // { name: 'CS', href: '#cs' },
  ];

  return (
    <nav className="flex items-center justify-around px-6 py-4 bg-white shadow-md transition relative">
      <div className="text-2xl font-bold text-blue-600">Trackmycode</div>

      {/* Desktop Menu */}
      <ul className="desktop-menu gap-6 text-lg font-semibold text-gray-800">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-blue-600">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* <div className="flex items-center gap-4">
        <button className="text-lg cursor-pointer text-gray-800 hover:text-blue-600 desktop-menu">
          Login
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
          Sign Up
        </button>

        <button
          className="mobile-menu-icon text-2xl text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div> */}

      {menuOpen && (
        <div className="mobile-menu absolute top-full left-0 w-full bg-white shadow-md z-50 flex flex-col items-start px-6 py-4 text-sm font-medium text-gray-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 w-full hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {/* <button
            className="mt-3 text-left text-lg text-gray-800 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </button> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
