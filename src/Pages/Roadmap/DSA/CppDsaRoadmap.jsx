import React, { useState } from 'react';
import roadmapData from './roadmapData.json';

const CppDsaRoadmap = () => {
  const [selectedType, setSelectedType] = useState('Service-Based');
  const [activeCategory, setActiveCategory] = useState('Data Structures');
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (topic) => {
    setCheckedItems((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };

  const renderTopics = (topics) => (
    <ul className="space-y-3 mt-3">
      {topics.map((topic, index) => (
        <li key={index} className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={checkedItems[topic] || false}
            onChange={() => handleCheckboxChange(topic)}
            className="w-4 h-4 accent-blue-600"
          />
          <label className="text-gray-800 text-sm">{topic}</label>
        </li>
      ))}
    </ul>
  );

  const availableCategories = Object.keys(roadmapData[selectedType]);

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">DSA Roadmap</h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow space-y-6">
        {/* Dropdown for Role Type */}
        <div className="space-y-2">
          <label className="text-lg font-semibold">Select Role Type:</label>
          <select
            value={selectedType}
            onChange={(e) => {
              const newType = e.target.value;
              setSelectedType(newType);
              setActiveCategory(Object.keys(roadmapData[newType])[0]);
            }}
            className="w-full p-2 border border-gray-300 rounded"
          >
            {Object.keys(roadmapData).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Category Dropdown */}
        <div className="space-y-2">
          <label className="text-lg font-semibold">Select Category:</label>
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            {availableCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Render Topics */}
        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            {selectedType} - {activeCategory}
          </h2>
          {renderTopics(roadmapData[selectedType][activeCategory])}
        </div>
      </div>
    </div>
  );
};

export default CppDsaRoadmap;
