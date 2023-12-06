import React, { createContext, useState } from 'react'
import requests from '../api/Request';


export const urlContext = createContext();

const ContextProvider = ({children}) => {
    const [url, setUrl] = useState(requests.requestPopular)
  return (
    <urlContext.Provider value={{url, setUrl}}>{children}</urlContext.Provider>
  )
}

export default ContextProvider