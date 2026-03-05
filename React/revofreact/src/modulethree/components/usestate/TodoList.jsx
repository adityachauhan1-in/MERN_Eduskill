import { useState } from "react";
 
function ToDo (){
const [todo , setToDo] = useState(['React Learn' , 'Build a project']);
const  [newTodo , setNewTodo] = useState('');

const handleInputChange = (event) =>{
    // event.prevent.default;
      setNewTodo(event.target.value);
}   
// add task into the list 
const addItem = () => {
    if(newTodo.trim !== '' ) // if not empty 
    {
    setToDo( prevTodo => [...prevTodo , newTodo])
    setNewTodo('');
}

}
// for removing 
const removeTodo = (indextoRemove) => {
    setToDo(prevTodo =>  prevTodo.filter((_,index) => index !== indextoRemove));
}

 return (
        <>
        <h2>Date is : {}</h2>
        <h1> To do list </h1>
        <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new Task"/>
        <button onClick={addItem}> Add </button>
    <ul>
        {todo.map((todos,index) => (
            <li key={index}> {todos}
            <button onClick={() => removeTodo(index)}> 
                Remove </button>
            </li>
    )    )}
    </ul>
    
        </>
    )

}
export default ToDo