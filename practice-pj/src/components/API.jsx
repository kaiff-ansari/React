import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API = () => {


    const [data,setData] = useState([]);
    const getData = async () =>{

     const response =   await axios.get("https://jsonplaceholder.typicode.com/posts")

     setData(response.data)
    
       
    }

    useEffect(function (){

        getData()
    },[])

  return (
    <div>

        <h1>API Data</h1>
        {data.map(function(elem,idx){

            return <div key={idx}>
                <h3>{elem.title}</h3>
                <p>{elem.body}</p>
            </div>
        })}
        


    </div>
  )
}

export default API