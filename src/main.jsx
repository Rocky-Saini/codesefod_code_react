import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes";
import App from "./App.jsx";
import CSFProvider from "./components/context/CSFContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CSFProvider>
            <App />
        </CSFProvider>
    </StrictMode>
);
