import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MouseTracker() {
  
 const [mousePosition, setMousePosition] = useState({x:0, y:0});

 

/* useEffect(() => {
   console.log("use effect triggered");
  },[count]); */


  useEffect(() =>{

    const mouseTracker = (event) =>{

      setMousePosition({x : event.clientX, y : event.clientY})
    };

    window.addEventListener('mousemove',mouseTracker);
    console.log("Mouse move listner added");

    return () => {
        // cleanup function that clean useEffect hook.
      window.removeEventListener('mousemove', mouseTracker);
        console.log("Mouse move listner removed");
    };

  
  },[]);




 return (
   
    <div>

       <h2>Mouse Position </h2>
       <p>X : {mousePosition.x}, Y : {mousePosition.y}</p>

    </div>
 )
}

export default MouseTracker;
