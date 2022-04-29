import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext'

const Feedback = ({
  category,
  comments,
  description,
  id,
  status,
  title,
  upvotes,
}) => {
  const { upvoteProductRequest } = useGlobalContext()
  const [upvoted, setUpvoted] = useState(false)

  return (
    <div className='bg-white p-4 my-4 rounded-lg text-sm text-indigo-900 hover:scale-105 sm:relative sm:hover:scale-100 sm:hover:shadow-indigo-300 shadow-lg sm:text-base'>
      <div className='sm:w-3/4 mx-auto'>
        <Link href={`/comments/${id}`}>
          <a className='font-bold text-indigo-900 hover:text-indigo-700 cursor-pointer sm:text-2xl'>
            {title}
          </a>
        </Link>
        <p className='mt-3'>{description}</p>
        <p className='bg-indigo-100 p-2 text-indigo-700 font-semibold w-min rounded-lg text-xs my-3'>
          {category?.charAt(0)?.toUpperCase() + category?.slice(1)}
        </p>
      </div>

      <div className='flex items-center justify-between font-semibold text-indigo-800 sm:absolute sm:left-4 sm:right-4 top-8'>
        <div
          className={`font-semibold flex items-center justify-center p-2 bg-indigo-100 rounded-lg w-16 text-sm sm:flex-col sm:w-12 cursor-pointer ${
            upvoted && 'bg-indigo-400 text-white'
          }`}
          onClick={() => {
            if (!upvoted) {
              upvoteProductRequest(id, 'increase')
              setUpvoted(true)
            } else {
              upvoteProductRequest(id, 'decrease')
              setUpvoted(false)
            }
          }}
        >
          <Image src='/shared/icon-arrow-up.svg' width={10} height={10} />
          <p className='ml-2 sm:ml-0 sm:mt-2'>{upvotes}</p>
        </div>
        <div className='flex items-center justify-center '>
          <Image src='/shared/icon-comments.svg' width={12} height={12} />
          <p className='ml-1'>{comments ? comments?.length : 0}</p>
        </div>
      </div>
    </div>
  )
}

export default Feedback
