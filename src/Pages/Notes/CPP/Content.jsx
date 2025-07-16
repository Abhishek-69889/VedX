import React from 'react';
import Sidebar from './Sidebar';

const sections = [
  {
    "title": "DSA Tutorial",
    "items": [
      {
        "id": "home",
        "title": "DSA HOME",
        "content": "Start here to explore Data Structures and Algorithms (DSA). This page introduces the DSA course, its structure, and learning benefits.",
        "link": "https://www.w3schools.com/dsa/"
      },
      {
        "id": "intro",
        "title": "DSA Intro",
        "content": "An overview of what DSA is, why it's important in computer science, and how it helps in writing optimized code.",
        "link": "https://www.w3schools.com/dsa/dsa_intro.php"
      },
      {
        "id": "simple-algo",
        "title": "DSA Simple Algorithm",
        "content": "Explanation of a basic algorithm using step-by-step instructions. This introduces the algorithmic way of thinking using simple real-world examples.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_simple.php"
      }
    ]
  },
  {
    "title": "Arrays",
    "items": [
      {
        "id": "arrays",
        "title": "DSA Arrays",
        "content": "Introduction to arrays, how they store elements in contiguous memory, and basic operations like insert, delete, and access using index.",
        "link": "https://www.w3schools.com/dsa/dsa_arrays.php"
      },
      {
        "id": "bubble-sort",
        "title": "DSA Bubble Sort",
        "content": "Bubble Sort is a simple comparison-based sorting algorithm. This section explains how it works by repeatedly swapping adjacent elements.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_bubblesort.php"
      },
      {
        "id": "selection-sort",
        "title": "DSA Selection Sort",
        "content": "Selection Sort repeatedly finds the minimum element and places it at the beginning. Useful for understanding sorting by selection logic.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_selectionsort.php"
      },
      {
        "id": "insertion-sort",
        "title": "DSA Insertion Sort",
        "content": "Insertion Sort builds the final sorted array one item at a time. Great for understanding sorting on small datasets or nearly sorted data.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_insertionsort.php"
      },
      {
        "id": "quick-sort",
        "title": "DSA Quick Sort",
        "content": "Quick Sort is a highly efficient divide-and-conquer algorithm that selects a pivot and partitions the array. Commonly used in practice.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_quicksort.php"
      },
      {
        "id": "counting-sort",
        "title": "DSA Counting Sort",
        "content": "Counting Sort is a non-comparison-based sorting technique that counts the number of objects with distinct key values.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_countingsort.php"
      },
      {
        "id": "radix-sort",
        "title": "DSA Radix Sort",
        "content": "Radix Sort sorts numbers digit by digit starting from the least significant digit. It's useful for large sets of integers.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_radixsort.php"
      },
      {
        "id": "merge-sort",
        "title": "DSA Merge Sort",
        "content": "Merge Sort divides the array into halves, sorts each half, and then merges them. It's a stable and efficient divide-and-conquer algorithm.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_mergesort.php"
      },
      {
        "id": "linear-search",
        "title": "DSA Linear Search",
        "content": "Linear Search checks each element one by one. It's simple and effective for small or unsorted datasets.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_linearsearch.php"
      },
      {
        "id": "binary-search",
        "title": "DSA Binary Search",
        "content": "Binary Search is an efficient algorithm for finding elements in a sorted array by repeatedly dividing the search interval in half.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_binarysearch.php"
      }
    ]
  },
  {
    "title": "Linked Lists",
    "items": [
      {
        "id": "linked-lists",
        "title": "DSA Linked Lists",
        "content": "Linked Lists are linear data structures where elements (nodes) are linked using pointers. They allow efficient insertion and deletion.",
        "link": "https://www.w3schools.com/dsa/dsa_linkedlist.php"
      },
      {
        "id": "ll-memory",
        "title": "DSA Linked Lists in Memory",
        "content": "Explains how linked lists are stored in memory. Each node contains data and a pointer to the next node.",
        "link": "https://www.w3schools.com/dsa/dsa_linkedlist_memory.php"
      },
      {
        "id": "ll-types",
        "title": "DSA Linked Lists Types",
        "content": "Covers different types of linked lists: singly, doubly, and circular linked lists, with diagrams and examples.",
        "link": "https://www.w3schools.com/dsa/dsa_linkedlist_types.php"
      },
      {
        "id": "ll-operations",
        "title": "Linked Lists Operations",
        "content": "Demonstrates how to perform insertion, deletion, traversal, and search operations on linked lists.",
        "link": "https://www.w3schools.com/dsa/dsa_linkedlist_operations.php"
      }
    ]
  },
  {
    "title": "Stacks & Queues",
    "items": [
      {
        "id": "stacks",
        "title": "DSA Stacks",
        "content": "A stack is a linear data structure that follows the Last In First Out (LIFO) principle. Common operations: push, pop, peek.",
        "link": "https://www.w3schools.com/dsa/dsa_stack.php"
      },
      {
        "id": "queues",
        "title": "DSA Queues",
        "content": "A queue is a linear data structure that follows the First In First Out (FIFO) principle. Supports enqueue and dequeue operations.",
        "link": "https://www.w3schools.com/dsa/dsa_queue.php"
      }
    ]
  },
  {
    "title": "Hash Tables",
    "items": [
      {
        "id": "hash-tables",
        "title": "DSA Hash Tables",
        "content": "Hash Tables are used to store key-value pairs. They use a hash function to compute an index into an array of buckets.",
        "link": "https://www.w3schools.com/dsa/dsa_hashing.php"
      },
      {
        "id": "hash-sets",
        "title": "DSA Hash Sets",
        "content": "Hash Sets store unique elements and are implemented using hash tables. Ideal for membership checks.",
        "link": "https://www.w3schools.com/dsa/dsa_hashing_set.php"
      },
      {
        "id": "hash-maps",
        "title": "DSA Hash Maps",
        "content": "Hash Maps store key-value pairs with fast access. They handle collisions using techniques like chaining or open addressing.",
        "link": "https://www.w3schools.com/dsa/dsa_hashing_map.php"
      }
    ]
  },
   {
    "title": "Trees",
    "items": [
      {
        "id": "trees",
        "title": "DSA Trees",
        "content": "Trees are hierarchical data structures with a root node and child nodes. They are used to represent data with hierarchical relationships.",
        "link": "https://www.w3schools.com/dsa/dsa_tree.php"
      },
      {
        "id": "binary-trees",
        "title": "DSA Binary Trees",
        "content": "A binary tree is a type of tree where each node has at most two children. Used in many search and sort algorithms.",
        "link": "https://www.w3schools.com/dsa/dsa_tree_binary.php"
      },
      {
        "id": "preorder",
        "title": "DSA Pre-order Traversal",
        "content": "Pre-order traversal visits the root first, then recursively traverses the left and right subtrees.",
        "link": "https://www.w3schools.com/dsa/dsa_tree_preorder.php"
      },
      {
        "id": "inorder",
        "title": "DSA In-order Traversal",
        "content": "In-order traversal visits the left subtree, then the root, then the right subtree. Common in BST operations.",
        "link": "https://www.w3schools.com/dsa/dsa_tree_inorder.php"
      },
      {
        "id": "postorder",
        "title": "DSA Post-order Traversal",
        "content": "Post-order traversal visits the left and right subtrees before the root. Useful for deleting or freeing nodes.",
        "link": "https://www.w3schools.com/dsa/dsa_tree_postorder.php"
      },
      {
        "id": "tree-array",
        "title": "DSA Array Implementation",
        "content": "Shows how to implement binary trees using arrays, especially useful for complete binary trees like heaps.",
        "link": "https://www.w3schools.com/dsa/dsa_tree_array.php"
      },
      {
        "id": "bst",
        "title": "DSA Binary Search Trees",
        "content": "Binary Search Trees (BST) are binary trees with left < root < right ordering. Efficient for search, insert, delete.",
        "link": "https://www.w3schools.com/dsa/dsa_tree_bst.php"
      },
      {
        "id": "avl",
        "title": "DSA AVL Trees",
        "content": "AVL trees are self-balancing binary search trees where the difference in height between subtrees is at most 1.",
        "link": "https://www.w3schools.com/dsa/dsa_tree_avl.php"
      }
    ]
  },
  {
    "title": "Graphs",
    "items": [
      {
        "id": "graphs",
        "title": "DSA Graphs",
        "content": "Graphs are collections of nodes (vertices) connected by edges. They are used to model networks, paths, and relationships.",
        "link": "https://www.w3schools.com/dsa/dsa_graph.php"
      },
      {
        "id": "graphs-impl",
        "title": "Graphs Implementation",
        "content": "Describes graph implementation using adjacency matrices and adjacency lists, with code examples.",
        "link": "https://www.w3schools.com/dsa/dsa_graph_impl.php"
      },
      {
        "id": "graphs-traversal",
        "title": "DSA Graphs Traversal",
        "content": "Graph traversal includes Breadth-First Search (BFS) and Depth-First Search (DFS) algorithms.",
        "link": "https://www.w3schools.com/dsa/dsa_graph_traversal.php"
      },
      {
        "id": "cycle-detection",
        "title": "DSA Cycle Detection",
        "content": "Explains how to detect cycles in directed and undirected graphs using DFS and Union-Find.",
        "link": "https://www.w3schools.com/dsa/dsa_graph_cycle.php"
      }
    ]
  },
  {
    "title": "Shortest Path",
    "items": [
      {
        "id": "shortest-path",
        "title": "DSA Shortest Path",
        "content": "The shortest path problem finds the minimum path between two nodes in a graph using various algorithms.",
        "link": "https://www.w3schools.com/dsa/dsa_graph_shortest_path.php"
      },
      {
        "id": "dijkstra",
        "title": "DSA Dijkstra's",
        "content": "Dijkstra’s algorithm finds the shortest path from a source node to all other nodes in a weighted graph.",
        "link": "https://www.w3schools.com/dsa/dsa_graph_dijkstra.php"
      },
      {
        "id": "bellman-ford",
        "title": "DSA Bellman-Ford",
        "content": "Bellman-Ford algorithm handles graphs with negative weights and detects negative cycles.",
        "link": "https://www.w3schools.com/dsa/dsa_graph_bellman_ford.php"
      }
    ]
  },
  {
    "title": "Minimum Spanning Tree",
    "items": [
      {
        "id": "mst",
        "title": "Minimum Spanning Tree",
        "content": "A Minimum Spanning Tree (MST) connects all nodes in a graph with the minimum total edge weight.",
        "link": "https://www.w3schools.com/dsa/dsa_graph_mst.php"
      },
      {
        "id": "prim",
        "title": "DSA Prim's",
        "content": "Prim’s algorithm finds the MST by growing it from a starting vertex using the smallest edge weight.",
        "link": "https://www.w3schools.com/dsa/dsa_graph_prims.php"
      },
      {
        "id": "kruskal",
        "title": "DSA Kruskal's",
        "content": "Kruskal’s algorithm finds MST by sorting all edges and adding the smallest ones while avoiding cycles.",
        "link": "https://www.w3schools.com/dsa/dsa_graph_kruskal.php"
      }
    ]
  },
  {
    "title": "Maximum Flow",
    "items": [
      {
        "id": "max-flow",
        "title": "DSA Maximum Flow",
        "content": "Maximum flow problems find the greatest possible flow in a network from source to sink under capacity constraints.",
        "link": "https://www.w3schools.com/dsa/dsa_graph_max_flow.php"
      },
      {
        "id": "ford-fulkerson",
        "title": "DSA Ford-Fulkerson",
        "content": "The Ford-Fulkerson method uses augmenting paths to compute the maximum flow in a flow network.",
        "link": "https://www.w3schools.com/dsa/dsa_graph_ford_fulkerson.php"
      },
      {
        "id": "edmonds-karp",
        "title": "DSA Edmonds-Karp",
        "content": "Edmonds-Karp algorithm is an implementation of Ford-Fulkerson using BFS for finding augmenting paths.",
        "link": "https://www.w3schools.com/dsa/dsa_graph_edmonds_karp.php"
      }
    ]
  },
  {
    "title": "Time Complexity",
    "items": [
      {
        "id": "tc-intro",
        "title": "Introduction",
        "content": "Time complexity is a measure of the time an algorithm takes to run as a function of input size. It helps analyze efficiency.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_timecomplexity.php"
      },
      {
        "id": "tc-bubble",
        "title": "Bubble Sort",
        "content": "Analyzes time complexity of the Bubble Sort algorithm in best, average, and worst cases.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_bubblesort_tc.php"
      },
      {
        "id": "tc-selection",
        "title": "Selection Sort",
        "content": "Details the time complexity of Selection Sort with explanations of its behavior in all cases.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_selectionsort_tc.php"
      },
      {
        "id": "tc-insertion",
        "title": "Insertion Sort",
        "content": "Explains the efficiency of Insertion Sort and how it performs in sorted vs unsorted data.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_insertionsort_tc.php"
      },
      {
        "id": "tc-quick",
        "title": "Quick Sort",
        "content": "Analyzes the time complexity of Quick Sort, a divide-and-conquer algorithm with average O(n log n) performance.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_quicksort_tc.php"
      },
      {
        "id": "tc-counting",
        "title": "Counting Sort",
        "content": "Breaks down the time complexity of Counting Sort, a linear time sorting algorithm for integers.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_countingsort_tc.php"
      },
      {
        "id": "tc-radix",
        "title": "Radix Sort",
        "content": "Covers the time complexity of Radix Sort, which sorts numbers digit by digit without comparison.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_radixsort_tc.php"
      },
      {
        "id": "tc-merge",
        "title": "Merge Sort",
        "content": "Explains the time complexity of Merge Sort, a stable and efficient O(n log n) divide-and-conquer algorithm.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_mergesort_tc.php"
      },
      {
        "id": "tc-linear",
        "title": "Linear Search",
        "content": "Analyzes the time complexity of Linear Search, a simple method with O(n) worst-case performance.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_linearsearch_tc.php"
      },
      {
        "id": "tc-binary",
        "title": "Binary Search",
        "content": "Covers the time complexity of Binary Search, which splits the search space in half each time.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_binarysearch_tc.php"
      }
    ]
  },
  {
    "title": "DSA Reference",
    "items": [
      {
        "id": "euclidean",
        "title": "DSA Euclidean Algorithm",
        "content": "The Euclidean Algorithm is used to find the greatest common divisor (GCD) of two numbers efficiently.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_euclidean.php"
      },
      {
        "id": "huffman",
        "title": "DSA Huffman Coding",
        "content": "Huffman Coding is a lossless compression algorithm based on frequency of characters in a string.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_huffman.php"
      },
      {
        "id": "tsp",
        "title": "DSA The Traveling Salesman",
        "content": "The Traveling Salesman Problem (TSP) is a classic optimization problem to find the shortest route visiting all cities.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_tsp.php"
      },
      {
        "id": "knapsack",
        "title": "DSA 0/1 Knapsack",
        "content": "The 0/1 Knapsack Problem uses dynamic programming to determine the most valuable items to include in a bag.",
        "link": "https://www.w3schools.com/dsa/dsa_algo_knapsack.php"
      },
      {
        "id": "memo",
        "title": "DSA Memoization",
        "content": "Memoization is a top-down dynamic programming technique that stores results of expensive function calls.",
        "link": "https://www.w3schools.com/dsa/dsa_dp_memoization.php"
      },
      {
        "id": "tabulation",
        "title": "DSA Tabulation",
        "content": "Tabulation is a bottom-up dynamic programming approach that builds up solutions iteratively.",
        "link": "https://www.w3schools.com/dsa/dsa_dp_tabulation.php"
      },
      {
        "id": "dp",
        "title": "DSA Dynamic Programming",
        "content": "Dynamic Programming is an optimization technique used to solve complex problems by breaking them into simpler subproblems.",
        "link": "https://www.w3schools.com/dsa/dsa_dp.php"
      },
      {
        "id": "greedy",
        "title": "DSA Greedy Algorithms",
        "content": "Greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum.",
        "link": "https://www.w3schools.com/dsa/dsa_greedy.php"
      }
    ]
  },
  {
    "title": "DSA Examples",
    "items": [
      {
        "id": "examples",
        "title": "DSA Examples",
        "content": "Includes various solved examples to illustrate concepts and problem-solving using DSA.",
        "link": "https://www.w3schools.com/dsa/dsa_examples.php"
      },
      {
        "id": "exercises",
        "title": "DSA Exercises",
        "content": "A collection of exercises and practice questions to test and strengthen your understanding of DSA.",
        "link": "https://www.w3schools.com/dsa/dsa_exercises.php"
      },
      {
        "id": "quiz",
        "title": "DSA Quiz",
        "content": "Test your DSA knowledge with this interactive quiz based on key concepts and problems.",
        "link": "https://www.w3schools.com/dsa/dsa_quiz.php"
      },
      {
        "id": "syllabus",
        "title": "DSA Syllabus",
        "content": "Provides a complete overview of all topics covered in W3Schools' DSA course, organized systematically.",
        "link": "https://www.w3schools.com/dsa/dsa_syllabus.php"
      },
      {
        "id": "study-plan",
        "title": "DSA Study Plan",
        "content": "A structured study plan to help learners master Data Structures and Algorithms step-by-step.",
        "link": "https://www.w3schools.com/dsa/dsa_study_plan.php"
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