import React, { createContext, useContext } from "react";

const userDetails = createContext({
    user : null , 
    login : (userName) => {} , 
    logout : () => {} , 
    isAuthenticated : false 
})

// custom hook for easier consumption 
const AuthContext = createContext(userDetails)
export default AuthContext