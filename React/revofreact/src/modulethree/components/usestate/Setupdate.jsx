import React from "react";
import { useState } from "react";

// setter function for object
function UserProfile (){
    const [profile , setProfile] = useState({
        name : "Aditya",
        age : 21 , 
        city : "Meerut"
    })

    const updateCity =  (newCity) => {
    // copy previous state 
    setProfile(prevUser => ({
        ...prevUser , // spread the previous details 
      city : newCity}))         // 
    }

    return(
        <>
        <h1>Name : {profile.name}</h1>
        <h1>Age : {profile.age}</h1>
        
            <h1 onClick={() => updateCity('Noida')}>City : {profile.city}</h1>
            <button onClick={() => updateCity('Noida')}>Change City</button>
        </>
    )
}
export default UserProfile