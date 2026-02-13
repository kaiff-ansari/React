import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const formHandler = (e) =>{

    e.preventDefault()
    console.log('Form submited by ', title);
    setTitle('')
  }

  return (
    <div>

      <form onSubmit={formHandler} >

        <input type="text"
         placeholder='enter your name'
         value={title}
         onChange={(e) => {
          setTitle(e.target.value);
         }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App