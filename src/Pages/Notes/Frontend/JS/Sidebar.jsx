import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const topics = [
  // Part 1: Basics
  { id: 'introduction', title: 'Introduction to JavaScript' },
  { id: 'variables', title: 'Variables (var, let, const)' },
  { id: 'data-types', title: 'Data Types' },
  { id: 'operators', title: 'Operators' },
  { id: 'type-conversion', title: 'Type Conversion & Coercion' },
  { id: 'control-structures', title: 'Control Structures (if, switch)' },
  { id: 'loops', title: 'Loops (for, while, for...of)' },
  { id: 'functions', title: 'Functions & Function Expressions' },
  { id: 'scope', title: 'Scope (Global, Local, Block)' },
  { id: 'hoisting', title: 'Hoisting' },

  // Part 2: Arrays & ES6+
  { id: 'arrays', title: 'Arrays' },
  { id: 'objects', title: 'Objects' },
  { id: 'object-methods', title: 'Object Methods & `this`' },
  { id: 'destructuring', title: 'Destructuring' },
  { id: 'spread-rest', title: 'Spread & Rest Operators' },
  { id: 'template-literals', title: 'Template Literals' },
  { id: 'arrow-functions', title: 'Arrow Functions' },
  { id: 'default-parameters', title: 'Default Parameters' },
  { id: 'optional-chaining', title: 'Optional Chaining (?.)' },
  { id: 'nullish-coalescing', title: 'Nullish Coalescing (??)' },

  // Part 3: Advanced
  { id: 'closures', title: 'Closures' },
  { id: 'callbacks', title: 'Callbacks' },
  { id: 'promises', title: 'Promises' },
  { id: 'async-await', title: 'Async/Await' },
  { id: 'event-loop', title: 'Event Loop' },
  { id: 'execution-context', title: 'Execution Context & Call Stack' },
  { id: 'scope-chain', title: 'Scope Chain & Lexical Environment' },
  { id: 'advanced-hoisting', title: 'Advanced Hoisting' },
  { id: 'strict-mode', title: 'Strict Mode' },
  { id: 'garbage-collection', title: 'Garbage Collection' }
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
