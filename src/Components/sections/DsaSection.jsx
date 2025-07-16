import React from "react";
import { useNavigate } from "react-router-dom";

const DsaSection = () => {
  const navigate = useNavigate();

  const items = [
    { title: "Google", path: "/google" },
    { title: "Microsoft", path: "/microsoft" },
    { title: "Amazon", path: "/amazon" },
    { title: "TCS", path: "/tcs" },
    { title: "Wipro", path: "/wipro" },
    { title: "TOP 10 PATTERS FOR FAANG", path: "/patterns" },
  ];

  return (
    <div id="dsa">
      <h1 className="text-3xl text-center mt-12 font-semibold text-gray-900">
        Company-Specific DSA Prep
      </h1>
      <p className="text-md sm:text-xl lg:text-md font-medium mt-2 mx-3 text-gray-600">
        Practice real interview problems from your dream companies.
      </p>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="p-6 bg-white rounded-xl shadow hover:shadow-md hover:scale-105 hover:bg-blue-50 transition-transform duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              {item.title}
            </h2>
            <p className="text-gray-700 text-sm">
              Boost your prep with expert-selected resources for{" "}
              <span className="font-semibold text-blue-600">{item.title}</span> interview.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DsaSection;


