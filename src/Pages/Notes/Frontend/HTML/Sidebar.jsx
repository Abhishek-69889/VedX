import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const topics = [
  'Introduction',
  'Basic Tags',
  'Attributes',
  'Semantic HTML',
  'Forms',
  'Validation',
  'CSS Integration',
  'Entities',
  'Media',
  'HTML5 APIs',
  'Accessibility',
  'Interview Topics',
  'Best Practices',
  'Cheat Sheet',
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button (visible only on small screens) */}
      <div className="md:hidden p-4 flex items-center justify-between bg-white border-b border-gray-200">
        <h2 className="text-lg font-bold">HTML Notes</h2>
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
        <h2 className="text-xl font-bold mb-4 hidden md:block">HTML Notes</h2>
        <ul className="space-y-2">
          {topics.map((topic) => (
            <li key={topic}>
              <a
                href={`#${topic.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-3 py-1 hover:bg-gray-200 rounded"
                onClick={() => setIsOpen(false)} // Auto-close on selection
              >
                {topic}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay (click outside to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
