import React from "react";

import useCounter from "./Counter"; 

function UseCounter () {
    const {count , increment , decrement} = useCounter(19) ; 

    return (
        <>

        <h1> Counter : {count}</h1>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>subtract</button>
        
        
        </>
    )
}
export default UseCounter