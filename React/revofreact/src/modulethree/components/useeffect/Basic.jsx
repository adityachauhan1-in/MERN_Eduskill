import React, { useEffect } from "react";

function BasicUseEffect (){
 
    useEffect (() => {
      // this code runs after the components render  
        console.log("Hii this is basic of useEffect hook (mounting and updating)")

    })
    return(
        <>
        <h1> Hi this is useEfect example</h1>
                </>
    )
}
export default BasicUseEffect