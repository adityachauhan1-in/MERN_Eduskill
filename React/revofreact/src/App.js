import { useState } from 'react';
import './App.css';
import BasicUseEffect from './modulethree/components/useeffect/Basic';
import CountDown from './modulethree/components/useeffect/CountDown';
import ApiPost from './modulethree/components/useeffect/ExternalPostApi';
import RunningEffect from './modulethree/components/useeffect/RunningEffect';
import ControlledInput from './modulethree/components/usestate/ControlledInput';
// import DemoUseState from './modulethree/components/UseState';
import UserProfile from './modulethree/components/usestate/Setupdate';
import ToDo from './modulethree/components/usestate/TodoList';
import UserData from './modulethree/components/useeffect/UserDataApi';
// Parent component 
function App() {
  const[currUserId , setCurrUserId] = useState(1)
  return (
    <> 
{/* <DemoUseState/> */}
{/* <UserProfile/>
<ControlledInput/>
<ToDo/> */}
{/* <BasicUseEffect/> */}
{/* <RunningEffect/> */}
{/* <h1>New Post here </h1>
<ApiPost/>
<h1> Timer Example</h1>
<CountDown   initialSecond = {10}/> */}


{/* new live practical userdata fetching  */}
<h1>Practical Example of fetching data</h1>

 <h1> Current User Id is : {currUserId}</h1>
 <UserData userId={currUserId}/>
 <button onClick={()=> setCurrUserId(currUserId + 1)}>Next User ( Id : {currUserId + 1})</button>

</>
 )
}

export default App;
