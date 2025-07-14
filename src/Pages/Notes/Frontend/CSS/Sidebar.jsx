import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// Mapping readable titles to section IDs
const topics = [
  { id: 'introduction', title: 'Introduction to CSS' },
  { id: 'selectors', title: 'CSS Selectors' },
  { id: 'specificity', title: 'Specificity and Inheritance' },
  { id: 'box-model', title: 'Box Model' },
  { id: 'display', title: 'Display Property' },
  { id: 'positioning', title: 'Positioning (static, relative, absolute, fixed, sticky)' },
  { id: 'z-index', title: 'Z-Index' },
  { id: 'units', title: 'Units in CSS (px, %, em, rem, vw, vh)' },
  { id: 'typography', title: 'Typography' },
  { id: 'colors', title: 'Colors, Gradients & Transparency' },
  { id: 'backgrounds', title: 'Backgrounds and Borders' },
  { id: 'flexbox', title: 'Flexbox' },
  { id: 'grid', title: 'CSS Grid' },
  { id: 'media-queries', title: 'Responsive Design & Media Queries' },
  { id: 'pseudo-classes', title: 'Pseudo-classes (:hover, :nth-child)' },
  { id: 'pseudo-elements', title: 'Pseudo-elements (::before, ::after)' },
  { id: 'transitions', title: 'Transitions & Animations' },
  { id: 'transform', title: 'Transform (scale, rotate, translate)' },
  { id: 'variables', title: 'CSS Variables (Custom Properties)' },
  { id: 'important', title: '!important keyword' },
  { id: 'combinators', title: 'Combinators (>, +, ~, space)' },
  { id: 'calc', title: 'calc(), clamp(), and min()/max() functions' },
  { id: 'shorthand', title: 'Shorthand Properties' },
  { id: 'overflow', title: 'Overflow Handling (visible, hidden, scroll, auto)' },
  { id: 'visibility', title: 'Visibility vs Display vs Opacity' },
  { id: 'resets', title: 'CSS Reset vs Normalize.css' },
  { id: 'best-practices', title: 'Best Practices in CSS' },
  { id: 'preprocessors', title: 'CSS Preprocessors (SASS/SCSS)' },
  { id: 'frameworks', title: 'CSS Frameworks (Tailwind, Bootstrap)' },
  { id: 'interview-questions', title: 'CSS Interview Topics & Common Questions' }
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button (mobile only) */}
      <div className="md:hidden p-4 flex items-center justify-between bg-white border-b border-gray-200">
        <h2 className="text-lg font-bold">CSS Topics</h2>
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
        <h2 className="text-xl font-bold mb-4 hidden md:block">CSS Topics</h2>
        <ul className="space-y-2">
          {topics.map((topic) => (
            <li key={topic.id}>
              <a
                href={`#${topic.id}`}
                className="block px-3 py-1 hover:bg-gray-200 rounded"
                onClick={() => setIsOpen(false)} // Auto-close on mobile
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

export default Sidebar;
