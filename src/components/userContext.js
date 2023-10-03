import React, { createContext, useContext, useEffect, useState } from 'react';


//createContext is a function from React that creates a new context object,
//in this case, its userContext
const UserContext = createContext();

//useUser is the custom hook
export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user'); 
        return storedUser ? JSON.parse(storedUser) : {}; 
    });

useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
}, [user]);


    return(
        <UserContext.Provider value={{ user , setUser }}>
            {children}
        </UserContext.Provider>
    );
}