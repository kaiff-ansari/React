
import './App.css';
import ProfileCard from './ProfileCard';

function App() {

  // prop is use for fething data from dynamic
 
  //const person = {name : "kaif", age : 22};
  // without destructring, using dot notation
  //const name = person.name;
  //const age = person.age;

  //With desctructuring
  //const {name, age} = person;

 const handleHobbyClick = (hobby) => {
  alert(`You clicked on: ${hobby}`);
};

const kaifProfile ={
 name : "kaif",
 age : 22, 
 isMember:true, 
  hobbies:['Reading', 'Playing'],
  onHobbyClick : handleHobbyClick
}

 const aakashProfile = {

  name : "aakash",
  age : 21, 
  isMember:true, 
  hobbies:['Gaming', 'Singing'],
  onHobbyClick : handleHobbyClick
 }


  return(
    <div className='app-container'>
      <h1>Hello</h1>
      <ProfileCard {...kaifProfile} />


      <ProfileCard {...aakashProfile} />
      

  
    </div>
  )
}
  

  

export default App
