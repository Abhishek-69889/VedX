import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoadmapSection = () => {
  const navigate = useNavigate();

  const items = [
    { title: 'Frontend', des: 'Complete roadmap to become a frontend expert.' },
    { title: 'DSA', des: 'Step-by-step plan to master Data Structures & Algorithms.' },
    { title: 'C++', des: 'Structured roadmap to learn C++ for programming and DSA.' },
  ];

  const handleClick = (title) => {
    if (title === 'Frontend') {
      window.open('https://fronttrack.netlify.app/', '_blank');
    } else if (title === 'DSA') {
      navigate('/DSA');
    } else if (title === 'C++') {
      navigate('/cpp-roadmap');
    }
  };

  return (
    <div id="roadmap">
      <h1 className="text-3xl text-center mt-12 font-semibold text-white">
        Roadmaps
      </h1>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.title)}
            className="p-6 bg-[#1A1A1A] rounded-2xl border border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.02] hover:bg-[#1F1F1F] transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2 text-[#00FFFF]">
              {item.title}
            </h2>
            <p className="text-gray-300 text-sm">
              {item.des} •{' '}
              <span className="font-semibold text-[#00FFFF]">{item.title}</span>
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RoadmapSection;
