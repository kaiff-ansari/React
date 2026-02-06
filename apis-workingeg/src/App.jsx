import { useEffect, useState } from 'react'

import axios from 'axios';
import './App.css'

function App() {
  
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() =>{
    
    setLoading(true);
    axios.all([
     axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get( axios.get('https://jsonplaceholder.typicode.com/posts'))
    ])
   
      .then( axios.spread((posts,users) => {
        console.log(posts);
        console.log(users);
        setData(posts.data)
        setLoading(false);
       // throw new Error('Soome thing went wrong')
      }))
      .catch((error) =>{
        console.error(`Error fetching data: `, error);
        setError('Failed to fetch the data');
        setLoading(false);
      });
  }, []);

  if(loading){
    return <p>Loading...</p>
  }

  return (

    <div>
       <h1>React APIs</h1>
       <ul>
        {data.map((post) =>(
          <li key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </li>
        ))}
       </ul>
     
    </div>
    
   
  )
}

export default App
