import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGlobalContext } from '../context/GlobalContext'

const EmptyFilter = () => {
  const { filterBy } = useGlobalContext()

  return (
    <div className='p-4 m-4 flex flex-col justify-center items-center text-indigo-900 bg-white rounded-lg'>
      <Image
        src='/suggestions/illustration-empty.svg'
        width={150}
        height={150}
      />
      <h2 className='text-xl font-bold mb-4'>
        There is no {filterBy} feedback yet.
      </h2>
      <p className='text-center'>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our .
      </p>
    </div>
  )
}

export default EmptyFilter
