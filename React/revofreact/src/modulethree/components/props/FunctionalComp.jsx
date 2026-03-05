import React  from "react";

function Greeting (props){ // accepts a single argument, props.
    // child component
    return(
<> 
        <h1>{props.title}</h1>
        <h1> Hello , {props.name}</h1>
</>
    )
}
export default Greeting;
