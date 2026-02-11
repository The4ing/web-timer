# ⏱️ WebTimer - React Migration Project

This project marks the successful migration of a **Vanilla JavaScript** stopwatch application into a modern, component-based **React** application. It focuses on high-precision timing, state management, and efficient rendering.

## 🚀 Features
- **High Precision:** Uses `Date.now()` to calculate elapsed time accurately down to the millisecond.
- **Component-Based Architecture:** Logic and UI are separated into modular components (`Header`, `Buttons`).
- **Optimized Performance:** Leverages `useRef` to handle high-frequency updates (10ms) without unnecessary re-renders.
- **Responsive Design:** Clean and accessible UI that works across various devices.

## 🛠️ Tech Stack
- **React 18** (Functional Components & Hooks)
- **Vite** (Frontend Tooling)
- **CSS3** (Custom Styling)
- **JavaScript (ES6+)**

## 🏗️ Project Structure
The code is organized to maintain a clear separation of concerns:
- `App.jsx`: The "Brain" of the app. Manages global state, refs, and the core timer logic.
- `Buttons.jsx`: A presentational component that receives control functions via **Props**.
- `Header.jsx`: Static component for the application branding.
- `timeToString.js`: A utility function (Helper) that formats raw milliseconds into a readable `HH:MM:SS` string.