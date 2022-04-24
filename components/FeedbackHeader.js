import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FeedbackHeader = () => {
  return (
    <div className='p-4 py-2 bg-indigo-900 text-white flex items-center justify-between text-sm absolute left-0 right-0 top-0 sm:mx-8 sm:rounded-lg sm:p-5 '>
      <div className='flex items-center justify-between'>
        <p className='mr-4 font-light'>Sort by:</p>
        <div className='flex items-center'>
          <p className='mr-2 font-semibold'>Most Upvotes</p>
          <Image src='/shared/icon-arrow-down.svg' width={15} height={10} />
        </div>
      </div>
      <Link href='/newfeedback'>
        <button className='p-2 bg-purple-600 rounded-lg text-sm font-medium'>
          Add Feedback
        </button>
      </Link>
    </div>
  )
}

export default FeedbackHeader
