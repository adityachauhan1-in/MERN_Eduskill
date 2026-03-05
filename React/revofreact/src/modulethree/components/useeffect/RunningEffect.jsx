import React, { useEffect, useState } from "react";

function RunningEffect (){
    const [count , setCount] = useState(10);

    useEffect (() => {
        console.log("I am re run at everytime state is change")
    } , [])
const increment = () => {
    setCount(prevCount => prevCount +2)
}
const decrement = () => {
    setCount(prevCount => prevCount - 3)
}
return (
<>
 <h1>Count : {count}</h1>
 <button onClick={increment}> Increment </button> 
 <button onClick={decrement}> Decrement </button> 
 </>
)
}
export default RunningEffect