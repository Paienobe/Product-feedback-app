const reducer = (state, action) => {
  if (action.type === 'ADD') {
    return {
      ...state,
      productRequests: [
        ...state.productRequests,
        {
          category: action.payload.category,
          comments: [],
          description: action.payload.details,
          id: new Date().getTime(),
          status: '',
          title: action.payload.title,
          upvotes: 0,
        },
      ],
    }
  }

  if (action.type === 'UPVOTE') {
    let newUpvote = state.productRequests.map((request) => {
      if (request.id === action.payload.id) {
        if (action.payload.type === 'increase') {
          return { ...request, upvotes: request.upvotes + 1 }
        }
        if (action.payload.type === 'decrease') {
          return { ...request, upvotes: request.upvotes - 1 }
        }
      }
      return request
    })
    return { ...state, productRequests: newUpvote }
  }

  if (action.type === 'COMMENT') {
    let newComment = state.productRequests.map((request) => {
      if (request.id === action.payload.id) {
        return {
          ...request,
          comments: [
            ...request.comments,
            {
              id: new Date().getTime(),
              content: action.payload.message,
              user: state.currentUser,
            },
          ],
        }
      } else {
        return request
      }
    })
    return { ...state, productRequests: newComment }
  }
}

export default reducer
