import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { GoPrimitiveDot } from 'react-icons/go'
import Link from 'next/link'
import { useGlobalContext } from '../context/GlobalContext'

const Header = () => {
  const category = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']
  const [showMenu, setShowMenu] = useState(false)
  const { filterBy, categoryFiltering } = useGlobalContext()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowMenu(false)
    })

    if (window.innerWidth >= 640) {
      setShowMenu(true)
    }
  }, [])

  return (
    <div className='h-16 relative text-white sm:m-8 sm:flex sm:items-stretch sm:h-full lg:absolute lg:z-20 lg:flex-col lg:w-1/2 lg:top-0 lg:left-0'>
      <div className='h-16 relative sm:w-1/3 sm:h-auto sm:mr-4 lg:mb-4'>
        <img
          src='/suggestions/desktop/background-header.png'
          style={{ width: '100%', height: '100%' }}
          alt=''
          className='sm:rounded-lg '
        />

        <div className='absolute right-5 top-2 left-5 flex items-center justify-between sm:bottom-2 sm:top-auto '>
          <div className='text-sm sm:text-base'>
            <p className='font-semibold'>Frontend Mentor</p>
            <p>Feedback Board</p>
          </div>

          {showMenu ? (
            <Image
              src='/shared/mobile/icon-close.svg'
              width={20}
              height={18}
              onClick={() => setShowMenu(false)}
              className='sm:opacity-0'
            />
          ) : (
            <Image
              src='/shared/mobile/icon-hamburger.svg'
              width={25}
              height={18}
              onClick={() => setShowMenu(true)}
              className='sm:opacity-0'
            />
          )}
        </div>
      </div>

      <div
        className={`bg-black bg-opacity-50 p-4 absolute z-10  h-screen ${
          showMenu ? 'left-0 right-0' : 'left-full right-0'
        } sm:static sm:h-auto sm:bg-opacity-0 sm:w-2/3 sm:z-0 sm:p-0`}
      >
        <div className='bg-indigo-100 absolute right-0 top-0 w-2/3 p-4 h-screen sm:static sm:h-full sm:flex sm:items-stretch sm:justify-between sm:bg-transparent sm:w-full sm:p-0 lg:flex-col'>
          <div className='bg-white flex flex-wrap text-indigo-600 p-2 rounded-lg sm:w-1/2  sm:h-full sm:mr-4 lg:mb-4'>
            {category.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`bg-indigo-100 p-2 px-3 rounded-lg m-2 text-xs font-bold ${
                    filterBy?.toLowerCase() === item.toLowerCase() &&
                    'bg-indigo-600 text-white'
                  }`}
                  onClick={() => categoryFiltering(item)}
                >
                  {item}
                </button>
              )
            })}
          </div>

          <div className='bg-white  text-indigo-900 p-2 rounded-lg mt-4 pb-8 sm:w-1/2 sm:h-full sm:m-0 '>
            <div className='flex items-center justify-between pt-2'>
              <h2 className='text-lg font-bold'>Roadmap</h2>
              <Link href='/roadmap'>
                <p className='text-xs text-indigo-600 underline font-semibold hover:cursor-pointer'>
                  View
                </p>
              </Link>
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
