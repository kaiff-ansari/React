import React, { useEffect, useRef, useState } from 'react'

const NewClock = () => {

    const [time, setTime] = useState(0)

    const intervalRef = useRef(null)

    const StartClock = () =>{

        if(intervalRef.current !== null){
            return
        }

        intervalRef.current = setInterval(() =>{

            setTime((prevTime) => prevTime + 1);
        },1000);
    }

    const clockStop = () =>{

        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    const StopClock = () =>{

        setInterval(() =>{
            
        })
    }

    const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };

    useEffect(() =>{

        return () => clearInterval(intervalRef.current);

        
    },[])
  return (
    <div className='hue'>

    <h2> {time}</h2>
    <button onClick={StartClock}> Start</button>
    <button onClick={clockStop}> Stop</button>
    <button onClick={handleReset}> Reset</button>

    </div>
  )
}

export default NewClock