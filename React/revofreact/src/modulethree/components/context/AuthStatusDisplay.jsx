import React, { useContext } from "react";
import AuthContext, { useAuth } from "./AuthContext";

function AuthStatusDisplay () {
    const {user , isAuthenticated } = useContext(AuthContext)

    return (
        <>
        {isAuthenticated ?  (
             <h1>Welocme back , <strong>{ user.name}</strong> !</h1>
            ) :  (
                <h1> You have to login , please login to continue</h1>)
  }
  </>
    )
}
export default AuthStatusDisplay