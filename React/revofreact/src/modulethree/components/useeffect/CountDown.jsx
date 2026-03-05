import React , {useEffect , useState} from "react";
 function CountDown({initialSecond}) { // from outside 
const [secondRemaining , setSecondRemaining] = useState(initialSecond);
    
// start timing 
useEffect (() => {
    if(secondRemaining <= 0){
        console.log("The timer is finished")
        return
    }
     
    // start 
    console.log(` The countdown will starts at ${secondRemaining} seconds`)

     const timerId = setInterval(() => {
        setSecondRemaining (prevCount => {
            const nextSecond = prevCount - 1

            if(nextSecond == 0){
                console.log("Time is Finished")
            }
            return nextSecond;
        })
     },1000) // update every 1 second 
 // clean Up function 
 return () =>{
    console.log("clean up function , cleared interval")
    clearInterval(timerId)
 }
    } ,[secondRemaining])
 return  (
    <>
    <h1>CountDown for new year</h1>
    <h2> Only {secondRemaining} second left !</h2>
    {secondRemaining === 0 && <p> Happy New Year Guys !🎉</p>}
    </>
 )
}
export default CountDown