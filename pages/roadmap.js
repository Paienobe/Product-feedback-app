import { useGlobalContext } from '../context/GlobalContext'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import CategoryComponent from '../components/CategoryComponent'
import Head from 'next/head'

const Roadmap = () => {
  const { productRequests } = useGlobalContext()
  const [planned, setPlanned] = useState(true)
  const [inProgress, setInProgress] = useState(false)
  const [live, setLive] = useState(false)

  const chosenTab = (tab) => {
    return productRequests.filter((request) => {
      return request.status === tab
    })
  }

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setPlanned(true)
      setInProgress(true)
      setLive(true)
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 640) {
        setPlanned(true)
        setInProgress(true)
        setLive(true)
      } else {
        setPlanned(true)
        setInProgress(false)
        setLive(false)
      }
    })
  })

  return (
    <div className='bg-indigo-100 min-h-screen p-4 text-indigo-800'>
      <Head>
        <title>Roadmap</title>
      </Head>

      <div className='bg-indigo-900 absolute left-0 right-0 top-0 p-4 text-white flex items-center justify-between lg:px-12'>
        <div>
          <Link href='/'>
            <div className='flex items-center hover:cursor-pointer'>
              <Image src='/shared/icon-arrow-left.svg' width={12} height={10} />
              <p className='ml-3 text-white text-sm'>Go Back</p>
            </div>
          </Link>

          <h2 className='text-xl font-bold'>Roadmap</h2>
        </div>

        <Link href='/newfeedback'>
          <button className='p-2 bg-purple-700 rounded-lg text-sm'>
            + Add Feedback
          </button>
        </Link>
      </div>

      <div className='absolute left-0 right-0 text-center flex items-center justify-between font-bold text-sm top-20 bg-indigo-200 sm:hidden'>
        <div
          className={`p-2 py-4 w-1/3 border-2 border-transparent text-indigo-900 text-opacity-50  ${
            planned && 'border-b-orange-500 text-opacity-100'
          } hover:cursor-pointer`}
          onClick={() => {
            setPlanned(true)
            setInProgress(false)
            setLive(false)
          }}
        >
          Planned (2)
        </div>
        <div
          className={`p-2 py-4 w-1/3 border-2 border-transparent text-indigo-900 text-opacity-50  ${
            inProgress && 'border-b-purple-500 text-opacity-100'
          } hover:cursor-pointer`}
          onClick={() => {
            setPlanned(false)
            setInProgress(true)
            setLive(false)
          }}
        >
          In-Progress (3)
        </div>
        <div
          className={`p-2 py-4 w-1/3 border-2 border-transparent text-indigo-900 text-opacity-50 ${
            live && 'border-b-teal-500 text-opacity-100'
          } hover:cursor-pointer`}
          onClick={() => {
            setPlanned(false)
            setInProgress(false)
            setLive(true)
          }}
        >
          Live (1)
        </div>
      </div>
      <div className='mt-36 flex justify-between sm:mt-20 lg:px-8'>
        <div>
          {planned && (
            <div>
              <h2 className='text-indigo-900 font-bold text-xl'>
                Planned ({chosenTab('planned').length})
              </h2>
              <p>Ideas prioritized for research</p>
              {chosenTab('planned').map((item, index) => {
                return <CategoryComponent key={index} {...item} />
              })}
            </div>
          )}
        </div>

        <div className='sm:mx-2'>
          {inProgress && (
            <div>
              <h2 className='text-indigo-900 font-bold text-xl'>
                In-Progress ({chosenTab('in-progress').length})
              </h2>
              <p>Currently being developed</p>
              {chosenTab('in-progress').map((item, index) => {
                return <CategoryComponent key={index} {...item} />
              })}
            </div>
          )}
        </div>

        <div>
          {live && (
            <div>
              <h2 className='text-indigo-900 font-bold text-xl'>
                Live ({chosenTab('live').length})
              </h2>
              <p>Released features</p>
              {chosenTab('live').map((item, index) => {
                return <CategoryComponent key={index} {...item} />
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Roadmap
