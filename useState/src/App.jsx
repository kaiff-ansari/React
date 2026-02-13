import React, { useState } from 'react'

const App = () => {

  const [count, SetCount] = useState(0);
  return (
    <div className='parent'>
      
    
    <h1>{count}</h1>
    <button onClick={() =>{
      SetCount(count+1)
    }}>Increase</button>

    <button onClick={() =>{

      SetCount(count-1)
    }}>Decrease</button>

    </div>
  )
}

export default App