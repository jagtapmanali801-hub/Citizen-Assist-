# Citizen Assist

This version separates the original single HTML file into a cleaner VS Code project structure.

## Structure

Citizen-Assist/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── main.js
    ├── chatbot.js
    └── checklist.js

## Run

### Easiest
Open `index.html` with VS Code Live Server.

### If you already use Live Server
Right-click `index.html` → **Open with Live Server**.

The website should open at an address similar to:

http://127.0.0.1:5500/index.html

## What is separated?

- `index.html` → website structure/content
- `css/style.css` → custom design
- `js/main.js` → navigation, search, services, guides, language, accessibility
- `js/chatbot.js` → chatbot
- `js/checklist.js` → guide checklist/progress

This is the frontend structure. Python/SQL/API can be added later when the real AI chatbot backend and database are connected.
