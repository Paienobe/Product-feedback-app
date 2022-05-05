import React, { useContext, useReducer, useEffect } from 'react'
import reducer, { initialState } from '../reducer/reducer'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('appState'))) {
      dispatch({
        type: 'INITIAL_STORAGE',
        value: JSON.parse(localStorage.getItem('appState')),
      })
    }
  }, [])

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem('appState', JSON.stringify(state))
    }
  }, [state])

  const sortingType = (sort) => dispatch({ type: 'SORT', payload: { sort } })

  const categoryFiltering = (choice) => {
    dispatch({ type: 'FILTER', payload: { choice } })
  }

  useEffect(() => {
    sortingType('Most Upvotes')
    categoryFiltering('All')
  }, [])

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

  const editRequest = (id, title, description, category) => {
    dispatch({
      type: 'EDIT_REQUEST',
      payload: { id, title, description, category },
    })
  }

  const deleteRequest = (id) => {
    dispatch({ type: 'DELETE_REQUEST', payload: { id } })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        addProductRequest,
        upvoteProductRequest,
        addComment,
        addReplies,
        editRequest,
        deleteRequest,
        sortingType,
        categoryFiltering,
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
