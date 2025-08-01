import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const DsaSection = () => {


  const items = [
    {title: "A to Z DSA", path: "https://dsapractice.netlify.app/" , des:"Solve these questions to master DSA"},
    {title: "Frontend Master Quiz", path: "https://frontendquizzer.netlify.app/" , des:"Solve these questions to test your frontend skills."},
  ];



  return (
    <div id="yt">
      <h1 className="text-3xl text-center mt-12 font-semibold text-gray-900">
        Practice
      </h1>
      {/* <p className="text-md sm:text-xl lg:text-md font-medium mt-2 mx-3 text-gray-600">
        Practice real interview problems from your dream companies.
      </p> */}

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {items.map((item) => (
          <div
            key={item.key}
            onClick={() => window.open(item.path, '_blank')}
            className="p-6 bg-white rounded-xl shadow hover:shadow-md hover:scale-105 hover:bg-blue-50 transition-transform duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-600 flex items-center justify-between">
              <span>{item.title}</span>
            </h2>
            <p className="text-gray-700 text-sm">
              {item.des}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DsaSection;
