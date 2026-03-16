import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({children}){
    const [theme , setTheme ] =  useState('light')

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light') ? 'dark' : 'light')
    }
    const contextValue = {
        theme , 
        setTheme : toggleTheme
    }
return (
    <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
)
}
export default ThemeProvider
