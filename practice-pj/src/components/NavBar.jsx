import React, { useContext } from 'react'
import { ContextTheme } from '../ThemeContext'

const NavBar = () => {

 const [theme] = useContext(ContextTheme)
  return (
    <div>


        <div className='nav'>
            <h4>Home</h4>
            <h4>Contact</h4>
            <h4>About</h4>
            <h4>{theme}</h4>
        </div>
    </div>
  )
}

export default NavBar