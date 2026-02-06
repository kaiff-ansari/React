import React, { useState } from 'react'

import './App.css'
import useCounter from './useCounter'

// custome hooks in react are functions
// that let you reuse logic across
// multiple components
// Start with "use"

function App() {


  const {count, increament,decreament,reset} = useCounter(0);
 

  return (

    <div>

      <h2>count : {count}</h2>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={reset}>Reset</button>
    </div>
   
  )
}

export default App

