import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// data is ongoing in hierarchical manner 
  //const theme = 'dark';

  // #Using context value
    const ThemeContext = createContext('light');

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>{
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }
  
  return (

    <div>
      <GlobalComponent/>
    <ThemeContext.Provider value= {theme}>

    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h2>App (Parent)</h2>
      <button onClick={toggleTheme}>Toggle theme</button>
   
     <ComponentA  />
     </div>

     </ThemeContext.Provider>

       <ThemeContext.Provider value= 'dark'>
          <GlobalComponent />
         </ThemeContext.Provider>

     </div>
  );
}

function ComponentA(){

  return (

    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h2>Component (child)</h2>
     <ComponentB  />
     </div>
  );

}

function ComponentB(){

  return (

    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h2>ComponenB (child)</h2>
     <ThemedComponent />
     </div>
  );
}

function ThemedComponent(){

  const theme = useContext(ThemeContext)


  return (

    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h2>ThemedComponent (Great -GrandChild)</h2>

      <div>The current theme is : {theme}</div>
     
     </div>
  );
}

function GlobalComponent(){

  const theme = useContext(ThemeContext)


  return (

    <div style={{ border: '2px solid black', padding: '20px' }}>
      <h2>GlobalCopmponent (Outside provider)</h2>

      <div>The current theme is : {theme}</div>
     
     </div>
  );
}

export default App
