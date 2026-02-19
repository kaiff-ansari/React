import React, { useContext } from 'react'
import Nav2 from './Nav2'
import ThemeContext, { ThemeDatContext } from '../context/ThemeContext'


const Navbar = () => {

  

  return (
    <div className='nav'>
        <h2>Mohd Kaif</h2>
        <Nav2/>
    </div>
  )
}

export default Navbar