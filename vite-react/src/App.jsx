
import './App.css'

function WelcomeMessage(name){

  return <h1>Hello , {name}!</h1>
}

function greeting(isMorning){

  if(isMorning){

    return <h1>Good Morning</h1>

  }
  return <h1>Good evening</h1>
}

function showAlert(condition, message){

  if(condition){
  
   return AlertBox(message);
  }
  return null;
}

function AlertBox(message){
  return <div className='alert'>{message}</div>
}

function App() {

  const now = new Date();
  const isMorning = now.getHours() < 12;

  return (
    <div>

      {WelcomeMessage("kaif")}
      {WelcomeMessage("naved")}
      {WelcomeMessage("aakash")}

      {greeting(isMorning)}

      {showAlert(true,"this is important")}
    </div>
  )

 //const isLogin = false;
  /* if(isLogin){
    return (<h1>Welcome to my community</h1>)
  }
  return (<h1>Come back meri wife krwayegi</h1>) */

  /* const element = <h1>{isLogin ? "Welcome Back!" : "Come back meri wife krwayegi"}</h1>

  const messages = [1];

  return (

    <div>
      {element}
      {messages.length > 0 && <h2>You have {messages.length} unread messages</h2>}
    </div>
  ) */


}

export default App
