import { useContext, useState } from 'react';
import './App.css';


import ThemeProvider from './modulethree/components/context/ThemeProvider';
import ThemeContext from './modulethree/components/context/ThemeContext';
import ThemeButton from './modulethree/components/context/ThemeButton';
import ThemedComponent from './modulethree/components/context/ThemedComponent';
import AuthProvider from './modulethree/components/context/AuthProvider';
import AuthStatusDisplay from './modulethree/components/context/AuthStatusDisplay';
import LoginLogoutButton from './modulethree/components/context/LoginLogoutButton';
// Parent component 
function App() {
  const {theme , setTheme}  = useContext(ThemeContext) 
  return (
    <>
    <AuthProvider>
  <ThemeProvider>  

    <ThemeButton/>
<ThemedComponent/>
<AuthStatusDisplay/>
<LoginLogoutButton/>
 </ThemeProvider>
  </AuthProvider>

</>
 )
}

export default App;
