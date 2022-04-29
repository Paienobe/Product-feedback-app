import { useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext'

const CommentInput = ({ id }) => {
  const [commentText, setCommentText] = useState('')
  const [commentLength, setCommentLength] = useState(250)
  const { addComment } = useGlobalContext()

  return (
    <div className='mt-4 bg-white p-4 rounded-lg'>
      <h2 className='font-bold text-indigo-900'>Add Comment</h2>
      <textarea
        placeholder='Type your comment here...'
        value={commentText}
        required
        maxLength={250}
        onChange={(e) => {
          setCommentText(e.target.value)
          setCommentLength(250 - e.target.value.length)
        }}
        className='p-4 bg-indigo-100 w-full rounded-lg mt-6 mb-4 outline-none placeholder:text-indigo-900 placeholder:text-sm placeholder:opacity-70'
      ></textarea>
      <div className='flex items-center justify-between'>
        <p className='text-sm'>{commentLength} Characters left</p>
        <button
          className='bg-purple-700 text-white font-bold text-xs p-4 rounded-lg'
          onClick={(e) => {
            e.preventDefault()
            addComment(id, commentText)
            setCommentText('')
          }}
        >
          Post Comment
        </button>
      </div>
    </div>
  )
}

export default CommentInput
