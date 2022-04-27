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
    let temporaryUpvote = state.productRequests.map((request) => {
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
    return { ...state, productRequests: temporaryUpvote }
  }
}

export default reducer
