import  { useState } from "react";

function useCounter(initialValue) {
    const [count , setCount]  = useState(initialValue);

    const increment = () => {
        setCount(prevCount => prevCount + 2) ; 
    }
const decrement = () => {
        setCount(prevCount => prevCount - 7) ; 
    }

    return {count ,  increment , decrement}
}
export default useCounter
