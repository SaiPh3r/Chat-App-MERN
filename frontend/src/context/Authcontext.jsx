import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(() => {
        return JSON.parse(localStorage.getItem("chat-user")) || null;
    });

    // Update localStorage whenever authUser changes
    useEffect(() => {
        if (authUser) {
            localStorage.setItem("chat-user", JSON.stringify(authUser));
        } else {
            localStorage.removeItem("chat-user"); // Remove if user logs out
        }
    }, [authUser]);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
