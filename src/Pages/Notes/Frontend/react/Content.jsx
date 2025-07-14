import React from 'react';
import Sidebar from './Sidebar';

const sections = [
 {
    id: "react-intro",
    title: "Introduction to React",
    content: "React is a JavaScript library for building user interfaces. It allows you to create reusable components and manage dynamic data using a virtual DOM for efficient updates.",
    link: "https://reactjs.org/docs/getting-started.html"
  },
  {
    id: "jsx",
    title: "JSX",
    content: "JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write UI elements in a declarative way, which gets compiled to `React.createElement` under the hood.",
    link: "https://reactjs.org/docs/introducing-jsx.html"
  },
  {
    id: "components",
    title: "Components (Function & Class)",
    content: "Components are the building blocks of a React app. Functional components are simpler and preferred with hooks, while class components use lifecycle methods.",
    link: "https://reactjs.org/docs/components-and-props.html"
  },
  {
    id: "props",
    title: "Props",
    content: "Props (short for properties) are read-only inputs to components. They allow you to pass data from parent to child components.",
    link: "https://reactjs.org/docs/components-and-props.html"
  },
  {
    id: "state",
    title: "State",
    content: "State allows components to hold and manage data that can change over time. It’s managed with the `useState` hook in functional components.",
    link: "https://reactjs.org/docs/hooks-state.html"
  },
  {
    id: "event-handling",
    title: "Event Handling",
    content: "React handles events like `onClick`, `onChange` using camelCase syntax and uses functions as event handlers. Prevent default behavior with `event.preventDefault()`.",
    link: "https://reactjs.org/docs/handling-events.html"
  },
  {
    id: "conditional-rendering",
    title: "Conditional Rendering",
    content: "React allows conditional rendering using if statements, ternary operators, logical &&, or switch cases to control what to render based on conditions.",
    link: "https://reactjs.org/docs/conditional-rendering.html"
  },
  {
    id: "lists-keys",
    title: "Lists and Keys",
    content: "Render lists using `.map()` in JSX. Keys are unique identifiers that help React optimize rendering when items change or reorder.",
    link: "https://reactjs.org/docs/lists-and-keys.html"
  },
  {
    id: "use-effect",
    title: "useEffect Hook",
    content: "`useEffect` lets you run side effects like fetching data or subscriptions. You can control when it runs using the dependency array.",
    link: "https://reactjs.org/docs/hooks-effect.html"
  },
  {
    id: "forms",
    title: "Forms in React",
    content: "React forms are controlled using component state. `value` and `onChange` manage input fields, allowing two-way data binding.",
    link: "https://reactjs.org/docs/forms.html"
  },
  {
    id: "lifting-state",
    title: "Lifting State Up",
    content: "When multiple components need access to the same data, move the state up to their closest common ancestor and pass it down via props.",
    link: "https://reactjs.org/docs/lifting-state-up.html"
  },
  {
    id: "context-api",
    title: "Context API",
    content: "The Context API allows passing data without prop drilling. Useful for themes, auth, and global settings using `createContext`, `Provider`, and `useContext`.",
    link: "https://reactjs.org/docs/context.html"
  },
  {
    id: "custom-hooks",
    title: "Custom Hooks",
    content: "Custom hooks allow you to extract and reuse logic across components. They are regular functions that can use other hooks inside.",
    link: "https://reactjs.org/docs/hooks-custom.html"
  },
  {
    id: "react-router",
    title: "React Router",
    content: "React Router enables navigation between views in a single-page app. Use `<Routes>`, `<Route>`, `<Link>`, and `useNavigate` to control routing.",
    link: "https://reactrouter.com/en/main"
  },
  {
    id: "use-ref",
    title: "useRef Hook",
    content: "`useRef` allows access to DOM nodes or persist mutable values between renders without re-rendering the component.",
    link: "https://reactjs.org/docs/hooks-reference.html#useref"
  },
  {
    id: "performance",
    title: "Performance Optimization",
    content: "Use `React.memo`, `useCallback`, `useMemo`, and lazy loading to improve performance by reducing unnecessary renders and bundling smartly.",
    link: "https://reactjs.org/docs/optimizing-performance.html"
  },
  {
    id: "error-boundaries",
    title: "Error Boundaries",
    content: "Error boundaries catch JavaScript errors in components and show fallback UIs. They are implemented using class components with `componentDidCatch`.",
    link: "https://reactjs.org/docs/error-boundaries.html"
  },
  {
    id: "interview-topics",
    title: "React Interview Topics",
    content: "Important topics include component lifecycle, hooks, props vs state, virtual DOM, keys, lifting state, performance, and React Router.",
    link: "https://www.geeksforgeeks.org/reactjs-interview-questions/"
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
