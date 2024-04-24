import React, { createContext, useState } from 'react'

export const myContext = createContext()

const Context = ({children}) => {
    
    const [theme,setTheme] = useState(false)
    const toggleTheme =()=>{
        setTheme(!theme)
    }
  return (
    <>
   <myContext.Provider value={{theme,toggleTheme}}>
     {children}
   </myContext.Provider>
    </>
   
  )
}

export default Context