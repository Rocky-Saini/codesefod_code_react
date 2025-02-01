import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




// public /: Stores static assets like the index.html file.
// src /: The core project directory where all React code resides.
// assets /: Stores images, icons, fonts, and styles.
// components /: Contains reusable UI components(e.g., Button, Card).
// hooks /: Custom React hooks for shared logic(e.g., useAuth, useFetch).
// layouts /: Shared layout components(e.g., Navbar, Sidebar).
// pages /: Each page of the app(e.g., Home, Dashboard).
// services /: API calls and business logic(e.g., authService.js).
// store /: State management(if using Redux, Zustand, or Context API).
// utils /: Common helper functions(e.g., formatDate.js).
// App.jsx: The root component of the React app.
// main.jsx: The entry point for rendering the React app.
// routes.jsx: Defines navigation using React Router.
