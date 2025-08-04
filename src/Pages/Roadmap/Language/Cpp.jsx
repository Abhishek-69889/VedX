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
    <div className="min-h-screen bg-gray-100 dark:bg-[#0e0e0e] flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white dark:bg-[#1f1f1f] p-6 rounded-xl shadow space-y-6">
        <h1 className="text-3xl font-bold text-center text-black dark:text-white">
          C++ Roadmap
        </h1>

        <ul className="space-y-3">
          {roadmapData.map((topic, index) => (
            <li key={index} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={checkedItems[topic]}
                onChange={() => toggleCheckbox(topic)}
                className="h-4 w-4 accent-blue-600"
              />
              <label className="text-sm text-gray-800 dark:text-gray-200">
                {topic}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cpp;
