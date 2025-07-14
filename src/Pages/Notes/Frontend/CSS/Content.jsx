import React from 'react';
import Sidebar from './Sidebar';

const sections = [
  {
    id: "introduction",
    title: "Introduction to CSS",
    content: "CSS (Cascading Style Sheets) is used to control the presentation of HTML elements. It allows you to apply styles like colors, spacing, layouts, fonts, and responsiveness to web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    id: "selectors",
    title: "CSS Selectors",
    content: "Selectors target HTML elements to apply styles. Types include: universal (*), element (div), class (.class), ID (#id), attribute ([type='text']), pseudo-classes (:hover), and more.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"
  },
  {
    id: "specificity",
    title: "Specificity and Inheritance",
    content: "Specificity determines which rule is applied when multiple rules target the same element. Inline > ID > Class > Element. Inheritance means some properties are passed down automatically from parent to child.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"
  },
  {
    id: "box-model",
    title: "Box Model",
    content: "Every HTML element is a box composed of four layers: content, padding, border, and margin. Understanding the box model is crucial for layout control and spacing.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model"
  },
  {
    id: "display",
    title: "Display Property",
    content: "The display property defines how an element is rendered. Common values include block, inline, inline-block, none, flex, and grid. It plays a key role in layout behavior.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/display"
  },
  {
    id: "positioning",
    title: "Positioning",
    content: "Position controls how an element is placed in the document. Types include static (default), relative, absolute, fixed, and sticky. Each behaves differently in relation to the parent/viewport.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/position"
  },
  {
    id: "z-index",
    title: "Z-Index",
    content: "z-index controls the vertical stacking order of overlapping elements. It only works on elements with position values other than static. Higher values appear on top.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"
  },
  {
    id: "units",
    title: "Units in CSS",
    content: "CSS supports absolute units (px, cm, in) and relative units (%, em, rem, vw, vh). Relative units help build responsive designs and scale better across devices.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"
  },
  {
    id: "typography",
    title: "Typography",
    content: "Typography properties in CSS include font-family, font-size, font-weight, line-height, letter-spacing, and text-align. These control how text appears and flows on the page.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Typography"
  },
  {
    id: "colors",
    title: "Colors, Gradients & Transparency",
    content: "Colors can be applied using names, hex, rgb(), hsl(), and rgba(). CSS also supports linear-gradient and radial-gradient for smooth color transitions. Use opacity or rgba for transparency.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"
  },
  {
    id: "backgrounds",
    title: "Backgrounds and Borders",
    content: "CSS allows styling element backgrounds with color, image, position, repeat, and size. Borders can be styled with width, color, radius (rounded corners), and different styles like solid, dashed, etc.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/background"
  },
  {
    id: "flexbox",
    title: "Flexbox",
    content: "Flexbox is a one-dimensional layout method that makes it easy to align and distribute space among items. Use display: flex; along with justify-content, align-items, flex-wrap, and gap.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout"
  },
  {
    id: "grid",
    title: "CSS Grid",
    content: "CSS Grid is a two-dimensional layout system for defining both rows and columns. Use display: grid; and define grid-template-rows, grid-template-columns, gap, and grid-area for layout control.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
  },
  {
    id: "media-queries",
    title: "Responsive Design & Media Queries",
    content: "Media queries allow you to apply CSS rules based on screen size, resolution, or orientation. It's essential for building responsive and mobile-first websites.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries"
  },
  {
    id: "pseudo-classes",
    title: "Pseudo-classes",
    content: "Pseudo-classes define a special state of an element. Examples include :hover, :focus, :nth-child(), :checked. They allow styling based on interaction or position in DOM.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"
  },
  {
    id: "pseudo-elements",
    title: "Pseudo-elements",
    content: "Pseudo-elements let you style specific parts of an element. ::before and ::after insert virtual elements, while ::first-line and ::first-letter style parts of text.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements"
  },
  {
    id: "transitions",
    title: "Transitions & Animations",
    content: "CSS transitions allow smooth changes between property values. Animations allow complex keyframe-based movement. Use transition, animation, @keyframes, and animation-timing-function.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations"
  },
  {
    id: "transform",
    title: "Transform",
    content: "Transform allows you to rotate, scale, skew, or translate elements in 2D or 3D space. Examples: transform: rotate(45deg); scale(1.5); translateX(20px).",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform"
  },
  {
    id: "variables",
    title: "CSS Variables (Custom Properties)",
    content: "CSS variables let you define reusable values with --name syntax. They're scoped and can be changed with JavaScript or media queries. Example: --main-color: #3498db;",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
  },
  {
    id: "important",
    title: "!important keyword",
    content: "The !important rule overrides all other conflicting declarations. Use it sparingly as it breaks the natural cascade and can make debugging harder.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#the_important_exception"
  },
  {
    id: "combinators",
    title: "Combinators (>, +, ~, space)",
    content: "Combinators define relationships between selectors. ' ' (descendant), '>' (child), '+' (adjacent sibling), and '~' (general sibling). Useful for targeting specific elements structurally.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#combinators"
  },
  {
    id: "calc",
    title: "calc(), clamp(), and min()/max() functions",
    content: "CSS math functions allow responsive and dynamic sizing. calc() combines units, clamp() sets scalable constraints, and min()/max() chooses the best fit value.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/calc"
  },
  {
    id: "shorthand",
    title: "Shorthand Properties",
    content: "Shorthand properties combine multiple styles into one. Example: margin: 10px 20px; (top/bottom and left/right). Saves space and improves readability.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties"
  },
  {
    id: "overflow",
    title: "Overflow Handling",
    content: "Controls content that exceeds its container. Values: visible (default), hidden, scroll, auto. Combine with white-space and text-overflow for text.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow"
  },
  {
    id: "visibility",
    title: "Visibility vs Display vs Opacity",
    content: "display: none removes the element completely. visibility: hidden hides it but keeps the space. opacity: 0 makes it invisible but interactive.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/visibility"
  },
  {
    id: "resets",
    title: "CSS Reset vs Normalize.css",
    content: "CSS Resets remove browser default styling. Normalize.css preserves defaults and fixes inconsistencies across browsers. Helps in building consistent layouts.",
    link: "https://necolas.github.io/normalize.css/"
  },
  {
    id: "best-practices",
    title: "Best Practices in CSS",
    content: "Use semantic class names, avoid !important, follow BEM naming, use external stylesheets, and keep code modular. Emphasize responsive design and accessibility.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing"
  },
  {
    id: "preprocessors",
    title: "CSS Preprocessors (SASS/SCSS)",
    content: "Preprocessors like SASS extend CSS with variables, nesting, mixins, and functions. They compile to standard CSS and make large-scale styling easier to manage.",
    link: "https://sass-lang.com/guide"
  },
  {
    id: "frameworks",
    title: "CSS Frameworks (Tailwind, Bootstrap)",
    content: "Frameworks offer pre-written CSS classes or utility-first tools. Tailwind CSS is utility-first; Bootstrap provides responsive UI components. They speed up development.",
    link: "https://tailwindcss.com/docs" 
  },
  {
    id: "interview-questions",
    title: "CSS Interview Topics & Common Questions",
    content: "Know the difference between inline vs block, specificity, box model, flex vs grid, responsive design, z-index behavior, and debugging techniques in dev tools.",
    link: "https://www.geeksforgeeks.org/css-interview-questions/"
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
