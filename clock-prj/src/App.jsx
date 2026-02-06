import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [time, setTime] = useState((new Date));

  useEffect(() =>{
    
   const timerID = setInterval(() => setTime(new Date()),1000);

   return () => clearInterval(timerID);
  
  },[]);

  const formattedTime = time.toLocaleTimeString('un-US',
   {
    hour : '2-digit',
    minute : '2-digit',
    second : '2-digit'
   } ,
  )
  return (

    <div className='clock-container'>

      <div className='clock'>
      {formattedTime}
      </div>

      
    </div>
   
  );
}

export default App
