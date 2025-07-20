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
  const [counts, setCounts] = useState({});          // {google: 65, amazon: 42, ...}
  const [loading, setLoading] = useState(true);

  // Load all counts once (on mount)
  useEffect(() => {
    let isMounted = true;

    const loadAll = async () => {
      const entries = await Promise.all(
        Object.entries(dataLoaders).map(async ([key, loader]) => {
          try {
            const mod = await loader();                 // JSON default export
            const topics = mod.default ?? mod;          // handle both default & named
            const total = countQuestionsFromTopics(topics);
            return [key, total];
          } catch (err) {
            console.error(`Error loading ${key} data:`, err);
            return [key, 0];                            // fallback
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

  return (
    <div id="dsa">
      <h1 className="text-3xl text-center mt-12 font-semibold text-gray-900">
        Company-Specific DSA Prep
      </h1>
      <p className="text-md sm:text-xl lg:text-md font-medium mt-2 mx-3 text-gray-600">
        Practice real interview problems from your dream companies.
      </p>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {items.map((item) => (
          <div
            key={item.key}
            onClick={() => navigate(item.path)}
            className="p-6 bg-white rounded-xl shadow hover:shadow-md hover:scale-105 hover:bg-blue-50 transition-transform duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-600 flex items-center justify-between">
              <span>{item.title}</span>
              <span className="ml-2 inline-block text-xs font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full">
                {getLabel(item.key)}
              </span>
            </h2>
            <p className="text-gray-700 text-sm">
              Boost your prep with expert-selected resources for{" "}
              <span className="font-semibold text-blue-600">{item.title}</span>{" "}
              interview.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DsaSection;
