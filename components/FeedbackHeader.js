import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGlobalContext } from '../context/GlobalContext'

const FeedbackHeader = () => {
  const sortList = [
    'Most Upvotes',
    'Least Upvotes',
    'Most Comments',
    'Least Comments',
  ]
  const { sortingType } = useGlobalContext()
  const [sortType, setSortType] = useState(sortList[0])
  const [showSorts, setShowSorts] = useState(false)
  return (
    <div className='p-4 py-2 bg-indigo-900 text-white flex items-center justify-between text-sm absolute left-0 right-0 top-0 sm:mx-8 sm:rounded-lg sm:p-5 '>
      <div className='flex items-center justify-between relative'>
        <p className='mr-4 font-light'>Sort by:</p>
        <div className='flex items-center'>
          <p className='mr-2 font-semibold'>{sortType}</p>
          <Image
            src='/shared/icon-arrow-down.svg'
            width={15}
            height={10}
            style={{ cursor: 'pointer' }}
            onClick={() => setShowSorts(!showSorts)}
          />
        </div>
        {showSorts && (
          <div className='absolute top-12 sm:top-14 left-12 w-full bg-white text-indigo-900 p-3 rounded-lg z-10 border-2 border-indigo-300'>
            {sortList.map((item, index) => {
              return (
                <p
                  className={`py-2 ${
                    index !== sortList.length - 1 &&
                    'border border-transparent border-b-indigo-200'
                  } hover:text-indigo-500 cursor-pointer`}
                  key={index}
                  onClick={(e) => {
                    setSortType(e.target.innerText)
                    sortingType(e.target.innerText)
                    setShowSorts(false)
                  }}
                >
                  {item}
                </p>
              )
            })}
          </div>
        )}
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
