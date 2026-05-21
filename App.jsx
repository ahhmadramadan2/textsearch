import { useState, useMemo } from "react";
import "./App.css";

const ARTICLES = [
  {
    id: 1,
    title: "Getting Started with CSS Grid",
    date: "Nov 12, 2018",
    body: "CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward. This article will help you get started with grid layout and understand its core concepts.",
  },
  {
    id: 2,
    title: "A Complete Guide to Flexbox",
    date: "Oct 28, 2018",
    body: "The flexbox layout module aims to provide a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown and/or dynamic. A flex container expands items to fill available free space or shrinks them to prevent overflow.",
  },
  {
    id: 3,
    title: "Understanding the difference between grid-template and grid-auto",
    date: "Oct 09, 2018",
    body: "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns. Although I knew they were different, I wasn't sure when to use each.",
  },
  {
    id: 4,
    title: "Recreating the GitHub Contribution Graph with CSS Grid Layout",
    date: "Sep 28, 2018",
    body: "In this tutorial, we will use CSS Grid to recreate the famous GitHub contribution calendar graph. It's a clean use case for CSS Grid auto-fill and area placement. We'll also explore how to generate the data dynamically using JavaScript.",
  },
  {
    id: 5,
    title: "How to Build a Responsive Navigation Bar",
    date: "Sep 14, 2018",
    body: "In this article, we will learn how to create a responsive navigation bar using HTML and CSS. We will use flexbox to align navigation items and media queries to handle the mobile layout with a hamburger menu toggle for smaller screens.",
  },
  {
    id: 6,
    title: "JavaScript Promises Explained",
    date: "Aug 30, 2018",
    body: "Promises represent the eventual completion or failure of an asynchronous operation and its resulting value. A Promise is a returned object to which you attach callbacks instead of passing callbacks into a function. Chaining and error handling make async code much cleaner.",
  },
  {
    id: 7,
    title: "An Introduction to React Hooks",
    date: "Aug 18, 2018",
    body: "Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class component. useState, useEffect, and useContext are among the most commonly used hooks in modern React development. Hooks simplify component logic considerably.",
  },
  {
    id: 8,
    title: "CSS Custom Properties and Variables",
    date: "Jul 25, 2018",
    body: "CSS Custom Properties allow you to define reusable values throughout a CSS document. They are set using custom property notation and are accessed using the var() function. This makes theming and dynamic runtime styling much simpler and more maintainable.",
  },
  {
    id: 9,
    title: "Building Accessible Web Forms",
    date: "Jul 10, 2018",
    body: "Web accessibility is essential for ensuring everyone can use your application. In this post, we cover ARIA labels, semantic HTML, keyboard navigation, and focus management to create forms that work for all users including those relying on screen readers.",
  },
  {
    id: 10,
    title: "Understanding CSS Specificity",
    date: "Jun 20, 2018",
    body: "CSS specificity determines which styles are applied when multiple rules target the same element. Specificity is calculated based on inline styles, IDs, classes, and element types. Mastering specificity prevents hard-to-debug styling conflicts in large stylesheets.",
  },
  {
    id: 11,
    title: "Mastering CSS Animations and Transitions",
    date: "Jun 05, 2018",
    body: "CSS transitions and animations allow you to create smooth visual effects without JavaScript. Transitions handle state changes like hover effects, while animations use keyframes for more complex multi-step sequences. Both greatly improve perceived user experience.",
  },
  {
    id: 12,
    title: "Vue.js vs React: Choosing the Right Framework",
    date: "May 22, 2018",
    body: "React and Vue.js are two of the most popular JavaScript frameworks for building user interfaces. React uses JSX and a one-way data flow philosophy, while Vue.js uses single-file components with a more approachable template syntax. Both are excellent choices for modern web applications.",
  },
  {
    id: 13,
    title: "Grid vs Flexbox: When to Use Each",
    date: "May 08, 2018",
    body: "Grid and Flexbox are both powerful CSS layout tools but serve different purposes. Flexbox is best for one-dimensional layouts along a single axis, while CSS Grid excels at two-dimensional layouts. Knowing when to use each tool is a key skill for any front-end developer.",
  },
  {
    id: 14,
    title: "An Introduction to TypeScript",
    date: "Apr 15, 2018",
    body: "TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, classes, and interfaces. TypeScript helps catch errors at compile time and significantly improves the developer experience in large codebases.",
  },
  {
    id: 15,
    title: "Lazy Loading Images for Better Performance",
    date: "Apr 01, 2018",
    body: "Lazy loading defers the loading of images that are not visible in the viewport until the user scrolls near them. This technique significantly reduces initial page load time and saves bandwidth for users who never scroll to every image on the page.",
  },
];

function highlight(text, query) {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i}>{part}</mark>
    ) : (
      part
    )
  );
}

export default function App() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return ARTICLES;
    const q = query.toLowerCase();
    return ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.body.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="app">
      <div className="sidebar">
        <div className="brand">
          <span className="brand-dot" />
          <span className="brand-name">bitsofcode</span>
        </div>
        <p className="brand-tagline">Articles on Frontend Development.</p>
        <p className="brand-author">
          All articles are written by{" "}
          <a
            href="https://ireaderinokun.com"
            target="_blank"
            rel="noreferrer"
            className="brand-link"
          >
            Ire Aderinokun
          </a>
          , Frontend Developer and User Interface Designer.
        </p>
      </div>

      <main className="main">
        <h1 className="page-title">Search</h1>

        <div className="search-wrapper">
          <svg className="search-icon" viewBox="0 0 20 20" fill="none">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            className="search-input"
            type="text"
            placeholder="Search articles…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <button className="clear-btn" onClick={() => setQuery("")} aria-label="Clear">
              <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>

        <p className="result-count">
          {query.trim() ? (
            <>
              <strong>{results.length} post{results.length !== 1 ? "s" : ""}</strong>{" "}
              were found.
            </>
          ) : (
            <>
              Showing all <strong>{ARTICLES.length}</strong> articles.
            </>
          )}
        </p>

        <div className="articles">
          {results.length === 0 ? (
            <div className="empty-state">
              <svg viewBox="0 0 48 48" fill="none" width="40" height="40">
                <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="2" />
                <path d="M32 32l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 22h10M22 17v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="17" y1="22" x2="27" y2="22" stroke="none" />
              </svg>
              <p>No results for &ldquo;{query}&rdquo;</p>
            </div>
          ) : (
            results.map((article) => (
              <article className="card" key={article.id}>
                <h2 className="card-title">{highlight(article.title, query)}</h2>
                <time className="card-date">{article.date}</time>
                <p className="card-body">{highlight(article.body, query)}</p>
              </article>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
