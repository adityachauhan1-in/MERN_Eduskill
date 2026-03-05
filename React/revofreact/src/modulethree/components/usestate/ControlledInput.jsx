import React  , {useState} from "react";

function ControlledInput (){
    const [inputValue , setInputValue] = useState('')
const handleChange = (event) => {
    setInputValue(event.target.value)
}
    return (
        <>
        <label>
            Enter Text : 
            <input 
            type="text"
             value={inputValue}
             onChange={handleChange}
             />
            
            
        </label>
        <p> Content for : {inputValue}</p>
        </>
    )
}
export default ControlledInput
