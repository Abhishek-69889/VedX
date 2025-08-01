import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const frontendSubtopics = ['HTML', 'CSS', 'JavaScript', 'React'];

const NotesSection = ({ onCardClick }) => {
  const items = [
    // 'DSA', 
    'Frontend', 
    // 'Backend', 
    // 'Python', 
    'C++'
  ];
  const [showFrontendPopup, setShowFrontendPopup] = useState(false);
  const navigate = useNavigate();

  const openFrontendPopup = () => setShowFrontendPopup(true);
  const closeFrontendPopup = () => setShowFrontendPopup(false);

  const handleCardClickInternal = (sectionId, title) => {
    if (sectionId === 'notes' && title === 'Frontend') {
      openFrontendPopup();
    }else if (sectionId === 'notes' && title === 'DSA') {
    navigate('/dsa-notes');
    }else if (sectionId === 'notes' && title === 'Backend') {
    navigate('/backend-notes');
    }else if (sectionId === 'notes' && title === 'Python') {
    navigate('/python-notes');
    }else if (sectionId === 'notes' && title === 'C++') {
    navigate('/cpp-notes');
    }
     else {
      onCardClick(sectionId, title);
    }
  };

  return (
    <div id="note">
      <h1 className="text-3xl sm:text-2xl text-center mt-12 font-semibold tracking-tight text-gray-900">
        Instant Revision Notes
      </h1>
      <p className="text-md sm:text-xl lg:text-md font-medium mt-2 mx-3 text-gray-600">
        Revise every concept quickly with structured and searchable notes.
      </p>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {items.map((title, index) => (
          <div
            key={index}
            onClick={() => handleCardClickInternal('notes', title)}
            className="p-6 bg-white rounded-xl shadow hover:shadow-md hover:scale-105 hover:bg-blue-50 transition-transform duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-600">{title}</h2>
            <p className="text-gray-700 text-sm">
              Boost your prep with expert-selected resources in{' '}
              <span className="font-semibold text-blue-600">{title}</span>.
            </p>
          </div>
        ))}
      </section>

      {showFrontendPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-blue-700">Frontend Notes</h3>
              <button
                onClick={closeFrontendPopup}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {frontendSubtopics.map((topic, idx) => (
                <a
                  key={idx}
                  href={`/${topic.toLowerCase()}-notes`}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-3 px-4 rounded-lg text-center shadow-sm transition-all"
                >
                  {topic}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesSection;
