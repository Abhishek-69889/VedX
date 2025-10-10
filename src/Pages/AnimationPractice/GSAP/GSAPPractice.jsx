import React, { useEffect, useState, useMemo } from 'react';
// ASSUME: GSAPConsolidatedTasks.json is in the same directory
import roadmapRaw from './GSAPPractice.json'; 

// --- Data Preparation Logic ---
// Flattens all tasks into a single array for state key initialization.
// Key is built from phaseName + taskID (or taskName for mini-projects)
const getAllTaskKeys = (data) => {
  const allKeys = [];
  data.phases.forEach(phase => {
    phase.tasks.forEach(task => {
      // Create a unique key for each task/project
      const taskKey = task.topic 
        ? `${phase.phase_name}-${task.topic}-${task.id}` 
        : `${phase.phase_name}-${task.mini_project || task.final_project}`;
      allKeys.push(taskKey);
    });
  });
  return Array.from(new Set(allKeys));
};

// --- React Component ---

const GSAPPractice = () => {
  const storageKey = roadmapRaw.storage_key || 'defaultGSAPPracticeTasksStates';
  
  // Memoize the list of all unique task keys
  const allTaskKeys = useMemo(() => getAllTaskKeys(roadmapRaw), []);

  // Load saved state from localStorage or initialize
  const getInitialState = () => {
    const saved = localStorage.getItem(storageKey);
    if (saved) return JSON.parse(saved);
    
    // Initialize state with all task keys set to false
    return allTaskKeys.reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
  };

  const [checkedItems, setCheckedItems] = useState(getInitialState);

  // Save to localStorage whenever checkedItems changes
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(checkedItems));
  }, [checkedItems]);

  // Function to toggle the checkbox state
  const toggleCheckbox = (key) => {
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Helper function to render tasks
  const renderTasks = (phase, tasks) => (
    <ul className="space-y-4 list-none p-0">
      {tasks.map((task, index) => {
        // Determine a unique key for tracking state
        const taskKey = task.topic 
          ? `${phase.phase_name}-${task.topic}-${task.id}`
          : `${phase.phase_name}-${task.mini_project || task.final_project}`;
        
        // Determine if it's a regular task, mini-project, or final project
        const isProject = task.mini_project || task.final_project;
        const projectType = task.mini_project ? 'Mini Project' : (task.final_project ? 'Final Project' : 'Task');
        const content = task.task || task.mini_project || task.final_project;
        const topicLabel = task.topic ? `**${task.topic}:** ` : '';

        return (
          <li 
            key={index} 
            className={`flex items-start space-x-3 p-3 rounded-md ${isProject ? 'bg-[#3a3a3a] border border-lime-600' : 'bg-[#2a2a2a]'}`}
          >
            <input
              type="checkbox"
              checked={checkedItems[taskKey] || false}
              onChange={() => toggleCheckbox(taskKey)}
              className="mt-1 h-5 w-5 accent-green-600 dark:accent-lime-400 flex-shrink-0" 
            />
            <div className="flex-1">
              <span className={`text-xs font-bold uppercase ${isProject ? 'text-lime-400' : 'text-gray-400'}`}>
                {projectType}
              </span>
              <label 
                className={`block text-base dark:text-gray-200 cursor-pointer ${checkedItems[taskKey] ? 'line-through opacity-60' : ''}`}
                onClick={() => toggleCheckbox(taskKey)}
              >
                {/* Note: Using dangerouslySetInnerHTML to render markdown-like **bold** from the task strings */}
                <div dangerouslySetInnerHTML={{ __html: `${topicLabel} ${content}` }} />
              </label>
            </div>
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
          {roadmapRaw.practice_roadmap_title}
        </h1>

        {/* Phases Mapping */}
        {roadmapRaw.phases.map((phase, phaseIndex) => (
          <div key={phaseIndex} className="bg-[#2a2a2a] p-6 rounded-lg shadow-md space-y-4 border border-[#3c3c3c]">
            <h2 className="text-2xl font-semibold dark:text-white border-l-4 border-lime-400 pl-3">
              {phase.phase_name}
            </h2>
            <p className="text-sm italic dark:text-gray-400 ml-4 mb-4">
              Goal: {phase.goal}
            </p>
            
            {/* Tasks List */}
            {phase.tasks && (
              <div className="ml-4">
                {renderTasks(phase, phase.tasks)}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default GSAPPractice;