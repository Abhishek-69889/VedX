import React from 'react';
import Sidebar from './Sidebar';

const sections = [
  {
    id: "introduction",
    title: "Introduction to JavaScript",
    content: "JavaScript is a high-level, dynamic programming language used to make websites interactive. It's supported by all modern browsers and works alongside HTML and CSS.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    id: "variables",
    title: "Variables (var, let, const)",
    content: "Variables store data. Use `let` and `const` (block-scoped) in modern JS. `var` is function-scoped and mostly outdated. Use `const` by default, `let` when reassignment is needed.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var"
  },
  {
    id: "datatypes",
    title: "Data Types",
    content: "JavaScript has primitive types like string, number, boolean, null, undefined, symbol, and bigint. Objects, arrays, and functions are non-primitive (reference types).",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"
  },
  {
    id: "operators",
    title: "Operators",
    content: "JavaScript includes arithmetic (+, -, *, /), comparison (==, ===, >), logical (&&, ||, !), and assignment (=, +=) operators. Understanding type coercion is crucial with `==` vs `===`.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators"
  },
  {
    id: "type-conversion",
    title: "Type Conversion & Coercion",
    content: "Type conversion changes a value’s data type. It can be implicit (coercion) or explicit (e.g. Number('42')). `==` performs coercion, `===` does not.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#type_conversion"
  },
  {
    id: "control-structures",
    title: "Control Structures (if, switch)",
    content: "`if`, `else`, and `switch` control the program flow based on conditions. Use `switch` when multiple values are compared against the same variable.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else"
  },
  {
    id: "loops",
    title: "Loops (for, while, for...of)",
    content: "Loops are used for repeated execution. Use `for` for traditional iteration, `while` when the end is uncertain, and `for...of` for iterating over iterable values like arrays.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"
  },
  {
    id: "functions",
    title: "Functions & Function Expressions",
    content: "Functions encapsulate reusable logic. JavaScript supports named functions, anonymous functions, arrow functions, and IIFEs (Immediately Invoked Function Expressions).",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
  },
  {
    id: "scope",
    title: "Scope (Global, Local, Block)",
    content: "Scope defines variable accessibility. Global variables are accessible everywhere. Local (function) and block (let/const) variables are limited to their block or function.",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/Scope"
  },
  {
    id: "hoisting",
    title: "Hoisting",
    content: "Hoisting is JavaScript’s default behavior of moving declarations to the top. `var` is hoisted (initialized as undefined), but `let` and `const` are hoisted in a 'temporal dead zone'.",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"
  },
  {
    id: "arrays",
    title: "Arrays",
    content: "Arrays store ordered collections. Access with indices (arr[0]). Use methods like push, pop, shift, unshift, map, filter, reduce, and forEach for manipulation.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
  },
  {
    id: "objects",
    title: "Objects",
    content: "Objects hold key-value pairs and are the foundation of JavaScript. Keys are strings (or symbols), and values can be any data type. Access with dot or bracket notation.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"
  },
  {
    id: "object-methods",
    title: "Object Methods & `this`",
    content: "Objects can have functions as methods. The `this` keyword refers to the object calling the method. It behaves differently in regular vs arrow functions.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"
  },
  {
    id: "destructuring",
    title: "Destructuring",
    content: "Destructuring allows unpacking values from arrays or properties from objects into distinct variables. It improves readability and reduces repetition.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
  },
  {
    id: "spread-rest",
    title: "Spread & Rest Operators",
    content: "Spread (...) expands arrays/objects. Rest (...) gathers remaining values into an array. Use in function parameters, object cloning, and array merging.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
  },
  {
    id: "template-literals",
    title: "Template Literals",
    content: "Template literals use backticks (`) and allow embedded expressions with ${}. They support multi-line strings and dynamic interpolation.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
  },
  {
    id: "arrow-functions",
    title: "Arrow Functions",
    content: "Arrow functions offer a shorter syntax and do not have their own `this`, `arguments`, or `super`. Great for short callbacks and functional programming.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
  },
  {
    id: "default-params",
    title: "Default Parameters",
    content: "Functions can have default values for parameters if none are passed. Useful for writing cleaner, safer code.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters"
  },
  {
    id: "optional-chaining",
    title: "Optional Chaining (?.)",
    content: "Optional chaining lets you safely access deeply nested properties without worrying about undefined/null. E.g., user?.profile?.email.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
  },
  {
    id: "nullish-coalescing",
    title: "Nullish Coalescing (??)",
    content: "Returns the right-hand operand when the left is null or undefined. Useful for default fallbacks: let name = userName ?? 'Guest';",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator"
  },
  {
    id: "closure",
    title: "Closures",
    content: "A closure is formed when a function retains access to its lexical scope, even after the outer function has finished executing. Useful for data privacy and callbacks.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
  },
  {
    id: "callback",
    title: "Callbacks",
    content: "A callback is a function passed into another function as an argument, to be executed later. Common in async code (e.g., setTimeout, event handlers).",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function"
  },
  {
    id: "promise",
    title: "Promises",
    content: "A Promise is an object representing the eventual completion or failure of an async operation. Use `.then()`, `.catch()`, and `.finally()` to handle results.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
  },
  {
    id: "async-await",
    title: "Async/Await",
    content: "`async` and `await` simplify writing asynchronous code that looks synchronous. `await` pauses execution until the promise resolves or rejects.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises"
  },
  {
    id: "event-loop",
    title: "Event Loop",
    content: "The event loop allows JavaScript to be non-blocking. It manages the call stack and task queue to execute asynchronous code like promises, timeouts, and events.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"
  },
  {
    id: "execution-context",
    title: "Execution Context & Call Stack",
    content: "Every time a function is called, a new execution context is pushed to the call stack. It stores variables, scope, and the value of `this`.",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/Execution_context"
  },
  {
    id: "scope-chain",
    title: "Scope Chain & Lexical Environment",
    content: "Scope chain is the hierarchy of scopes. JS uses lexical scoping — child functions access variables in parent scopes.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#lexical_scoping"
  },
  {
    id: "hoisting-advanced",
    title: "Advanced Hoisting",
    content: "`var` declarations are hoisted and initialized as undefined. `let` and `const` are hoisted but not initialized, which leads to a 'temporal dead zone'.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_td"
  },
  {
    id: "strict-mode",
    title: "Strict Mode",
    content: "`use strict` enforces stricter parsing and error handling in your JS code. Prevents accidental globals, duplicate parameters, and silent errors.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"
  },
  {
    id: "garbage-collection",
    title: "Garbage Collection",
    content: "JS automatically reclaims memory no longer in use. Understanding references and scope helps avoid memory leaks in long-running applications.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"
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
