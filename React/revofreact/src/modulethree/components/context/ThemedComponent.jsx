import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function ThemedComponent () {
    const {theme , setTheme} = useContext(ThemeContext)

    const componentStyle  = {
        backgroundColor : theme === 'light' ? '#ffffff' : 'rgb(91, 200, 230)' ,
        color : theme === 'light' ? '#333' : '#fff', 
        padding : '30px' , 
        borderRadius : '10px' , 
        margin : '20px' , 
         boxShadow:
      theme === 'light'
        ? '0 4px 8px rgba(0,0,0,0.1)'
        : '0 4px 8px rgba(255,255,255,0.1)',
        transition : 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease'
  
    }
    const headingStyle = {
        fontSize : '2rem',
        marginBottom : '20px',
         color: theme === 'light' ? '#007bff' : '#61dafb',
    }
    return (
        <div style={componentStyle}>
            <h1 style={headingStyle}> Current Theme : {theme.toUpperCase}</h1>
            <p>This content dynamically change its appearance based on the selected theme</p>
            <p>This Context API allows sharing of state without prop drilling </p>

        </div>
    )
}
export default ThemedComponent