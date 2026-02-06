import { useState } from 'react'



// custome hooks in react are functions
// that let you reuse logic across
// multiple components
// Start with "use"

function useCounter(initialValue = 0) {


  const [count, setCount] = useState(initialValue);

  const increament = () =>{

    setCount(count+1);


  };

  const decreament = () => setCount(count-1);
  const reset = () => setCount(initialValue);
  

  return {count, increament,decreament,reset};
}

export default useCounter;
