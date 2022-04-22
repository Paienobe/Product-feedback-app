import React from 'react'
import Image from 'next/image'

const FeedbackHeader = () => {
  return (
    <div className='p-4 py-2 bg-indigo-900 text-white flex items-center justify-between text-sm'>
      <div className='flex items-center justify-between'>
        <p className='mr-4 font-light'>Sort by:</p>
        <div className='flex items-center'>
          <p className='mr-2 font-semibold'>Most Upvotes</p>
          <Image src='/shared/icon-arrow-down.svg' width={15} height={10} />
        </div>
      </div>

      <button className='p-2 bg-purple-600 rounded-lg text-sm font-medium'>
        Add Feedback
      </button>
    </div>
  )
}

export default FeedbackHeader
