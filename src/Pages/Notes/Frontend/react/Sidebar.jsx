import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const topics = [
  { id: 'react-intro', title: 'Introduction to React' },
  { id: 'jsx', title: 'JSX' },
  { id: 'components', title: 'Components (Function & Class)' },
  { id: 'props', title: 'Props' },
  { id: 'state', title: 'State' },
  { id: 'event-handling', title: 'Event Handling' },
  { id: 'conditional-rendering', title: 'Conditional Rendering' },
  { id: 'lists-keys', title: 'Lists and Keys' },
  { id: 'use-effect', title: 'useEffect Hook' },
  { id: 'forms', title: 'Forms in React' },
  { id: 'lifting-state', title: 'Lifting State Up' },
  { id: 'context-api', title: 'Context API' },
  { id: 'custom-hooks', title: 'Custom Hooks' },
  { id: 'react-router', title: 'React Router' },
  { id: 'use-ref', title: 'useRef Hook' },
  { id: 'performance', title: 'Performance Optimization' },
  { id: 'error-boundaries', title: 'Error Boundaries' },
  { id: 'interview-topics', title: 'React Interview Topics' }
];

const SidebarJS = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle button (mobile only) */}
      <div className="md:hidden p-4 flex items-center justify-between bg-white border-b border-gray-200">
        <h2 className="text-lg font-bold">JavaScript Topics</h2>
        <button onClick={toggleSidebar} className="text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 p-4 md:w-64 h-screen overflow-y-auto fixed top-0 z-40 transition-transform duration-300 md:relative md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:block`}
      >
        <h2 className="text-xl font-bold mb-4 hidden md:block">JavaScript Topics</h2>
        <ul className="space-y-2">
          {topics.map((topic) => (
            <li key={topic.id}>
              <a
                href={`#${topic.id}`}
                className="block px-3 py-1 hover:bg-gray-200 rounded"
                onClick={() => setIsOpen(false)} // Close on click (mobile)
              >
                {topic.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default SidebarJS;
