import React from "react";

// Usage:
// 1) Put your PDFs in /public/downloads on your site (e.g., /public/downloads/cpp-conditional-practice.pdf)
// 2) Update the `resources` array below with topic name and file path.
// 3) Drop <CppPracticeSheet /> into any page.

const resources = [
  {
    topic: "Conditional Statements – Practice Set",
    href: "../../../public/downloads/cpp_conditional_practice_questions.pdf",
    size: "PDF",
  },
//   {
//     topic: "If / Else Ladder – Cheatsheet",
//     href: "/downloads/cpp-if-else-cheatsheet.pdf",
//     size: "PDF",
//   },
//   {
//     topic: "Switch Statement – Quick Guide",
//     href: "/downloads/cpp-switch-guide.pdf",
//     size: "PDF",
//   },
];

export default function CPP() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0f17] to-[#0a0a0a] text-gray-100 py-12 px-5">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">CPP Practice Sheet</h1>
          <p className="text-sm text-gray-400 mt-2">
            Hand-picked resources to master conditional statements in C++.
          </p>
        </header>

        {/* Card */}
        <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 md:p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-semibold">Topics & Downloads</h2>
            <span className="text-xs md:text-sm text-gray-400">Dark theme • Download ready</span>
          </div>

          <ul className="divide-y divide-white/10">
            {resources.map((res, i) => (
              <li key={i} className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-start gap-3">
                  {/* File Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mt-0.5 text-gray-300">
                    <path d="M14.59 2.59A2 2 0 0 0 13.17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.41l-3.82-3.83Z"/>
                    <path d="M13 2v6a2 2 0 0 0 2 2h6"/>
                  </svg>

                  <div>
                    <p className="font-medium leading-tight">{res.topic}</p>
                    <p className="text-xs text-gray-400">{res.size} • Updated {new Date().getFullYear()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={res.href}
                    download
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                  >
                    {/* Download Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                      <path d="M12 3v12" strokeLinecap="round"/>
                      <path d="m7 10 5 5 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 21h14" strokeLinecap="round"/>
                    </svg>
                    Download
                  </a>
                  <a
                    href={res.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-transparent px-3 py-2 text-sm font-medium hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
                  >
                    {/* Eye Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    Preview
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer note */}
        {/* <p className="text-xs text-gray-500 mt-5">
          Tip: Place your files in <code className="px-1 rounded bg-white/10">/public/downloads</code> so these links work instantly.
        </p> */}
      </div>
    </main>
  );
}
