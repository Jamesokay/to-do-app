import { createContext, useState, useEffect } from 'react'

const initialState = JSON.parse(localStorage.getItem('user')) || null
  
export const UserContext = createContext(initialState)

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(initialState)
    const userValue = {user, setUser}
    
    useEffect(()=>{
      localStorage.setItem('user', JSON.stringify(user))
    }, [user])
    
    return (
      <UserContext.Provider value={userValue}>
        {children}
      </UserContext.Provider>
    )
  }