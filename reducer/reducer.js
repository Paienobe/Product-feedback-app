import data from '../data/data.json'

export const initialState = data

const reducer = (state, action) => {
  if (action.type === 'INITIAL_STORAGE') {
    return action.value
  }
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
          return { ...request, upvotes: request.upvotes + 1, upvoted: true }
        }
        if (action.payload.type === 'decrease') {
          return { ...request, upvotes: request.upvotes - 1, upvoted: false }
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

  if (action.type === 'REPLY') {
    let newReply = state.productRequests.map((request) => {
      const replyContent = request.comments.map((comment) => {
        if (comment.id === action.payload.id) {
          if (comment.replies) {
            return {
              ...comment,
              replies: [
                ...comment?.replies,
                {
                  id: new Date().getTime(),
                  content: action.payload.message,
                  user: state.currentUser,
                },
              ],
            }
          } else {
            return {
              ...comment,
              replies: [
                {
                  id: new Date().getTime(),
                  content: action.payload.message,
                  user: state.currentUser,
                },
              ],
            }
          }
        } else {
          return comment
        }
      })
      return { ...request, comments: replyContent }
    })
    return { ...state, productRequests: newReply }
  }

  if (action.type === 'EDIT_REQUEST') {
    let editedRequest = state.productRequests.map((request) => {
      if (request.id === action.payload.id) {
        return {
          ...request,
          title: action.payload.title,
          description: action.payload.description,
          category: action.payload.category,
        }
      } else {
        return request
      }
    })

    return { ...state, productRequests: editedRequest }
  }

  if (action.type === 'DELETE_REQUEST') {
    let newRequests = state.productRequests.filter((request) => {
      return request.id !== action.payload.id
    })
    return { ...state, productRequests: newRequests }
  }

  if (action.type === 'SORT') {
    let selectedSort = action.payload.sort
    return {
      ...state,
      sortBy: selectedSort,
    }
  }

  if (action.type === 'FILTER') {
    let selectedFilter = action.payload.choice
    return {
      ...state,
      filterBy: selectedFilter,
    }
  }

  if (action.type === 'DELETE_REPLY') {
    let result = state.productRequests.map((request) => {
      const updatedComments = request.comments.map((comment) => {
        if (comment?.replies) {
          const updatedReplies = comment.replies.filter((reply) => {
            return reply.id !== action.payload.id
          })
          return { ...comment, replies: updatedReplies }
        } else {
          return comment
        }
      })
      return { ...request, comments: updatedComments }
    })
    return { ...state, productRequests: result }
  }

  if (action.type === 'REPLY_A_REPLY') {
    let result = state.productRequests.map((request) => {
      let updatedComments = request.comments.map((comment) => {
        if (comment?.replies) {
          let updatedReplies = comment.replies.map((reply) => {
            if (reply.id === action.payload.id) {
              let newReply = {
                id: new Date().getTime(),
                content: action.payload.message,
                user: state.currentUser,
                nameOfReplied: reply.user.username,
              }
              return newReply
            } else return reply
          })
          return {
            ...comment,
            replies: [...new Set([...comment.replies, ...updatedReplies])],
          }
        } else {
          return comment
        }
      })
      return { ...request, comments: updatedComments }
    })
    return { ...state, productRequests: result }
    return state
  }
}

export default reducer
