import React, { useMemo, useState } from "react";
import dsaTopics from "./Google.json"; // ✅ Import the JSON file

/* ---------- Counting helpers ---------- */
const countAll = (topics) =>
  topics.reduce(
    (sum, tag) =>
      sum + tag.items.reduce((s, sec) => s + (sec.questions?.length || 0), 0),
    0
  );

const countByDifficulty = (topics) => {
  const counts = { Easy: 0, Medium: 0, Hard: 0 };
  topics.forEach((tag) => {
    tag.items.forEach((sec) => {
      const n = sec.questions?.length || 0;
      if (counts[sec.difficulty] == null) counts[sec.difficulty] = 0; // in case new labels appear
      counts[sec.difficulty] += n;
    });
  });
  return counts;
};

const countByTag = (topics) => {
  const counts = {};
  topics.forEach((tag) => {
    counts[tag.tag] = tag.items.reduce(
      (s, sec) => s + (sec.questions?.length || 0),
      0
    );
  });
  return counts;
};

const Google = () => {
  const [openTag, setOpenTag] = useState(null);
  const [openDifficulty, setOpenDifficulty] = useState({});
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  /* ---------- Memoized counts ---------- */
  const totalQuestions = useMemo(() => countAll(dsaTopics), []);
  const diffCounts = useMemo(() => countByDifficulty(dsaTopics), []);
  const tagCounts = useMemo(() => countByTag(dsaTopics), []);

  /* ---------- UI handlers ---------- */
  const toggleTag = (index) => {
    setOpenTag(openTag === index ? null : index);
  };

  const toggleDifficulty = (tagIndex, difficulty) => {
    setOpenDifficulty((prev) => ({
      ...prev,
      [tagIndex]: prev[tagIndex] === difficulty ? null : difficulty,
    }));
  };

  const getDiffLabel = (level) => {
    if (level === "All") return `All (${totalQuestions})`;
    return `${level} (${diffCounts[level] ?? 0})`;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center bg-black/90 p-20 text-white rounded-xl">
        <span className="text-white/50">GOOGLE </span>DSA Practice Questions
        <div className="mt-2 text-sm text-white/70">
          Total: {totalQuestions} Question{totalQuestions === 1 ? "" : "s"}
        </div>
      </h1>

      {/* Difficulty Filter */}
      <div className="flex flex-wrap justify-center mb-4 gap-2">
        {["All", "Easy", "Medium", "Hard"].map((level) => (
          <button
            key={level}
            onClick={() => setDifficultyFilter(level)}
            className={`px-4 py-2 rounded-lg border font-semibold ${
              difficultyFilter === level
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {getDiffLabel(level)}
          </button>
        ))}
      </div>

      {/* Tags */}
      <div className="space-y-4">
        {dsaTopics.map((tagData, tagIndex) => {
          const tagTotal = tagCounts[tagData.tag] ?? 0;
          return (
            <div key={tagIndex} className="bg-white shadow rounded-lg">
              <div
                onClick={() => toggleTag(tagIndex)}
                className="cursor-pointer px-4 py-3 flex justify-between items-center bg-blue-100"
              >
                <span className="text-lg font-semibold">
                  {tagData.tag} ({tagTotal})
                </span>
                <span>{openTag === tagIndex ? "▲" : "▼"}</span>
              </div>

              {openTag === tagIndex && (
                <div className="p-4 space-y-4">
                  {tagData.items
                    .filter(
                      (section) =>
                        difficultyFilter === "All" ||
                        section.difficulty === difficultyFilter
                    )
                    .map((section, diffIndex) => {
                      const n = section.questions?.length || 0;
                      return (
                        <div key={diffIndex} className="border rounded-lg">
                          <div
                            onClick={() =>
                              toggleDifficulty(tagIndex, section.difficulty)
                            }
                            className="cursor-pointer px-3 py-2 bg-gray-100 flex justify-between items-center"
                          >
                            <span className="font-medium">
                              {section.difficulty} ({n})
                            </span>
                            <span>
                              {openDifficulty[tagIndex] === section.difficulty
                                ? "▲"
                                : "▼"}
                            </span>
                          </div>

                          {openDifficulty[tagIndex] === section.difficulty && (
                            <ul className="p-3 space-y-2">
                              {section.questions.map((q) => (
                                <li key={q.id} className="hover:text-blue-600">
                                  <a
                                    href={q.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm"
                                  >
                                    {q.id}. {q.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Google;
