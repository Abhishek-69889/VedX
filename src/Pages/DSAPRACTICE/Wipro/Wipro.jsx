import React, { useState } from "react";
import dsaTopics from "./Wipro.json"; 

const Wipro = () => {
  const [openTag, setOpenTag] = useState(null);
  const [openDifficulty, setOpenDifficulty] = useState({});
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const toggleTag = (index) => {
    setOpenTag(openTag === index ? null : index);
  };

  const toggleDifficulty = (tagIndex, difficulty) => {
    setOpenDifficulty((prev) => ({
      ...prev,
      [tagIndex]: prev[tagIndex] === difficulty ? null : difficulty
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center bg-black/90 p-20 text-white rounded-xl"><span className="text-white/50">Wipro </span>DSA Practice Questions</h1>

      {/* Difficulty Filter */}
      <div className="flex justify-center mb-4 space-x-4">
        {["All", "Easy", "Medium", "Hard"].map((level) => (
          <button
            key={level}
            onClick={() => setDifficultyFilter(level)}
            className={`px-4 py-2 rounded-lg border font-semibold ${
              difficultyFilter === level ? "bg-blue-500 text-white" : "bg-white text-gray-700"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Tags */}
      <div className="space-y-4">
        {dsaTopics.map((tagData, tagIndex) => (
          <div key={tagIndex} className="bg-white shadow rounded-lg">
            <div
              onClick={() => toggleTag(tagIndex)}
              className="cursor-pointer px-4 py-3 flex justify-between items-center bg-blue-100"
            >
              <span className="text-lg font-semibold">{tagData.tag}</span>
              <span>{openTag === tagIndex ? "▲" : "▼"}</span>
            </div>

            {openTag === tagIndex && (
              <div className="p-4 space-y-4">
                {tagData.items
                  .filter((section) => difficultyFilter === "All" || section.difficulty === difficultyFilter)
                  .map((section, diffIndex) => (
                    <div key={diffIndex} className="border rounded-lg">
                      <div
                        onClick={() => toggleDifficulty(tagIndex, section.difficulty)}
                        className="cursor-pointer px-3 py-2 bg-gray-100 flex justify-between"
                      >
                        <span className="font-medium">{section.difficulty}</span>
                        <span>{openDifficulty[tagIndex] === section.difficulty ? "▲" : "▼"}</span>
                      </div>

                      {openDifficulty[tagIndex] === section.difficulty && (
                        <ul className="p-3 space-y-2">
                          {section.questions.map((q) => (
                            <li key={q.id} className="hover:text-blue-600">
                              <a href={q.link} target="_blank" rel="noopener noreferrer" className="text-sm">
                                {q.id}. {q.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
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

export default Wipro;
