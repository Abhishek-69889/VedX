import React from 'react';
import Navbar from "../Pages/Navbar"
// import landing_image from '../assets/E-learning.jpg';
import landing_image from '../assets/BG-banner.png';
import NotesSection from './sections/NotesSection';
import DsaSection from './sections/DsaSection';
import RoadmapSection from './sections/RoadmapSection';
import A2ZDSA from './sections/A2ZDSA';

const LandingPage = () => {
  const handleCardClick = (sectionId, title) => {
    // Placeholder for future routing logic
    console.log(`Clicked on ${title} in section ${sectionId}`);
    window.location.href = '/'; // Adjust this to use react-router-dom later
  };

  return (
    <div className="min-h-screen text-gray-900">
      <Navbar/>

      {/* Hero Section */}
      <section className="relative bg-black/90  w-full">
  <img
    src={landing_image}
    alt="VedX Banner"
    className="w-full h-[100vh] object-contain"
  />

  {/* Button positioned at bottom area over image */}
  <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 z-10">
    <a
      href="https://www.youtube.com/watch?v=lfOat53fFL8&t=2s"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow"
    >
      Introduction
    </a>
  </div>
</section>


      {/* Sections */}
      <RoadmapSection onCardClick={handleCardClick} />
      <A2ZDSA onCardClick={handleCardClick} />
      <DsaSection onCardClick={handleCardClick} />
      <NotesSection onCardClick={handleCardClick} />



      {/* Footer */}
      <footer className="bg-gray-100 border-t mt-10">
  <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-4 gap-8 text-center sm:text-left">
    
    {/* Brand Section */}
    <div>
      <h2 className="text-blue-500 font-bold text-lg mb-2">
        VedX Coding School
      </h2>
      <p className="text-gray-600 text-sm">
        A place to learn, grow and track mistakes and improve every day.
      </p>
    </div>

    {/* Navigation Links */}
    <div>
      <h3 className="text-md font-semibold text-gray-800 mb-2">Quick Links</h3>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li><a href="#notes" className="hover:text-gray-900">Notes</a></li>
        <li><a href="#dsa" className="hover:text-gray-900">DSA</a></li>
        <li><a href="#quiz" className="hover:text-gray-900">Quiz</a></li>
      </ul>
    </div>

    {/* Tracker */}
    <div>
      <h3 className="text-md font-semibold text-gray-800 mb-2">Track your growth</h3>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li><a href="https://errolog.netlify.app/" className="hover:text-gray-900">ErrorLog</a></li>
        <li><a href="https://fronttrack.netlify.app/" className="hover:text-gray-900">FontTrack</a></li>
        <li><a href="https://dsapractice.netlify.app/" className="hover:text-gray-900">AlgoTrack</a></li>
      </ul>
    </div>

    {/* Social or Contact */}
    <div>
      <h3 className="text-md font-semibold text-gray-800 mb-2">Connect</h3>
      <ul className="space-y-2 text-gray-600 text-sm">
        <li><a href="https://abhishek-tportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Portfolio</a></li>
        <li><a href="https://www.linkedin.com/in/abhishek-softweredeveloper/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">LinkedIn</a></li>
        <li><a href="mailto:abhit0396@gmail.com" className="hover:text-gray-900">Email</a></li>
        <li><a href="https://github.com/Abhishek-69889" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">GitHub</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t text-center text-gray-500 text-sm py-4">
    <p>
      Made with ❤️ by Abhishek Tiwari | © {new Date().getFullYear()} <span className='text-blue-500 font-bold text-lg'>VedX Coding School</span>. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
};

export default LandingPage;
