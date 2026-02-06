import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RefComponent from './RefComponent'

function App() {

  const inputRef = useRef(null);

  const focusInput = () =>{

    //console.log(inputRef);

    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';
  };

  const resetFocus = () =>{
     inputRef.current.style.backgroundColor = 'blue';
  };
  
  return (

     <div>
      <h1>Hello</h1>
      <input ref={inputRef} type="text" placeholder='Focus me' />
      <button onClick={focusInput}>Focus</button>

      <button onClick={resetFocus}>Reset</button>
      
     </div>
  )
}

export default App
