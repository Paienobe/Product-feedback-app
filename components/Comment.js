import React from 'react'
import Image from 'next/image'

const Comment = ({ content, user }) => {
  return (
    <div className='border border-transparent border-b-indigo-200 mt-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image
            src={user.image}
            width={40}
            height={40}
            className='rounded-full'
          />
          <div className='ml-2 text-sm sm:ml-6 sm:text-base'>
            <p className='font-semibold text-indigo-900'>{user.name}</p>
            <p>@{user.username}</p>
          </div>
        </div>
        <p className='text-sm font-bold text-indigo-600 hover:underline hover:cursor-pointer'>
          Reply
        </p>
      </div>
      <div className='my-6'>
        <p className='text-sm sm:ml-16 sm:text-base'>{content}</p>
      </div>
    </div>
  )
}

export default Comment
