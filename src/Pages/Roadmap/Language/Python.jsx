import React, { useEffect, useState, useMemo } from 'react';
// 1. IMPORT THE EXTERNAL JSON FILE
import roadmapRaw from './PythonData.json';

// --- Data Preparation Logic ---

// Flatten the entire roadmap into a simple array of all unique topics for state management keys.
const getAllTopics = (data) => {
  const allTopics = [];
  data.stages.forEach(stage => {
    // Add topics from standard stages
    if (stage.topics) {
      allTopics.push(...stage.topics);
    }
    // Add topics from specialization sub-paths
    if (stage.sub_paths) {
      stage.sub_paths.forEach(path => {
        // Create a composite key for specialization topics: "Path: Technology"
        allTopics.push(...path.technologies.map(tech => `${path.path}: ${tech}`));
      });
    }
  });
  // Use Set to ensure unique keys, then convert back to Array
  return Array.from(new Set(allTopics));
};

// --- React Component ---

const PythonRoadmap = () => {
  // Use a specific key for Python roadmap state
  const storageKey = 'pythonRoadmapCheckboxStates';
  
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

  // Use the unique topic string as the key to toggle the state
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
        // topicKey will be the topic string itself or the composite key for specializations
        const topicKey = topic; 
        
        return (
          <li key={index} className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={checkedItems[topicKey] || false}
              onChange={() => toggleCheckbox(topicKey)}
              className="mt-1 h-4 w-4 accent-blue-600 dark:accent-cyan-400 flex-shrink-0"
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
        <h1 className="text-4xl font-extrabold text-center text-black dark:text-cyan-400 border-b-2 border-cyan-400 pb-3">
          {roadmapRaw.roadmap_title}
        </h1>

        {/* Stages Mapping */}
        {roadmapRaw.stages.map((stage, stageIndex) => (
          <div key={stageIndex} className="bg-[#2a2a2a] p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-semibold dark:text-white border-l-4 border-cyan-400 pl-3">
              {stage.stage_name}
            </h2>
            <p className="text-sm italic dark:text-gray-400 ml-4">
              Focus: {stage.focus}
            </p>
            
            {/* Standard Topics List */}
            {stage.topics && (
              <div className="ml-4">
                {renderTopics(stage.topics)}
              </div>
            )}
            
            {/* Specialization Sub-Paths */}
            {stage.sub_paths && (
              <div className="ml-4 space-y-4 pt-2">
                <h3 className="text-xl font-medium dark:text-gray-100">Specialization Paths:</h3>
                {stage.sub_paths.map((path, pathIndex) => (
                  <div key={pathIndex} className="pl-4 border-l-2 border-gray-600">
                    <h4 className="text-lg font-semibold dark:text-cyan-300 mb-2">{path.path}</h4>
                    {/* Render technologies, using a composite key: "Path: Technology" */}
                    {renderTopics(path.technologies.map(tech => `${path.path}: ${tech}`))}
                  </div>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default PythonRoadmap;