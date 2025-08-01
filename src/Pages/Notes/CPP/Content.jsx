import React from 'react';
import Sidebar from './Sidebar';

const sections = [
  {
  "title": "C++ Tutorial",
  "items": [
    {
      "id": "basics",
      "title": "Basics of C++",
      "content": "C++ is a general-purpose, high-level programming language that supports object-oriented, procedural, and generic programming. It was developed by Bjarne Stroustrup as an extension of the C language. The first step in learning C++ includes setting up the development environment (like installing Code::Blocks or using online compilers) and understanding the structure of a simple C++ program, which includes headers, the main function, and syntax for input/output.",
      "link": "https://www.w3schools.com/cpp/cpp_intro.asp"
    },
    {
      "id": "data-types",
      "title": "Data Types & Variables",
      "content": "Data types in C++ define the type of data a variable can hold. Common data types include int, float, double, char, and bool. Variables are containers used to store values. You must declare a variable before using it by specifying its data type, like 'int age = 25;'. C++ is statically typed, so variable types must be declared explicitly. Constants can be defined using the 'const' keyword to make variables immutable.",
      "link": "https://www.w3schools.com/cpp/cpp_data_types.asp"
    },
    {
      "id": "operators",
      "title": "Operators",
      "content": "Operators in C++ are symbols that perform operations on variables and values. The main types include: Arithmetic operators (+, -, *, /, %), Assignment operators (=, +=, -=, etc.), Comparison operators (==, !=, >, <, >=, <=), Logical operators (&&, ||, !), and Bitwise operators (&, |, ^, ~, <<, >>). Understanding operator precedence and associativity is important for evaluating expressions correctly.",
      "link": "https://www.w3schools.com/cpp/cpp_operators.asp"
    },
    {
      "id": "control-flow",
      "title": "Control Flow (if, loops, switch)",
      "content": "Control flow structures allow decision-making and repetitive execution in C++. Conditional statements include 'if', 'if-else', and 'if-else if' for branching logic. The 'switch' statement is useful when comparing a variable against multiple constant values. Loops include 'for', 'while', and 'do-while' — used for repeating code blocks a certain number of times or while a condition holds true. Break and continue statements help in controlling loop execution flow.",
      "link": "https://www.w3schools.com/cpp/cpp_conditions.asp"
    },
    {
      "id": "functions",
      "title": "Functions",
      "content": "Functions are blocks of code that perform a specific task and help in code reusability and modularity. In C++, a function is defined with a return type, name, and optional parameters. Example: 'int add(int a, int b)'. Functions can return values or be void (no return value). They can also be overloaded (same name, different parameters). C++ also supports default arguments and recursion. The 'main()' function is the entry point of any C++ program.",
      "link": "https://www.w3schools.com/cpp/cpp_functions.asp"
    },
    {
      "id": "arrays-strings",
      "title": "Arrays & Strings",
      "content": "Arrays in C++ are used to store multiple values of the same type in a single variable. They have fixed size and zero-based indexing. Syntax: 'int arr[5] = {1, 2, 3, 4, 5};'. Strings in C++ can be managed using either character arrays (C-style) or the 'string' class from the Standard Library. C-style strings are null-terminated character arrays, while the 'string' class offers more functionality like length(), substr(), and concatenation using '+'.",
      "link": "https://www.w3schools.com/cpp/cpp_arrays.asp"
    },
    {
      "id": "pointers",
      "title": "Pointers",
      "content": "Pointers are variables that store the memory address of another variable. They are a powerful feature in C++ that allow dynamic memory management, efficient array handling, and complex data structures like linked lists. Syntax: 'int *ptr = &var;'. You can access the value at the address using the dereference operator '*'. Pointers can be incremented/decremented to move through memory and are heavily used in functions for pass-by-reference and in dynamic memory allocation.",
      "link": "https://www.w3schools.com/cpp/cpp_pointers.asp"
    },
    {
      "id": "dynamic-memory",
      "title": "Dynamic Memory Allocation",
      "content": "Dynamic memory in C++ is allocated using the 'new' operator and deallocated using 'delete'. This allows allocation of memory at runtime instead of compile time. Example: 'int* ptr = new int;'. For arrays: 'int* arr = new int[10];'. It's important to free dynamically allocated memory to avoid memory leaks using 'delete' (for single variables) or 'delete[]' (for arrays). Smart pointers introduced in C++11 help manage memory automatically.",
      "link": "https://www.w3schools.com/cpp/cpp_memory.asp"
    }
  ]
}

];



const Content = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="md:w-64 md:h-screen md:fixed md:top-0 md:left-0 z-40 bg-white border-r border-gray-200">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <main className="flex-1 p-6 mt-4 md:mt-0 md:ml-64">
                <div className="max-w-4xl mx-auto">
                    {sections.map((section) => (
                        <div key={section.title} className="mb-16">
                            <h1 className="text-3xl font-bold text-blue-800 mb-4">{section.title}</h1>

                            {section.items.map((item) => (
                                <section key={item.id} id={item.id} className="mb-10 scroll-mt-20">
                                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">{item.title}</h2>
                                    <p className="text-gray-700 whitespace-pre-line">{item.content}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span>For a more detailed explanation, please visit</span>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline"
                                        >
                                            W3Schools
                                        </a>
                                    </div>
                                </section>
                            ))}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Content;