import React from 'react'

const Card = (props) => {
  return (
    
     <div className="card">
        <img src={props.img} />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure esse vel tempore, facilis deserunt maiores, officia optio explicabo quaerat doloribus, at magnam ex quibusdam hic neque eum recusandae aspernatur.
        </p>
        <button>view Profile</button>
      </div>
  )
}

 {/* <Card user = "naved" age = {24} img = "https://tse2.mm.bing.net/th/id/OIP.QZLG9bhm8lJoDir7RDrnNQHaEo?pid=Api&P=0&h=180" />  */}

export default Card