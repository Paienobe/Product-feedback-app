import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { GoPrimitiveDot } from 'react-icons/go'

const Header = () => {
  const category = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowMenu(false)
    })
  }, [])

  return (
    <div className='h-16 relative text-white'>
      <img
        src='/suggestions/desktop/background-header.png'
        style={{ width: '100%', height: '100%' }}
        alt=''
      />
      <div className='absolute right-5 top-2 left-5 flex items-center justify-between'>
        <div className='text-sm'>
          <p className='font-semibold'>Frontend Mentor</p>
          <p>Feedback Board</p>
        </div>

        {showMenu ? (
          <Image
            src='/shared/mobile/icon-close.svg'
            width={20}
            height={18}
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <Image
            src='/shared/mobile/icon-hamburger.svg'
            width={25}
            height={18}
            onClick={() => setShowMenu(true)}
          />
        )}
      </div>

      <div
        className={`bg-black bg-opacity-50 p-4 absolute z-10  h-screen ${
          showMenu ? 'left-0 right-0' : 'left-full right-0'
        }`}
      >
        <div className='bg-indigo-100 absolute right-0 top-0 w-2/3 p-4 h-screen'>
          <div className='bg-white flex flex-wrap text-indigo-600 p-2 rounded-lg'>
            {category.map((item, index) => {
              return (
                <button
                  key={index}
                  className='bg-indigo-100 p-2 px-3 rounded-lg m-2 text-xs font-bold'
                >
                  {item}
                </button>
              )
            })}
          </div>

          <div className='bg-white  text-indigo-900 p-2 rounded-lg mt-4 pb-8'>
            <div className='flex items-center justify-between pt-2'>
              <h2 className='text-lg font-bold'>Roadmap</h2>
              <p className='text-xs text-indigo-600 underline font-semibold'>
                View
              </p>
            </div>
            <div className='text-sm mt-3'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <GoPrimitiveDot className='text-orange-500' />
                  <p>Planned</p>
                </div>

                <p className='font-bold'>2</p>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <GoPrimitiveDot className='text-purple-800' />
                  <p>In-Progress</p>
                </div>

                <p className='font-bold'>3</p>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <GoPrimitiveDot className='text-teal-600' />
                  <p>Live</p>
                </div>

                <p className='font-bold'>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
