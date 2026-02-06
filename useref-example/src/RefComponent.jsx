import React, { useState, useRef, useEffect } from 'react';


function RefComponent() {
  
  const[stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);


  useEffect(() =>{
    console.log("Component Re - renderd");
  })
  const increamentStateCount = () =>{

    setStateCount(stateCount+1);
  };

  const refCountIncreament = () =>{

      refCount.current += 1;
      console.log(`use ref ${refCount.current}`);
  };

  

  return (

    <div>
      
      <p>State Count {stateCount}</p>
      <button onClick={increamentStateCount}>Increament State button</button>

      <p>Ref Count {refCount.current}</p>
      <button onClick={refCountIncreament}>Increament Ref button</button>
      
    </div>
   
  )

  
}

export default RefComponent;