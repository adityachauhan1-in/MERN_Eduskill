import { useState } from 'react';
import './App.css';

import UserData from './modulethree/components/useeffect/UserDataApi';
import UseCounter from './modulethree/components/customHook/UseCounter';
// Parent component 
function App() {
  const[currUserId , setCurrUserId] = useState(1)
  return (
    <> 

<h1>Practical Example of fetching data</h1>

 <h1> Current User Id is : {currUserId}</h1>
 <UserData userId={currUserId}/>
 <button onClick={()=> setCurrUserId(currUserId + 1)}>Next User ( Id : {currUserId + 1})</button>
 <UseCounter/>
</>
 )
}

export default App;
