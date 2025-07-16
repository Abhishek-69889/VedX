import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// Mapping readable titles to section IDs
const topics = [
  { "id": "basics", "title": "Basics of C++" },
  { "id": "data-types", "title": "Data Types & Variables" },
  { "id": "operators", "title": "Operators" },
  { "id": "control-flow", "title": "Control Flow (if, loops, switch)" },
  { "id": "functions", "title": "Functions" },

  { "id": "arrays-strings", "title": "Arrays & Strings" },
  { "id": "pointers", "title": "Pointers" },
  { "id": "dynamic-memory", "title": "Dynamic Memory Allocation" },
  { "id": "structures-unions", "title": "Structures and Unions" },
  { "id": "oops", "title": "OOP in C++ (Classes and Objects)" },

  { "id": "inheritance", "title": "Inheritance" },
  { "id": "polymorphism", "title": "Polymorphism" },
  { "id": "operator-overloading", "title": "Operator Overloading" },
  { "id": "exception-handling", "title": "Exception Handling" },
  { "id": "file-handling", "title": "File Handling" },

  { "id": "stl-containers", "title": "STL - Containers" },
  { "id": "stl-iterators-algorithms", "title": "STL - Iterators & Algorithms" },
  { "id": "templates", "title": "Templates (Function & Class)" },

  { "id": "cpp-modern", "title": "Modern C++ Features (C++17/20)" },
  { "id": "smart-pointers", "title": "Smart Pointers" },
  { "id": "multithreading", "title": "Multithreading" },
  { "id": "namespaces", "title": "Namespaces" },
  { "id": "preprocessor", "title": "Preprocessor Directives" }
]


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
