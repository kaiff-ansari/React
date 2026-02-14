import React, { useEffect, useState } from 'react'



const App = () => {

  const [count , setCount] = useState(0);
  const [a,setA] = useState(10)


  useEffect(function() {

    console.log("use effect is running")
  },[a])
  return (
    <div>
      
      <h1>count: {count}</h1>
      <h1>A: {a}</h1>
      <button onClick={() =>{

        setCount(count+1)
        
      }}>increase</button>

      <button onClick={() =>{
        setA(a+10)
      }}>increae5</button>

     
      
    </div>
  )
}

export default App