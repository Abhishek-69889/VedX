// src/Pages/LandingPage.jsx
import React from 'react';
import Navbar from "../Pages/Navbar"
import landing_image from '../assets/E-learning.jpg';
import NotesSection from '../components/sections/NotesSection';
import DsaSection from '../components/sections/DsaSection';
import QuizSection from '../components/sections/QuizSection';
import StudyMaterialSection from '../components/sections/StudyMaterialSection';
import CsFundamentalsSection from '../components/sections/CsFundamentalsSection';
import RoadmapSection from '../components/sections/RoadmapSection';

const LandingPage = () => {
  const handleCardClick = (sectionId, title) => {
    // Placeholder for future routing logic
    console.log(`Clicked on ${title} in section ${sectionId}`);
    window.location.href = '/'; // Adjust this to use react-router-dom later
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar/>

      {/* Hero Section */}
      <section
        className="relative text-center py-30 px-4"
        style={{
          backgroundImage: `url(${landing_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-white/10 z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-3xl font-extrabold mb-4 tracking-tight text-white">
            Master DSA, Frontend, Backend & Crack Interviews
          </h1>
          <p className="max-w-2xl mx-auto mb-6 text-white/50 text-lg">
            Dive into interactive quizzes, curated notes, YouTube resources, and company-specific practice sets — everything you need in one place.
          </p>
          <a
            href="#dsa"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Sections */}
      <NotesSection onCardClick={handleCardClick} />
      <DsaSection onCardClick={handleCardClick} />
      <QuizSection onCardClick={handleCardClick} />
      {/* Optional future section: <ProgrammingLanguagesSection onCardClick={handleCardClick} /> */}
      <StudyMaterialSection onCardClick={handleCardClick} />
      <CsFundamentalsSection onCardClick={handleCardClick} />
      <RoadmapSection onCardClick={handleCardClick} />

      {/* Footer */}
      <footer className="text-center py-6 mt-10 text-gray-600 text-sm bg-white border-t">
        Made with ❤️ by Abhishek Tiwari | © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default LandingPage;
