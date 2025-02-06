import { useState } from "react";
import { CSFContext } from "./CSF.js";

export default function CSFProvider({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <CSFContext.Provider
            value={{ menuOpen, setMenuOpen }}
        >
            {children}
        </CSFContext.Provider>
    );
}
