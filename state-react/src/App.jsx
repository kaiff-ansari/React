
import './App.css'
import { useState } from 'react';


function App() {
  
  /* const [count, setCount] = useState(0);

  const increamentTwice = () =>{
    setCount(c => c + 1);
    setCount(c => c + 1);
  }

  const Increament = () =>{
    setCount(count + step);
  }

  const Decreament = () =>{
    setCount(count - step);
  }

  const [step, setStep] = useState(1); */

  // Passing Arrays as Object to state

  const [counters, setCounter] = useState([{id : 1, value : 0}])

  const addCounter = () =>{

    setCounter([...counters, {id: counters.length+1, value : 0}])

  };

  const increamentCounter = (id) =>{

    setCounter(counters.map(counter => 
      counter.id === id ? {...counter, value : counter.value+1} : counter
    )
    );
  };
  return (
    
    <div className='app-container'>
     {/*  <h1>Counter value : {count} </h1>

        <input type="number" value={step} onChange={(e) => setStep(parseInt(e.target.value))} />
      <button onClick={Increament}>Increament</button>
      <button onClick={Decreament}>Decreament</button> */}


      <button onClick={addCounter}>Add Counter</button>
      <ul>
        
        {counters.map(counter =>
          <li key={counter.id}>
            Counter {counter.id} : {counter.value}
            <button onClick={() => increamentCounter(counter.id)}>Increament</button>

          </li>
        )}
      </ul>

    </div>
      
  );
}

export default App;
