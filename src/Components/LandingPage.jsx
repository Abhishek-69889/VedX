import React from 'react';
import Navbar from "../Pages/Navbar";
import logo from '../assets/vedxians.png';
import NotesSection from './sections/NotesSection';
import DsaSection from './sections/DsaSection';
import RoadmapSection from './sections/RoadmapSection';
import A2ZDSA from './sections/Practice';
import '../assets/CSS/landingPage.css'

const LandingPage = () => {
  const handleCardClick = (sectionId, title) => {
    console.log(`Clicked on ${title} in section ${sectionId}`);
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white transition-colors duration-500 ease-in-out">
      <Navbar />

      {/* Hero Section */}

<section className="relative h-screen w-full overflow-hidden text-white flex flex-col items-center justify-center px-4 text-center bg-black">
  {/* Spiral-Like Background Pattern */}
  <div className="absolute inset-0 z-0">
    <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
  </div>

  {/* Overlay for Dark Contrast */}
  <div className="absolute inset-0 bg-black bg-opacity-90 z-0"></div>

  {/* Foreground Content */}
  <div className="relative z-10 max-w-3xl space-y-6">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug text-center max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <span>At</span>
        <img
          src={logo}
          alt="VedX Owl Logo"
          className="h-10 sm:h-12 align-middle"
        />
        <span>You’re not just learning to </span>
        <span className="text-[#00bcd4] font-bold">Code</span>
        <span>—</span>
      </div>
      <div className="mt-4">
        <span className="font-bold">
          You’re <span className="typing"></span> Your Tomorrow.
        </span>
      </div>
    </h1>

    {/* CTA Button */}
    <div>
      <a
        href="https://www.instagram.com/vedx_coding_school/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-4 my-10 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg inline-block"
      >
        Follow on Instagram
      </a>
    </div>
  </div>
</section>






      {/* Sections */}
      <RoadmapSection onCardClick={handleCardClick} />
      <A2ZDSA onCardClick={handleCardClick} />
      <DsaSection onCardClick={handleCardClick} />
      <NotesSection onCardClick={handleCardClick} />

      {/* Footer */}
      <footer className="bg-[#111] border-t border-gray-700 mt-16 text-gray-400">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-4 gap-10 text-center sm:text-left">
          <div>
            <h2 className="text-[#00FFFF] font-bold text-xl mb-2">VedX Coding School</h2>
            <p className="text-sm">Learn, grow, track mistakes, and improve every day.</p>
          </div>

          <div>
            <h3 className="text-md font-semibold text-[#00FFFF] mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#notes" className="hover:text-white transition">Notes</a></li>
              <li><a href="#dsa" className="hover:text-white transition">DSA</a></li>
              <li><a href="#quiz" className="hover:text-white transition">Quiz</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-[#00FFFF] mb-3">Track your growth</h3>
            <ul className="space-y-2">
              <li><a href="https://errolog.netlify.app/" className="hover:text-white transition">ErrorLog</a></li>
              <li><a href="https://fronttrack.netlify.app/" className="hover:text-white transition">FontTrack</a></li>
              <li><a href="https://dsapractice.netlify.app/" className="hover:text-white transition">AlgoTrack</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-[#00FFFF] mb-3">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/vedx-coding-school/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="mailto:abhit0396@gmail.com" className="hover:text-white transition">Email</a></li>
              <li><a href="https://www.instagram.com/vedx_coding_school/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 text-center text-sm py-4">
          <p>
            Made with ❤️ by Abhishek Tiwari | © {new Date().getFullYear()} <span className="glowing text-purple-400 font-bold">VedX Coding School</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
