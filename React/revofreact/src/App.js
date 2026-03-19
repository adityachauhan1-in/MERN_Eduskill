import React from 'react';
import './App.css';
import {Routes , Route } from 'react-router-dom'
import DashBoardLayout from './module_6/NestedRoutes/DashBoard';
import DashOverview from './module_6/NestedRoutes/DashOverview';
import DashSetting from './module_6/NestedRoutes/DashSetting';
import DashProfile from './module_6/NestedRoutes/DashProfile'
// Parent component 
function App() {
  
  return (
    <>
    <div style={{ padding: '20px', textAlign: 'center' }}>
   <Routes>
    <Route path='/' element={<DashBoardLayout/>}/>
    {/* child components below it  */}
    <Route path='overview' element={<DashOverview/>}/>
    <Route path='profile' element={<DashProfile/>}/>
    <Route path='setting' element={<DashSetting/>}/>

    {/* default child component */}
    <Route index element = {<DashProfile/>}/>
      </Routes>
    </div>
</>
 )
}

export default App;
