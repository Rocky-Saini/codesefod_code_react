import { createContext, useContext } from "react";

export const CSFContext = createContext();

export const useCSF = () => {
    const context = useContext(CSFContext);
    if (!context) {
        throw new Error(
            "useCSF must be used within a CSFProvider"
        );
    }
    return context;
};
