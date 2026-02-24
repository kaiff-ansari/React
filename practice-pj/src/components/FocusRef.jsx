import React, { useRef } from 'react'

const FocusRef = () => {

     const inputRef = useRef(null)

     const focusInput = () => {
        inputRef.current.focus()
        inputRef.current.style.backgroundColor='red'

     }
  return (
    <div>

        <div>
            <input type="text" placeholder='enter your text' ref={inputRef} />
            <button onClick={focusInput}>focus</button>
        </div>
    </div>
  )
}

export default FocusRef