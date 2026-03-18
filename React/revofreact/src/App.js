import React from 'react';
import './App.css';
import {useDispatch , useSelector} from 'react-redux'


// Parent component 
function App() {
    const count = useSelector((state) => state.count); // Access state
  const dispatch = useDispatch(); // Get dispatch function

    const incrementAction = () => ({ type: 'Increment' });
  const decrementAction = () => ({ type: 'Decrement' });
  return (
    <>
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Basic Redux Counter</h1>
      <h2>Current Count: {count}</h2>
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => dispatch(incrementAction())}>Increment</button>
        <button onClick={() => dispatch(decrementAction())} style={{ marginLeft: '10px' }}>
          Decrement
        </button>
      </div>
    </div>
</>
 )
}

export default App;
