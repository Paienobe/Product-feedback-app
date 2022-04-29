import React, { useContext, useState, useReducer } from 'react'
import data from '../data/data.json'
import reducer from '../reducer/reducer'

const AppContext = React.createContext()

const initialState = data

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addProductRequest = (category, details, title) => {
    dispatch({ type: 'ADD', payload: { category, details, title } })
  }

  const upvoteProductRequest = (id, type) => {
    dispatch({ type: 'UPVOTE', payload: { id, type } })
  }

  const addComment = (id, message) => {
    dispatch({ type: 'COMMENT', payload: { id, message } })
  }

  const addReplies = (id, message) => {
    dispatch({ type: 'REPLY', payload: { id, message } })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        addProductRequest,
        upvoteProductRequest,
        addComment,
        addReplies,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
