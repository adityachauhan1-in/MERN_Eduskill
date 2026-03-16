import React, { useState } from "react";
import AuthContext, { useAuth } from "./AuthContext";
function AuthProvider  ({children}){
    const [user , setUser ] = useState(null) 

    const login = ({userName}) => {
        setUser({name : userName})
        // in real app you will handle tokens , api calls 
    }

    const logout = () => {
        setUser(null)
    }

    const isAuthenticated = !!user
    const contextValue = {
        user , login , logout , isAuthenticated
}
return (
    <AuthContext.Provider   value = {contextValue}>
        {children}
    </ AuthContext.Provider  >
)
}
export default AuthProvider