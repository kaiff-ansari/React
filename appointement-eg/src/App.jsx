import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './ParentComponent';

function App() {
  
 

 /* const [count, setCount] = useState(0);

 const [show,setShow] = useState(true);


 const changeButtonStatus = () =>{

  setShow(!show);
 }


 const changeCount = () =>{

  setCount(count + 1);
 };

 const changeCountDec = () =>{

  setCount(count - 1);
 }; */

/* useEffect(() => {
   console.log("use effect triggered");
  },[count]); */

 return (
   
    <>

    {/*   <h1>Count : {count}</h1>
      <button onClick={changeCount}>Increase</button>
      <button onClick={changeCountDec}>Decrease</button>
      <button onClick={changeButtonStatus}>
         {show ? 'hide' : 'show'}
      </button>
       {show && <p>This is a secret message!</p>} */}

    <ParentComponent />

    </>

    
 );
}

export default App
