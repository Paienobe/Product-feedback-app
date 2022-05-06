import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useGlobalContext } from '../context/GlobalContext'
import Reply from './Reply'

const Comment = ({ content, user, id, replies }) => {
  const { addReplies } = useGlobalContext()
  const [createReply, setCreateReply] = useState(false)
  const [replyContent, setReplyContent] = useState('')
  const replyMessageRef = useRef(null)

  return (
    <div className='border border-transparent border-b-indigo-200 mt-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image
            src={user?.image}
            width={40}
            height={40}
            className='rounded-full'
          />
          <div className='ml-2 text-sm sm:ml-6 sm:text-base'>
            <p className='font-semibold text-indigo-900'>{user?.name}</p>
            <p>@{user?.username}</p>
          </div>
        </div>
        <p
          className='text-sm font-bold text-indigo-600 hover:underline hover:cursor-pointer'
          onClick={() => {
            setCreateReply(true)
          }}
        >
          Reply
        </p>
      </div>
      <div className='my-6'>
        <p className='text-sm sm:ml-16 sm:text-base'>{content}</p>
      </div>
      {createReply && (
        <form
          ref={replyMessageRef}
          onSubmit={(e) => {
            e.preventDefault()
            addReplies(id, replyMessageRef.current.reply.value)
            setReplyContent('')
            setCreateReply(false)
          }}
        >
          <div className='sm:flex sm:mb-4'>
            <textarea
              name='reply'
              rows='2'
              className='bg-indigo-100 rounded-lg w-full p-4 sm:w-2/3 lg:w-4/5'
              placeholder={`Reply to @${user.username}...`}
              value={replyContent}
              onChange={(e) => {
                setReplyContent(e.target.value)
              }}
            ></textarea>
            <div className='flex items-center my-4 sm:flex-col sm:w-1/3 sm:m-0 sm:ml-3 lg:w-1/5'>
              <button
                className='py-3 font-bold text-white bg-red-600 rounded-lg w-1/2 mr-2 text-sm sm:m-0 sm:w-full sm:mb-2'
                onClick={() => {
                  setReplyContent('')
                  setCreateReply(false)
                }}
              >
                Cancel
              </button>
              <button
                className='py-3 font-bold text-white bg-purple-700 rounded-lg w-1/2 ml-2 text-sm sm:m-0 sm:w-full'
                type='submit'
              >
                Post Reply
              </button>
            </div>
          </div>
        </form>
      )}
      <div className='pl-8 text-sm border-2 border-transparent border-l-indigo-100 mb-4 sm:pl-24 lg:pl-28 sm:text-base'>
        {replies?.map((reply) => {
          return <Reply key={reply?.id} replyingTo={user} {...reply} />
        })}
      </div>
    </div>
  )
}

export default Comment
