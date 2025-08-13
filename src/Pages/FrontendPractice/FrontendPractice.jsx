import React, { useState } from "react";
import roadmapData from "./RoadmapData.json"; // Your JSON file

export default function FrontendPractice() {
  const [completed, setCompleted] = useState([]);

  const handleCheckboxChange = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#121212",
        color: "#f1f1f1",
        minHeight: "100vh",
      }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center bg-white/10 p-8 rounded-xl">
        <span className="text-white/50">Frontend </span>Projects 
      </h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "1fr", // ✅ Single column
        }}
      >
        {roadmapData.map((stage) => (
          <div
            key={stage.id}
            style={{
              backgroundColor: "#1e1e1e",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            <h3 style={{ margin: "0 0 5px", color: "#00e676" , fontSize:"25px" }}>
              {stage.title}
            </h3>
            <p style={{ color: "#ccc", margin: "0 0 15px" }}>
              {stage.description}
            </p>

            {stage.projects.map((project) => (
              <div key={project.id} style={{ marginBottom: "10px" }}>
                <label
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={completed.includes(project.id)}
                    onChange={() => handleCheckboxChange(project.id)}
                    style={{
                      marginRight: "10px",
                      accentColor: "#00e676",
                      transform: "scale(1.2)",
                    }}
                  />
                  <span
                    style={{
                      textDecoration: completed.includes(project.id)
                        ? "line-through"
                        : "none",
                      fontWeight: "bold",
                      flex: 1,
                    }}
                  >
                    {project.title}
                  </span>
                  <span
                    style={{
                      marginLeft: "8px",
                      fontSize: "12px",
                      color: "#999",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ({project.difficulty})
                  </span>
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
