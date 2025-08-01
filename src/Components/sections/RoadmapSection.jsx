import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoadmapSection = () => {
  const navigate = useNavigate();
  const items = ['Frontend', 'DSA' , 'C++'];

  const handleClick = (title) => {
    if (title === 'Frontend') {
      window.open('https://fronttrack.netlify.app/', '_blank'); // ✅ Replace with real link
    } else if (title === 'DSA') {
      navigate('/DSA');
    } else if (title === 'C++') {
      navigate('/cpp-roadmap'); // ✅ Ensure this route is defined
    }
  };

  return (
    <div id="roadmap">
      <h1 className="text-3xl sm:text-2xl text-center mt-12 font-semibold tracking-tight text-gray-900">
        Roadmaps
      </h1>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {items.map((title, index) => (
          <div
            key={index}
            onClick={() => handleClick(title)}
            className="p-6 bg-white rounded-xl shadow hover:shadow-md hover:scale-105 hover:bg-blue-50 transition-transform duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-600">{title}</h2>
            <p className="text-gray-700 text-sm">
              Boost your prep with expert-selected resources in{' '}
              <span className="font-semibold text-blue-600">{title}</span>.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RoadmapSection;
