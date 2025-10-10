import React from "react";
import { useNavigate } from "react-router-dom";

const DsaSection = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: "A to Z DSA",
      path: "https://dsapractice.netlify.app/",
      des: "Solve these questions to master DSA",
      external: true
    },
    {
      title: "Frontend Master Quiz",
      path: "https://frontendquizzer.netlify.app/",
      des: "Solve these questions to test your frontend skills.",
      external: true
    },
    {
      title: "Frontend Practice",
      path: "/FrontendPractice",
      des: "Practice frontend step by step to master it and become pro in frontend.",
      external: false
    },
    {
      title: "C++ Practice",
      path: "/cpp",
      des: "Practice c++ step by step to master it and become pro in CPP.",
      external: false
    },
    {
      title: "GSAP Task",
      path: "/gsappractice",
      des: "Practice GSAP by task to master it and become pro in GSAP.",
      external: false
    }
  ];

  const handleCardClick = (item) => {
    if (item.external) {
      window.location.href = item.path; // same tab
    } else {
      navigate(item.path); // SPA internal navigation
    }
  };

  return (
    <div id="yt">
      <h1 className="text-3xl text-center mt-12 font-semibold text-white">
        Practice
      </h1>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(item)}
            className="p-6 bg-[#1A1A1A] rounded-2xl border border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.02] hover:bg-[#1F1F1F] transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2 text-[#00FFFF]">
              {item.title}
            </h2>
            <p className="text-gray-300 text-sm">
              {item.des} •{" "}
              <span className="font-semibold text-[#00FFFF]">{item.title}</span>
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DsaSection;
