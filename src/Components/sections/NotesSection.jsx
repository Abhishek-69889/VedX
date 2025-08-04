import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const frontendSubtopics = ['HTML', 'CSS', 'JavaScript', 'React'];

const NotesSection = ({ onCardClick }) => {
  const items = ['Frontend', 'C++'];
  const [showFrontendPopup, setShowFrontendPopup] = useState(false);
  const navigate = useNavigate();

  const openFrontendPopup = () => setShowFrontendPopup(true);
  const closeFrontendPopup = () => setShowFrontendPopup(false);

  const handleCardClickInternal = (sectionId, title) => {
    if (sectionId === 'notes' && title === 'Frontend') {
      openFrontendPopup();
    } else if (sectionId === 'notes' && title === 'DSA') {
      navigate('/dsa-notes');
    } else if (sectionId === 'notes' && title === 'Backend') {
      navigate('/backend-notes');
    } else if (sectionId === 'notes' && title === 'Python') {
      navigate('/python-notes');
    } else if (sectionId === 'notes' && title === 'C++') {
      navigate('/cpp-notes');
    } else {
      onCardClick(sectionId, title);
    }
  };

  return (
    <div id="note" className="bg-[#0D0D0D] ] py-10">
      <h1 className="text-3xl sm:text-2xl text-center font-semibold tracking-tight text-white">
        Instant Revision Notes
      </h1>
      <p className="text-md sm:text-xl lg:text-md font-medium mt-2 mx-3 text-gray-400 text-center">
        Revise every concept quickly with structured and searchable notes.
      </p>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
        {items.map((title, index) => (
          <div
            key={index}
            onClick={() => handleCardClickInternal('notes', title)}
            className="p-6 bg-[#1A1A1A] rounded-2xl border border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.02] hover:bg-[#1F1F1F] transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2 text-[#00FFFF]">{title}</h2>
            <p className="text-gray-300 text-sm">
              Boost your prep with expert-selected resources in{' '}
              <span className="font-semibold text-[#00FFFF]">{title}</span>.
            </p>
          </div>
        ))}
      </section>

      {showFrontendPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg w-[90%] max-w-md border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#00FFFF]">Frontend Notes</h3>
              <button
                onClick={closeFrontendPopup}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {frontendSubtopics.map((topic, idx) => (
                <a
                  key={idx}
                  href={`/${topic.toLowerCase()}-notes`}
                  className="bg-[#2A2A2A] hover:bg-[#333333] text-[#00FFFF] border border-gray-600 font-medium py-3 px-4 rounded-xl text-center shadow-sm transition-all"
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
