import React, { useState } from "react";
import dsaTopics from "./Patterns.json";

const Pattern = () => {
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
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center bg-white/10 p-8 rounded-xl">
        <span className="text-white/50">Top 10 pattern wise </span>DSA Practice Questions
      </h1>

      {/* Difficulty Filter */}
      <div className="flex justify-center mb-6 space-x-4">
        {["All", "Easy", "Medium", "Hard"].map((level) => (
          <button
            key={level}
            onClick={() => setDifficultyFilter(level)}
            className={`px-4 py-2 rounded-lg border font-semibold transition-all duration-200 ${
              difficultyFilter === level
                ? "bg-blue-600 text-white border-blue-500"
                : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Tags */}
      <div className="space-y-4">
        {dsaTopics.map((tagData, tagIndex) => (
          <div key={tagIndex} className="bg-gray-900 rounded-lg shadow-lg">
            <div
              onClick={() => toggleTag(tagIndex)}
              className="cursor-pointer px-4 py-3 flex justify-between items-center bg-white/10 hover:bg-white/20 rounded-t-lg"
            >
              <span className="text-lg font-semibold">{tagData.tag}</span>
              <span>{openTag === tagIndex ? "▲" : "▼"}</span>
            </div>

            {openTag === tagIndex && (
              <div className="p-4 space-y-4">
                {tagData.items
                  .filter((section) => difficultyFilter === "All" || section.difficulty === difficultyFilter)
                  .map((section, diffIndex) => (
                    <div key={diffIndex} className="border border-white/20 rounded-lg">
                      <div
                        onClick={() => toggleDifficulty(tagIndex, section.difficulty)}
                        className="cursor-pointer px-3 py-2 bg-white/5 flex justify-between items-center rounded-t-lg"
                      >
                        <span className="font-medium text-white">{section.difficulty}</span>
                        <span>{openDifficulty[tagIndex] === section.difficulty ? "▲" : "▼"}</span>
                      </div>

                      {openDifficulty[tagIndex] === section.difficulty && (
                        <ul className="p-3 space-y-2 bg-white/5 rounded-b-lg">
                          {section.questions.map((q) => (
                            <li key={q.id}>
                              <a
                                href={q.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm hover:text-blue-400 transition-colors"
                              >
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

export default Pattern;
