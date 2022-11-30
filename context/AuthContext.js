import { createContext, useState, useEffect } from 'react'

// eslint-disable-next-line
export const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)
 
  const updateLocalStorage = (data) => {
    localStorage.setItem('token', JSON.stringify(data))
  }
  
  const getLocalStorage = () => {
    let response = localStorage.getItem('token') 
    return  JSON.parse(response)
  }

  const logout = () => {
    setIsLogged(false)
    return localStorage.removeItem('token')
  }

  useEffect(() => {
    let token= getLocalStorage()
    if (token) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])  

  return <AuthContext.Provider value={{isLogged, updateLocalStorage, getLocalStorage, logout}}>{children}</AuthContext.Provider>
}
export const AuthContext = createContext()