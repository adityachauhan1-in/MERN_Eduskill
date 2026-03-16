import React from "react";

const defaultTheme = {
    theme : 'light',

    setTheme :  () => {}
}

const ThemeContext = React.createContext(defaultTheme);
export default ThemeContext;


