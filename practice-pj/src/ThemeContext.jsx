import React, { createContext, useState } from 'react'


 export const ContextTheme = createContext()
const ThemeContext = (props) => {

  

    const [theme,setTheme]  = useState("light");
  return (
    <div>

        <ContextTheme.Provider value={[theme,setTheme]}>
            {props.children}
        </ContextTheme.Provider>

    </div>
  )
}

export default ThemeContext