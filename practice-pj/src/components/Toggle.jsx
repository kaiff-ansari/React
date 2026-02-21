import React, { useState } from 'react'

const Toggle = () => {

    const [theme, setTheme] = useState(true);

   

  return (
    <div className='container'>

        <div className='inner' 
        style={{backgroundColor: theme ? "black" : "white"}}>

        </div>
        <button 
        onClick={() =>{

            setTheme(!theme)
        }}
        className='btn'>click</button>
    </div>
  )
}

export default Toggle