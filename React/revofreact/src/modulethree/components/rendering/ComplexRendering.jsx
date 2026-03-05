import React from "react";

function UserStatus({isLoggedIN}){
    let stautsMessage ;
 const ifFunction = () => {
    if(isLoggedIN){
      return   stautsMessage =  <h1> "You are logged in "</h1>
    }
    else {
       return stautsMessage  = <h1>"Please Login guys"</h1>
    }
 }
    return (
        <div>

            {/* {stautsMessage} */}
    {ifFunction()} 
        </div>
    )
}
export default UserStatus;