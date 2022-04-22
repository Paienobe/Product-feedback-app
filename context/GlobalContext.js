import React, { useContext, useState } from 'react'
import data from '../data/data.json'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [feedbackData, setFeedbackData] = useState(data)

  return (
    <AppContext.Provider value={{ feedbackData }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
