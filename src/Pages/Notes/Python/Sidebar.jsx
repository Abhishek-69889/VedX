import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const topics = [
  {
    id: "python-basics",
    title: "Python Basics",
    items: [
      {
        id: "variables",
        title: "Variables and Data Types",
        content: "Learn how to declare variables and use basic data types like int, float, string, boolean, etc.",
        link: "https://www.w3schools.com/python/python_variables.asp"
      },
      {
        id: "input-output",
        title: "Input and Output",
        content: "Taking input from user and printing output using input() and print().",
        link: "https://www.w3schools.com/python/gloss_python_user_input.asp"
      },
      {
        id: "type-casting",
        title: "Type Casting",
        content: "Convert between data types using int(), float(), str(), etc.",
        link: "https://www.w3schools.com/python/python_casting.asp"
      },
      {
        id: "operators",
        title: "Operators in Python",
        content: "Includes arithmetic, comparison, logical, bitwise, and assignment operators.",
        link: "https://www.w3schools.com/python/python_operators.asp"
      }
    ]
  },
  {
    id: "control-flow",
    title: "Control Flow",
    items: [
      {
        id: "if-else",
        title: "if-else Statements",
        content: "Conditional execution of code using if, elif, and else.",
        link: "https://www.w3schools.com/python/python_conditions.asp"
      },
      {
        id: "loops",
        title: "Loops",
        content: "Repeat code using while and for loops. Use break and continue for loop control.",
        link: "https://www.w3schools.com/python/python_while_loops.asp"
      },
      {
        id: "pattern-printing",
        title: "Pattern Printing",
        content: "Learn how to print pyramid, diamond, and number patterns using nested loops.",
        link: "https://www.geeksforgeeks.org/star-patterns-in-python/"
      }
    ]
  },
  {
    id: "functions",
    title: "Functions",
    items: [
      {
        id: "functions-def",
        title: "Defining Functions",
        content: "Use the def keyword to define reusable blocks of code.",
        link: "https://www.w3schools.com/python/python_functions.asp"
      },
      {
        id: "arguments",
        title: "Function Arguments",
        content: "Positional, keyword, default, *args, and **kwargs in function definitions.",
        link: "https://www.geeksforgeeks.org/default-arguments-in-python/"
      },
      {
        id: "lambda",
        title: "Lambda Functions",
        content: "Anonymous functions using lambda for short operations.",
        link: "https://www.w3schools.com/python/python_lambda.asp"
      }
    ]
  },
  {
    id: "data-structures",
    title: "Data Structures",
    items: [
      {
        id: "lists",
        title: "Lists",
        content: "Ordered, mutable collection. Learn slicing, methods like append, pop, sort, etc.",
        link: "https://www.w3schools.com/python/python_lists.asp"
      },
      {
        id: "tuples",
        title: "Tuples",
        content: "Ordered and immutable collections, great for fixed data.",
        link: "https://www.w3schools.com/python/python_tuples.asp"
      },
      {
        id: "sets",
        title: "Sets",
        content: "Unordered collection of unique elements. Supports union, intersection, etc.",
        link: "https://www.w3schools.com/python/python_sets.asp"
      },
      {
        id: "dictionaries",
        title: "Dictionaries",
        content: "Key-value pairs used for fast data lookup and storage.",
        link: "https://www.w3schools.com/python/python_dictionaries.asp"
      },
      {
        id: "strings",
        title: "Strings",
        content: "Text data in Python. Learn slicing, formatting, and common string methods.",
        link: "https://www.w3schools.com/python/python_strings.asp"
      }
    ]
  },
  {
    id: "advanced-python",
    title: "Advanced Python",
    items: [
      {
        id: "oop",
        title: "Object-Oriented Programming",
        content: "Classes, objects, inheritance, polymorphism, encapsulation, abstraction.",
        link: "https://www.w3schools.com/python/python_classes.asp"
      },
      {
        id: "decorators",
        title: "Decorators",
        content: "Functions that modify the behavior of other functions.",
        link: "https://realpython.com/primer-on-python-decorators/"
      },
      {
        id: "generators",
        title: "Generators & Iterators",
        content: "Yield values from functions to save memory and process data lazily.",
        link: "https://www.w3schools.com/python/python_iterators.asp"
      },
      {
        id: "comprehensions",
        title: "Comprehensions",
        content: "Compact ways to create lists, sets, and dicts using expressions.",
        link: "https://www.geeksforgeeks.org/python-list-comprehension/"
      },
      {
        id: "exception-handling",
        title: "Exception Handling",
        content: "Handle errors using try, except, finally, and custom exceptions.",
        link: "https://www.w3schools.com/python/python_try_except.asp"
      }
    ]
  },
  {
    id: "file-testing",
    title: "File Handling & Testing",
    items: [
      {
        id: "file-handling",
        title: "File Handling",
        content: "Open, read, write files using open(), with statement, and file modes.",
        link: "https://www.w3schools.com/python/python_file_handling.asp"
      },
      {
        id: "json-csv",
        title: "Working with JSON & CSV",
        content: "Learn to read and write structured data using the json and csv modules.",
        link: "https://realpython.com/python-json/"
      },
      {
        id: "testing",
        title: "Testing in Python",
        content: "Use unittest or pytest to write test cases for your code.",
        link: "https://realpython.com/python-testing/"
      }
    ]
  },
  {
    id: "libraries",
    title: "Popular Libraries",
    items: [
      {
        id: "numpy",
        title: "NumPy",
        content: "High-performance numerical computations, arrays, and linear algebra.",
        link: "https://numpy.org/doc/stable/user/absolute_beginners.html"
      },
      {
        id: "pandas",
        title: "Pandas",
        content: "Powerful data analysis and manipulation library using DataFrames.",
        link: "https://pandas.pydata.org/docs/"
      },
      {
        id: "matplotlib",
        title: "Matplotlib",
        content: "Plotting library for creating static, animated, and interactive graphs.",
        link: "https://matplotlib.org/stable/tutorials/index.html"
      },
      {
        id: "requests",
        title: "Requests",
        content: "Library for sending HTTP requests and working with APIs.",
        link: "https://docs.python-requests.org/en/latest/"
      },
      {
        id: "re",
        title: "Regex with re",
        content: "Work with regular expressions for pattern matching in strings.",
        link: "https://docs.python.org/3/library/re.html"
      }
    ]
  }
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden p-4 flex items-center justify-between bg-white border-b border-gray-200">
        <h2 className="text-lg font-bold">Python Topics</h2>
        <button onClick={toggleSidebar} className="text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <aside
        className={`bg-white border-r border-gray-200 p-4 md:w-64 h-screen overflow-y-auto fixed top-0 z-40 transition-transform duration-300 md:relative md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:block`}
      >
        <h2 className="text-xl font-bold mb-4 hidden md:block">Python Topics</h2>
        <ul className="space-y-2">
          {topics.map((topic) => (
            <li key={topic.id}>
              <a
                href={`#${topic.id}`}
                className="block px-3 py-1 hover:bg-gray-200 rounded"
                onClick={() => setIsOpen(false)}
              >
                {topic.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
