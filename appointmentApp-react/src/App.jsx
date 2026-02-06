import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
   
    <div className='Form'>

      <form>

        <div className='text'>
          <label htmlFor="name">Name</label>
        <input type="text"
         placeholder='enter your name'
          id='name' 
          />

        </div>

        <div className='passy'>
          <label htmlFor="pass">Password</label>
          <input
           type="password" 
           id='pass' 
           />
        </div>

        <button>register</button>
        <button>login</button>

        
      </form>
    </div>
  )
}

export default App
