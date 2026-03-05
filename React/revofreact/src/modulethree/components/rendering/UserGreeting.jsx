import React from "react";

function UserGreeting () {
 const userName  = "Aditya Chauhan"
 const userHobby = "Running"
 const isUserFast = false
 const showDetails = true;
 const welcomeMessage = `Hello ${userName}`
 return(
    <>
    <h1> Hello {userName}</h1>
    <h1>  I know you like {userHobby}</h1>
    <p> {
        (isUserFast ) ? "Yes you are " : "NO you are not"}</p>

        <h2>{welcomeMessage}</h2>
        <p>{showDetails && <h3> React app is running perfectly </h3>}</p>
        <h1> the year is {new Date().getFullYear() }</h1>
        <h1> the year is {new Date().getMinutes() }</h1>
    </>
 )
}
export default UserGreeting;