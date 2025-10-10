import React, { useEffect, useState, useMemo } from 'react';
// Import the external JSON file
import roadmapRaw from './GSAP.json'; 

// --- Data Preparation Logic (Generalized for any roadmap structure) ---
const getAllTopics = (data) => {
  const allTopics = [];
  data.phases.forEach(phase => {
    if (phase.topics) {
      allTopics.push(...phase.topics);
    }
  });
  return Array.from(new Set(allTopics));
};

// --- React Component ---

const GSAPRoadmap = () => {
  const storageKey = roadmapRaw.storage_key || 'defaultGSAPCheckboxStates';
  
  // Memoize the list of all topics from the imported JSON
  const allTopics = useMemo(() => getAllTopics(roadmapRaw), []);

  // Load saved state from localStorage or initialize
  const getInitialState = () => {
    const saved = localStorage.getItem(storageKey);
    if (saved) return JSON.parse(saved);
    
    // Initialize state with all topics set to false
    return allTopics.reduce((acc, topic) => {
      acc[topic] = false;
      return acc;
    }, {});
  };

  const [checkedItems, setCheckedItems] = useState(getInitialState);

  // Save to localStorage whenever checkedItems changes
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(checkedItems));
  }, [checkedItems]);

  // Function to toggle the checkbox state
  const toggleCheckbox = (topicKey) => {
    setCheckedItems(prev => ({
      ...prev,
      [topicKey]: !prev[topicKey]
    }));
  };

  // Helper function to render a list of topics
  const renderTopics = (topics) => (
    <ul className="space-y-2 list-none p-0">
      {topics.map((topic, index) => {
        const topicKey = topic; // The topic string itself is the key

        return (
          <li key={index} className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={checkedItems[topicKey] || false}
              onChange={() => toggleCheckbox(topicKey)}
              // Using a lively green color theme typical for GSAP
              className="mt-1 h-4 w-4 accent-green-600 dark:accent-lime-400 flex-shrink-0" 
            />
            <label 
              className={`text-base text-gray-800 dark:text-gray-200 cursor-pointer ${checkedItems[topicKey] ? 'line-through opacity-60' : ''}`}
              onClick={() => toggleCheckbox(topicKey)}
            >
              {topicKey}
            </label>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="min-h-screen dark:bg-[#0e0e0e] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl dark:bg-[#1f1f1f] p-8 rounded-xl shadow-2xl space-y-8 border border-[#2c2c2c]">
        

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-black dark:text-lime-400 border-b-2 border-lime-400 pb-3">
          {roadmapRaw.roadmap_title}
        </h1>

        {/* Phases Mapping */}
        {roadmapRaw.phases.map((phase, phaseIndex) => (
          <div key={phaseIndex} className="bg-[#2a2a2a] p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-semibold dark:text-white border-l-4 border-lime-400 pl-3">
              {phase.phase_name}
            </h2>
            <p className="text-sm italic dark:text-gray-400 ml-4">
              Focus: {phase.focus}
            </p>
            
            {/* Topics List */}
            {phase.topics && (
              <div className="ml-4">
                {renderTopics(phase.topics)}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default GSAPRoadmap;