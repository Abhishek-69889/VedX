import React, { useEffect, useState } from 'react';
import roadmapRaw from './CppData.json';

const roadmapData = roadmapRaw.cpp_topics.flatMap(month => month.topics);

const Cpp = () => {
  const storageKey = 'cppCheckboxStates';

  // Load saved state from localStorage if it exists
  const getInitialState = () => {
    const saved = localStorage.getItem(storageKey);
    if (saved) return JSON.parse(saved);
    return roadmapData.reduce((acc, topic) => {
      acc[topic] = false;
      return acc;
    }, {});
  };

  const [checkedItems, setCheckedItems] = useState(getInitialState);

  // Save to localStorage whenever checkedItems changes
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleCheckbox = (topic) => {
    setCheckedItems(prev => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">C++ Roadmap</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
        <ul className="space-y-2">
          {roadmapData.map((topic, index) => (
            <li key={index} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={checkedItems[topic]}
                onChange={() => toggleCheckbox(topic)}
                className="h-4 w-4"
              />
              <label className="text-gray-800 text-sm">{topic}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cpp;
