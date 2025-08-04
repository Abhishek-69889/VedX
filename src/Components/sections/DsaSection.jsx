import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const countQuestionsFromTopics = (topics = []) =>
  topics.reduce(
    (sum, tag) =>
      sum +
      tag.items.reduce((s, sec) => s + (sec.questions?.length || 0), 0),
    0
  );

const dataLoaders = {
  google: () => import("../../Pages/DSAPRACTICE/GOOGLE/Google.json"),
  microsoft: () => import("../../Pages/DSAPRACTICE/Microsoft/Microsoft.json"),
  amazon: () => import("../../Pages/DSAPRACTICE/AMAZON/Amazon.json"),
  tcs: () => import("../../Pages/DSAPRACTICE/TCS/Tcs.json"),
  wipro: () => import("../../Pages/DSAPRACTICE/Wipro/Wipro.json"),
  patterns: () => import("../../Pages/DSAPRACTICE/Patterns/Patterns.json"),
};

const DsaSection = () => {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadAll = async () => {
      const entries = await Promise.all(
        Object.entries(dataLoaders).map(async ([key, loader]) => {
          try {
            const mod = await loader();
            const topics = mod.default ?? mod;
            const total = countQuestionsFromTopics(topics);
            return [key, total];
          } catch (err) {
            console.error(`Error loading ${key} data:`, err);
            return [key, 0];
          }
        })
      );
      if (isMounted) {
        setCounts(Object.fromEntries(entries));
        setLoading(false);
      }
    };

    loadAll();
    return () => {
      isMounted = false;
    };
  }, []);

  const items = [
    { key: "google", title: "Google", path: "/google" },
    { key: "microsoft", title: "Microsoft", path: "/microsoft" },
    { key: "amazon", title: "Amazon", path: "/amazon" },
    { key: "tcs", title: "TCS", path: "/tcs" },
    { key: "wipro", title: "Wipro", path: "/wipro" },
    { key: "patterns", title: "TOP 10 PATTERS FOR FAANG", path: "/patterns" },
  ];

  const getLabel = (key) => {
    if (loading) return "…";
    const n = counts[key] ?? 0;
    return `${n} Q${n === 1 ? "" : "s"}`;
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div id="dsa" className="bg-white dark:bg-[#0e0e0e] py-12">
      <h1 className="text-3xl text-center font-semibold text-gray-900 dark:text-white">
        Company-Specific DSA Prep
      </h1>
      <p className="text-md sm:text-xl lg:text-md font-medium mt-2 mx-3 text-gray-600 dark:text-gray-400 text-center">
        Practice real interview problems from your dream companies.
      </p>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(item.path)}
            className="p-6 bg-[#1A1A1A] rounded-2xl border border-gray-700 shadow-md hover:shadow-lg hover:scale-[1.02] hover:bg-[#1F1F1F] transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2 text-[#00FFFF]">
              {item.title} <span className="text-sm font-semibold mb-2 text-[#336b6b]">{getLabel(item.key)} </span>
            </h2>
            <p className="text-gray-300 text-sm">
              • Boost your prep with expert-selected resources in{" "}
              <span className="font-semibold text-[#00FFFF]">{item.title}</span>.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DsaSection;
