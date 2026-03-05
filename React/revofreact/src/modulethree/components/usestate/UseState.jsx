import React, { useState } from "react";

function DemoUseState(){

    const [count , setCount] = useState(1000);

    const increment = () => {
        setCount(prevCount => prevCount + 2); 
    }
        const decrement = () => {
        setCount( prevCount => prevCount - 1); 
    }
    return (
        <>
        <h1> Count : {count}</h1>
        <button onClick = {increment} style={{color:"black"}}> Increment </button>
        <button onClick = {decrement}> Decrement </button>
        </>
    )
}
export default DemoUseState;