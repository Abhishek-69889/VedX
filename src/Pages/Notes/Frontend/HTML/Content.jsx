import React from 'react';
import Sidebar from './Sidebar';

const sections = [
    {
        id: "introduction",
        title: "Introduction",
        content: "HTML stands for HyperText Markup Language. It is the standard markup language used to structure content on the web. HTML5 is the latest version and introduces new semantic elements and APIs to enhance functionality and accessibility.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        id: "basic-tags",
        title: "Basic Tags",
        content: "<h1> to <h6> for headings, <p> for paragraphs, <a> for hyperlinks, <img> for images, <ul>, <ol>, <li> for lists, <div> and <span> as generic containers. These tags define the basic structure and content of a webpage.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
    },
    {
        id: "attributes",
        title: "Attributes",
        content: "Attributes provide extra info about elements and are written inside the start tag. Examples include href, src, alt, id, class, title, style, and more. They help in identification, styling, and behavior of elements.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes"
    },
    {
        id: "semantic-html",
        title: "Semantic HTML",
        content: "Semantic HTML uses meaningful tags like <header>, <footer>, <nav>, <main>, <article>, <section>, and <aside> to describe the content. This improves accessibility, SEO, and code readability.",
        link: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html"
    },
    {
        id: "forms",
        title: "Forms",
        content: "Forms allow users to input data. HTML form elements include <form>, <input>, <textarea>, <select>, <option>, <label>, and <button>. They support attributes like action, method, name, value, and required.",
        link: "https://developer.mozilla.org/en-US/docs/Learn/Forms"
    },
    {
        id: "validation",
        title: "Validation",
        content: "HTML5 provides built-in form validation using attributes like required, pattern, type (email, number, etc.), minlength, maxlength. It ensures correct input formats without needing JavaScript for basic cases.",
        link: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"
    },
    {
        id: "css-integration",
        title: "CSS Integration",
        content: "CSS can be integrated into HTML in three ways: Inline (style attribute), Internal (<style> tag inside <head>), and External (linking a .css file with <link>). External CSS is preferred for maintainability and scalability.",
        link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics"
    },
    {
        id: "entities",
        title: "Entities",
        content: "HTML entities are used to display reserved characters like <, >, & or invisible characters like spaces. Examples: &lt;, &gt;, &amp;, &nbsp;, &copy;. They help prevent rendering issues or escape symbols.",
        link: "https://developer.mozilla.org/en-US/docs/Glossary/Entity"
    },
    {
        id: "media",
        title: "Media",
        content: "HTML supports embedding media using tags like <img> for images, <video> for videos, and <audio> for audio. These tags support attributes like src, controls, autoplay, loop, and muted for functionality.",
        link: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding"
    },
    {
        id: "html5-apis",
        title: "HTML5 APIs",
        content: "HTML5 introduced powerful APIs like Geolocation, Drag and Drop, Web Storage (localStorage & sessionStorage), Canvas (2D drawing), and Web Workers. These enhance interactivity and browser capabilities without plugins.",
        link: "https://developer.mozilla.org/en-US/docs/Web/API"
    },
    {
        id: "accessibility",
        title: "Accessibility",
        content: "Accessibility ensures content is usable by everyone, including users with disabilities. Use semantic HTML, alt attributes for images, labels for inputs, ARIA roles, and keyboard navigable structures for better accessibility.",
        link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility"
    },
    {
        id: "interview-topics",
        title: "Interview Topics",
        content: "Focus areas for interviews: semantic HTML, difference between block and inline elements, how forms and validation work, accessibility techniques, how HTML interacts with CSS/JS, and latest HTML5 features.",
        link: "https://www.geeksforgeeks.org/html-interview-questions/"
    },
    {
        id: "best-practices",
        title: "Best Practices",
        content: "Use semantic elements, keep code clean and indented, avoid inline styles, use descriptive alt text for images, separate structure (HTML), presentation (CSS), and behavior (JS), and ensure accessibility and responsiveness.",
        link: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"
    },
    {
        id: "cheat-sheet",
        title: "Cheat Sheet",
        content: "Common tags: <h1>–<h6>, <p>, <a>, <img>, <form>, <input>, <div>, <span>. Semantic: <header>, <main>, <footer>. Media: <audio>, <video>. Attributes: href, src, alt, class, id, type, required. Use validator.w3.org to test HTML.",
        link: "https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"
    }
];


const Content = () => {
    return (
        <>

            <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
                <div className="md:w-64 md:h-screen md:fixed md:top-0 md:left-0 z-40 bg-white border-r border-gray-200">
                    <Sidebar />
                </div>

                {/* Content Area: with margin-left on md screens to accommodate sidebar */}
                <main className="flex-1 p-6 mt-4 md:mt-0 md:ml-64">
                    <a
  href="https://github.com/Abhishek-69889/Fronted-Master-Playlist-YT"
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-10 mx-3 text-center bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200"
>
  📘 View GitHub Notes
</a>

                    {/* <h3 className=''>Youtube notes:- <a href="https://github.com/Abhishek-69889/Fronted-Master-Playlist-YT" className='underline text-blue-500'>Html Notes</a></h3> */}
                    <div className="max-w-4xl mx-auto">
                        {sections.map((section) => (
                            <section key={section.id} id={section.id} className="mb-12 scroll-mt-20">
                                <h2 className="text-2xl font-semibold text-blue-700 mb-2">{section.title}</h2>
                                <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
                                <div className='flex items-center gap-2'>

                                <p className=" mt-2">For a more detailed explanation, please visit </p>
                                {section.link && (
                                    <a
                                        href={section.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 underline mt-2 inline-block"
                                    >
                                        MDN Web Docs
                                    </a>
                                )}
                                </div>
                            </section>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Content;
