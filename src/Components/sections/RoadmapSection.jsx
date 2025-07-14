import React from 'react';

const RoadmapSection = ({ onCardClick }) => {
  const items = ['DSA', 'Frontend', 'Backend', 'Python', 'C++'];

  return (
    <div id="notes">
      <h1 className="text-3xl sm:text-2xl text-center mt-12 font-semibold tracking-tight text-gray-900">
        Roadmaps
      </h1>
      {/* <p className="text-md sm:text-xl lg:text-md font-medium mt-2 mx-3 text-gray-600">
        Revise every concept quickly with structured and searchable notes.
      </p> */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {items.map((title, index) => (
          <div
            key={index}
            onClick={() => onCardClick('notes', title)}
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