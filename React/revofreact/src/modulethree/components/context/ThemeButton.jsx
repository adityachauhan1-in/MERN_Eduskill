import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function ThemeButton() {
    const {theme , setTheme} = useContext(ThemeContext)

    const buttonStyle = {
        backgroundColor : theme === 'light' ? '#f0f0f0' : '#333',
        padding : '10px 20px' , 
        border : 'none' , 
        borderRadius : '5px' , 
        cursor : 'pointer' , 
        margin : '10px'
    }

    return (
        <>
        <button style={buttonStyle} onClick={setTheme}>
            Switch to {theme === 'light' ?  'Dark' : 'Light'} Mode

        </button>
        </>
    )
}
export default ThemeButton
