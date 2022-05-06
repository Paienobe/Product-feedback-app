import Comment from './Comment'

const Comments = ({ comments }) => {
  return (
    <div className='bg-white p-4 rounded-lg'>
      <h2 className='text-indigo-900 font-bold'>
        {comments.length} {comments.length > 1 ? 'Comments' : 'Comment'}
      </h2>
      <div className='mt-4'>
        {comments.map((comment) => {
          return <Comment {...comment} key={comment?.id} />
        })}
      </div>
    </div>
  )
}

export default Comments
