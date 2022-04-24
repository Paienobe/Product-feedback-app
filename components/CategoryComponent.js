import { GoPrimitiveDot } from 'react-icons/go'
import Link from 'next/link'
import Image from 'next/image'

const CategoryComponent = ({
  category,
  comments,
  description,
  status,
  title,
  upvotes,
  id,
}) => {
  const sectionColor =
    status === 'planned'
      ? 'border-t-orange-500'
      : status === 'in-progress'
      ? 'border-t-purple-700'
      : 'border-t-teal-500'
  return (
    <div className='text-indigo-800'>
      <Link href={`/comments/${id}`}>
        <div
          className={`bg-white p-4 my-4 rounded-lg text-sm text-indigo-900 cursor-pointer hover:scale-105 border-4 border-transparent ${sectionColor} `}
        >
          <div className='flex items-center'>
            <GoPrimitiveDot
              className={`${
                status === 'planned'
                  ? 'text-orange-500'
                  : status === 'in-progress'
                  ? 'text-purple-700'
                  : 'text-teal-500'
              }`}
            />
            <p>{status.charAt(0).toUpperCase() + status.slice(1)}</p>
          </div>

          <div className=' mx-auto'>
            <p className='font-bold text-indigo-900'>{title}</p>
            <p className='mt-3'>{description}</p>
            <p className='bg-indigo-100 p-2 text-indigo-700 font-semibold w-min rounded-lg text-xs my-3'>
              {category?.charAt(0).toUpperCase() + category?.slice(1)}
            </p>
          </div>

          <div className='flex items-center justify-between font-semibold text-indigo-800 top-8'>
            <div className='font-semibold flex items-center justify-center p-2 bg-indigo-100 rounded-lg w-16 text-sm '>
              <Image src='/shared/icon-arrow-up.svg' width={10} height={10} />
              <p className='ml-2'>{upvotes}</p>
            </div>
            <div className='flex items-center justify-center '>
              <Image src='/shared/icon-comments.svg' width={12} height={12} />
              <p className='ml-1'>{comments ? comments?.length : 0}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CategoryComponent
