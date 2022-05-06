import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useGlobalContext } from '../context/GlobalContext'
import { AiFillDelete } from 'react-icons/ai'
import { MdSend } from 'react-icons/md'

const Reply = ({ replyingTo, content, id, user, nameOfReplied }) => {
  const { deleteReply, replyReplies } = useGlobalContext()
  const [createReply, setCreateReply] = useState(false)
  const [replyContent, setReplyContent] = useState('')
  const replyMessageRef = useRef(null)

  return (
    <div className='mb-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image
            src={user?.image}
            width={40}
            height={40}
            className='rounded-full'
          />
          <div className='ml-3 mb-2'>
            <p className='font-semibold text-indigo-900'>{user?.name}</p>
            <p>@{user?.username}</p>
          </div>
        </div>

        <p
          className='font-bold text-sm hover:underline cursor-pointer text-indigo-700'
          onClick={() => {
            setCreateReply(!createReply)
          }}
        >
          Reply
        </p>
      </div>

      <div className='flex justify-between'>
        <div className='w-11/12'>
          {nameOfReplied ? (
            <span className='text-purple-700 font-semibold'>
              @{nameOfReplied}{' '}
            </span>
          ) : (
            <span className='text-purple-700 font-semibold'>
              @{replyingTo?.username}{' '}
            </span>
          )}

          {content}
        </div>
        <div
          onClick={() => {
            deleteReply(id)
          }}
        >
          <AiFillDelete />
        </div>
      </div>

      {createReply && (
        <div>
          <form className='relative' ref={replyMessageRef}>
            <textarea
              name='reply'
              value={replyContent}
              onChange={(e) => {
                setReplyContent(e.target.value)
              }}
              className='bg-indigo-100 p-4 rounded-lg w-full mt-4'
            ></textarea>
            <div
              className='absolute top-16 right-4 cursor-pointer'
              onClick={() => {
                replyReplies(id, replyMessageRef.current.reply.value)
                setReplyContent('')
                setCreateReply(false)
              }}
            >
              <MdSend />
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default Reply
