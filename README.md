# Text Search

A React application that lets users search through a collection of frontend development articles. Matching keywords are highlighted in real time as the user types.

## Features

- Live search filtering across article titles and body text
- Keyword highlighting for every match in both title and body
- Result count updates dynamically
- Clear button to reset the search
- Fully responsive layout (sidebar collapses on mobile)

## Tech Stack

- **React 18** with hooks (`useState`, `useMemo`)
- **Vite** for development and bundling
- Plain CSS (no CSS-in-JS or utility framework)

## Running the App

### Prerequisites

- Node.js 18+ installed

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
text-search/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx       # React entry point
    ├── index.css      # Global reset
    ├── App.jsx        # Main component + ARTICLES constant + highlight logic
    └── App.css        # All styles
```

## How It Works

1. `ARTICLES` is a constant array of 15 article objects stored in `App.jsx`.
2. On each keystroke, `useMemo` filters articles whose `title` or `body` includes the query (case-insensitive).
3. The `highlight()` function splits each string by the query and wraps matches in a `<mark>` element.
