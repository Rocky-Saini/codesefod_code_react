// routes.js
import { Route, Routes } from "react-router";
import App from "./App.jsx";
import RootLayout from "./components/layout/RootLayout.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route
                    path="contact"
                    element={<Contact />}
                />
            </Route>
        </Routes>
    );
};
