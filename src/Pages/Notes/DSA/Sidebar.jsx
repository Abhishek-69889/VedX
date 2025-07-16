import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const sidebarData = [
  {
    title: 'DSA Tutorial',
    items: [
      { id: 'home', title: 'DSA HOME' },
      { id: 'intro', title: 'DSA Intro' },
      { id: 'simple-algo', title: 'DSA Simple Algorithm' },
    ],
  },
  {
    title: 'Arrays',
    items: [
      { id: 'arrays', title: 'DSA Arrays' },
      { id: 'bubble-sort', title: 'DSA Bubble Sort' },
      { id: 'selection-sort', title: 'DSA Selection Sort' },
      { id: 'insertion-sort', title: 'DSA Insertion Sort' },
      { id: 'quick-sort', title: 'DSA Quick Sort' },
      { id: 'counting-sort', title: 'DSA Counting Sort' },
      { id: 'radix-sort', title: 'DSA Radix Sort' },
      { id: 'merge-sort', title: 'DSA Merge Sort' },
      { id: 'linear-search', title: 'DSA Linear Search' },
      { id: 'binary-search', title: 'DSA Binary Search' },
    ],
  },
  {
    title: 'Linked Lists',
    items: [
      { id: 'linked-lists', title: 'DSA Linked Lists' },
      { id: 'll-memory', title: 'DSA Linked Lists in Memory' },
      { id: 'll-types', title: 'DSA Linked Lists Types' },
      { id: 'll-operations', title: 'Linked Lists Operations' },
    ],
  },
  {
    title: 'Stacks & Queues',
    items: [
      { id: 'stacks', title: 'DSA Stacks' },
      { id: 'queues', title: 'DSA Queues' },
    ],
  },
  {
    title: 'Hash Tables',
    items: [
      { id: 'hash-tables', title: 'DSA Hash Tables' },
      { id: 'hash-sets', title: 'DSA Hash Sets' },
      { id: 'hash-maps', title: 'DSA Hash Maps' },
    ],
  },
  {
    title: 'Trees',
    items: [
      { id: 'trees', title: 'DSA Trees' },
      { id: 'binary-trees', title: 'DSA Binary Trees' },
      { id: 'preorder', title: 'DSA Pre-order Traversal' },
      { id: 'inorder', title: 'DSA In-order Traversal' },
      { id: 'postorder', title: 'DSA Post-order Traversal' },
      { id: 'tree-array', title: 'DSA Array Implementation' },
      { id: 'bst', title: 'DSA Binary Search Trees' },
      { id: 'avl', title: 'DSA AVL Trees' },
    ],
  },
  {
    title: 'Graphs',
    items: [
      { id: 'graphs', title: 'DSA Graphs' },
      { id: 'graphs-impl', title: 'Graphs Implementation' },
      { id: 'graphs-traversal', title: 'DSA Graphs Traversal' },
      { id: 'cycle-detection', title: 'DSA Cycle Detection' },
    ],
  },
  {
    title: 'Shortest Path',
    items: [
      { id: 'shortest-path', title: 'DSA Shortest Path' },
      { id: 'dijkstra', title: 'DSA Dijkstra\'s' },
      { id: 'bellman-ford', title: 'DSA Bellman-Ford' },
    ],
  },
  {
    title: 'Minimum Spanning Tree',
    items: [
      { id: 'mst', title: 'Minimum Spanning Tree' },
      { id: 'prim', title: 'DSA Prim\'s' },
      { id: 'kruskal', title: 'DSA Kruskal\'s' },
    ],
  },
  {
    title: 'Maximum Flow',
    items: [
      { id: 'max-flow', title: 'DSA Maximum Flow' },
      { id: 'ford-fulkerson', title: 'DSA Ford-Fulkerson' },
      { id: 'edmonds-karp', title: 'DSA Edmonds-Karp' },
    ],
  },
  {
    title: 'Time Complexity',
    items: [
      { id: 'tc-intro', title: 'Introduction' },
      { id: 'tc-bubble', title: 'Bubble Sort' },
      { id: 'tc-selection', title: 'Selection Sort' },
      { id: 'tc-insertion', title: 'Insertion Sort' },
      { id: 'tc-quick', title: 'Quick Sort' },
      { id: 'tc-counting', title: 'Counting Sort' },
      { id: 'tc-radix', title: 'Radix Sort' },
      { id: 'tc-merge', title: 'Merge Sort' },
      { id: 'tc-linear', title: 'Linear Search' },
      { id: 'tc-binary', title: 'Binary Search' },
    ],
  },
  {
    title: 'DSA Reference',
    items: [
      { id: 'euclidean', title: 'DSA Euclidean Algorithm' },
      { id: 'huffman', title: 'DSA Huffman Coding' },
      { id: 'tsp', title: 'DSA The Traveling Salesman' },
      { id: 'knapsack', title: 'DSA 0/1 Knapsack' },
      { id: 'memo', title: 'DSA Memoization' },
      { id: 'tabulation', title: 'DSA Tabulation' },
      { id: 'dp', title: 'DSA Dynamic Programming' },
      { id: 'greedy', title: 'DSA Greedy Algorithms' },
    ],
  },
  {
    title: 'DSA Examples',
    items: [
      { id: 'examples', title: 'DSA Examples' },
      { id: 'exercises', title: 'DSA Exercises' },
      { id: 'quiz', title: 'DSA Quiz' },
      { id: 'syllabus', title: 'DSA Syllabus' },
      { id: 'study-plan', title: 'DSA Study Plan' },
    ],
  }
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden p-4 flex items-center justify-between bg-white border-b border-gray-200">
        <h2 className="text-lg font-bold">DSA Topics</h2>
        <button onClick={toggleSidebar} className="text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 p-4 md:w-72 h-screen overflow-y-auto fixed top-0 z-40 transition-transform duration-300 md:relative md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:block`}
      >
        <h2 className="text-xl font-bold mb-4 hidden md:block">DSA Topics</h2>
        {sidebarData.map((section, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-md font-semibold mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block px-3 py-1 hover:bg-gray-200 rounded"
                    onClick={() => setIsOpen(false)} // Close on click (mobile)
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Dark overlay for mobile */}
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
