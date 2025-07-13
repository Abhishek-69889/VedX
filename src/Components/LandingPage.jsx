import React from 'react';
import landing_image from '../assets/E-learning.jpg'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
   <section
  className="relative text-center py-30 px-4"
  style={{
    backgroundImage: `url(${landing_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="absolute inset-0 backdrop-blur-sm bg-black/ z-0" />

  <div className="relative z-10">
    <h1 className="text-4xl sm:text-3xl font-extrabold mb-4 text-white tracking-tight">
      Master DSA, Frontend, Backend & Crack Interviews
    </h1>
    <p className="max-w-2xl mx-auto mb-6 text-white/70 text-lg">
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


      {/* revision notes */}
      <div id='notes'>
        <h1 className="text-3xl sm:text-2xl text-center mt-12 font-semibold text-white tracking-tight">
          Instant Revision Notes
        </h1>
        <p className="text-md sm:text-xl lg:text-md font-medium mt-2 mx-3 text-gray-400">
          Revise every concept quickly with structured and searchable notes.
        </p>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {[
            { title: "DSA", id: "dsa", redirect: "/" },
            { title: "Frontend", id: "frontend", redirect: "/" },
            { title: "Backend", id: "backend", redirect: "/" },
            { title: "Python", id: "python", redirect: "/" },
            { title: "C++", id: "C++", redirect: "/" },
          ].map((section) => (
            <a
              href={section.redirect}
              key={section.id}
              className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg hover:scale-105 hover:bg-gray-700/70 transition-transform duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-400">{section.title}</h2>
              <p className="text-gray-300 text-sm">
                Boost your prep with expert-selected resources in <span className="font-semibold text-blue-400">{section.title}</span>.
              </p>
            </a>
          ))}
        </section>
      </div>

      {/* Company specific dsa */}
      <div id='dsa'>
        <h1 className="text-3xl text-center mt-12 font-semibold text-white tracking-tight">
          Company-Specific DSA Prep
        </h1>
        <p className="text-md sm:text-xl lg:text-md font-medium mt-2 mx-3 text-gray-400">
          Practice real interview problems from your dream companies.
        </p>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {[
            { title: "Google", id: "google", redirect: "/" },
            { title: "Microsoft", id: "Microsoft", redirect: "/" },
            { title: "Amazon", id: "Amazon", redirect: "/" },
            { title: "TCS", id: "TCS", redirect: "/" },
            { title: "Wipro", id: "Wipro", redirect: "/" },
          ].map((company) => (
            <a
              href={company.redirect}
              key={company.id}
              className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg hover:scale-105 hover:bg-gray-700/70 transition-transform duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-400">{company.title}</h2>
              <p className="text-gray-300 text-sm">
                Boost your prep with expert-selected resources in <span className="font-semibold text-blue-400">{company.title}</span>.
              </p>
            </a>
          ))}
        </section>
      </div>

      {/* Development quiz */}
      <div id='development'>
        <h1 className="text-3xl sm:text-2xl text-center mt-12 font-semibold text-white tracking-tight">
          Development Quizzes
        </h1>
        <p className="text-md sm:text-xl lg:text-md font-medium mt-2 mx-3 text-gray-400">
          Test and solidify your frontend & backend concepts with targeted quizzes.
        </p>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {[
            {
              title: "Frontend Quiz",
              id: "frontend",
              description: "Covers core interview-ready concepts of",
              technologies: "HTML, CSS, JavaScript, React",
            },
            {
              title: "Backend Quiz",
              id: "backend",
              description: "Master backend fundamentals with questions on",
              technologies: "Node.js, Express.js, MongoDB, MySQL",
            },
          ].map((section) => (
            <a
              href={section.redirect}
              key={section.id}
              className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg hover:scale-105 hover:bg-gray-700/70 transition-transform duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-400">{section.title}</h2>
              <p className="text-gray-300 text-sm">
                Boost your prep with expert-selected resources in <span className="font-semibold text-blue-400">{section.title}</span>.
              </p>
            </a>
          ))}
        </section>
      </div>

      {/* Programming languages */}
      <div id='languages'>
        <h1 className="text-3xl sm:text-2xl text-center mt-12 font-semibold text-white tracking-tight">
          Programming Language Quizzes
        </h1>
        <p className="text-md sm:text-xl lg:text-md font-medium mt-2 mx-3 text-gray-400">
          Assess your coding fluency with language-specific interview questions.
        </p>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {[
            { title: "Python", id: "python", description: "Comprehensive practice sets tailored for Python interviews." },
            { title: "C++", id: "cpp", description: "Crack coding rounds with focused C++ interview problems." },
          ].map((section) => (
            <a
              href={section.redirect}
              key={section.id}
              className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg hover:scale-105 hover:bg-gray-700/70 transition-transform duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-400">{section.title}</h2>
              <p className="text-gray-300 text-sm">
                Boost your prep with expert-selected resources in <span className="font-semibold text-blue-400">{section.title}</span>.
              </p>
            </a>
          ))}
        </section>
      </div>

      {/* Study resource */}
      <div id='resources'>
        <h1 className="text-3xl sm:text-2xl text-center mt-12 font-semibold text-white tracking-tight">
          Study Resources & Materials
        </h1>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {[
            { title: "DSA", id: "dsa", redirect: "/" },
            { title: "Frontend", id: "frontend", redirect: "/" },
            { title: "Backend", id: "backend", redirect: "/" },
            { title: "Python", id: "python", redirect: "/" },
            { title: "C++", id: "C++", redirect: "/" },
          ].map((section) => (
            <a
              href={section.redirect}
              key={section.id}
              className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg hover:scale-105 hover:bg-gray-700/70 transition-transform duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-400">{section.title}</h2>
              <p className="text-gray-300 text-sm">
                Boost your prep with expert-selected resources in <span className="font-semibold text-blue-400">{section.title}</span>.
              </p>
            </a>
          ))}
        </section>
      </div>

      {/* CS Fundamentals */}
      <div id='cs'>
        <h1 className="text-3xl sm:text-2xl text-center mt-12 font-semibold text-white tracking-tight">
          CS Fundaments
        </h1>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {[
            { title: "OOP's", id: "oop", redirect: "/" },
            { title: "Computer Network", id: "cn", redirect: "/" },
            { title: "Operating Systems", id: "Operating", redirect: "/" },
            { title: "System Design", id: "SystemDesign", redirect: "/" },
            { title: "Git", id: "git", redirect: "/" },
          ].map((section) => (
            <a
              href={section.redirect}
              key={section.id}
              className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg hover:scale-105 hover:bg-gray-700/70 transition-transform duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-400">{section.title}</h2>
              <p className="text-gray-300 text-sm">
                Boost your prep with expert-selected resources in <span className="font-semibold text-blue-400">{section.title}</span>.
              </p>
            </a>
          ))}
        </section>
      </div>

      {/* Roadmaps */}
      <div id='roadmap'>
        <h1 className="text-3xl sm:text-2xl text-center mt-12 font-semibold text-white tracking-tight">
          Roadmaps
        </h1>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {[
            { title: "DSA", id: "dsa", redirect: "/" },
            { title: "Frontend", id: "frontend", redirect: "/" },
            { title: "Backend", id: "backend", redirect: "/" },
            { title: "Python", id: "python", redirect: "/" },
            { title: "C++", id: "C++", redirect: "/" },
          ].map((section) => (
            <a
              href={section.redirect}
              key={section.id}
              className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg hover:scale-105 hover:bg-gray-700/70 transition-transform duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-400">{section.title}</h2>
              <p className="text-gray-300 text-sm">
                Boost your prep with expert-selected resources in <span className="font-semibold text-blue-400">{section.title}</span>.
              </p>
            </a>
          ))}
        </section>
      </div>

      <footer className="text-center py-6 mt-10 text-gray-400 text-sm bg-gray-800">
        Made with ❤️ by Abhishek Tiwari | © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default LandingPage;
