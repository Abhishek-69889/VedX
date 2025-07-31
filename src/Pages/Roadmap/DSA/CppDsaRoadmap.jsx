// CppDsaRoadmap.jsx
import React, { useState } from 'react';
import roadmapData from './roadmapData.json';

const CppDsaRoadmap = () => {
  const [selectedMonth, setSelectedMonth] = useState(0);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">📘 6-Month C++ + DSA Roadmap</h1>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {roadmapData.map((month, index) => (
          <button
            key={index}
            onClick={() => setSelectedMonth(index)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${selectedMonth === index ? 'bg-blue-600 text-white' : 'bg-white border border-blue-600 text-blue-600'}`}
          >
            {month.month}
          </button>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-3">{roadmapData[selectedMonth].month}</h2>
        {Object.entries(roadmapData[selectedMonth].topics).map(([section, items], i) => (
          <div key={i} className="mb-4">
            <h3 className="text-lg font-medium text-blue-700 mb-1">🔹 {section}</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CppDsaRoadmap;
