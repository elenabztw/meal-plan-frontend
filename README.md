# Meal Plan Frontend

A simple React app for planning and managing your meals. This frontend connects to the [Meal Plan Backend](https://github.com/elenabztw/meal-plan-backend) API built with Node.js, Express, and MongoDB.

---

## Tech Stack

- React (via Vite)
- Axios (for HTTP requests)
- CSS for styling

---

## Getting Started

### 1. Clone the repo

git clone https://github.com/elenabztw/meal-plan-frontend.git
cd meal-plan-frontend


### 2. Install dependencies
npm install

### 3. Start the development server
npm run dev
By default, it runs on: http://localhost:5173

---
API Configuration
Make sure your backend server is running at http://localhost:7000.

In your FetchMeals.jsx, your Axios base URL should point to:
axios.get("http://localhost:7000/api/meals")

If you want to use a .env file for easier configuration:
VITE_API_BASE_URL=http://localhost:7000

And then in code:
axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/meals`)

---
Folder Structure
src/
├── App.jsx
├── FetchMeals.jsx
├── MyMeals.jsx
├── index.css
└── main.jsx


Example Features
Fetch meals
Add a meal
Edit a meal
Delete a meal




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
