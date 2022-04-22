import Image from 'next/image'
import Link from 'next/link'

const Feedback = ({
  category,
  comments,
  description,
  id,
  status,
  title,
  upvotes,
}) => {
  return (
    <Link href={`/comments/${id}`}>
      <div className='bg-white p-4 my-4 rounded-lg text-sm text-indigo-900 cursor-pointer hover:scale-105'>
        <p className='font-bold text-indigo-900'>{title}</p>
        <p className='mt-3'>{description}</p>
        <p className='bg-indigo-100 p-2 text-indigo-700 font-semibold w-min rounded-lg text-xs my-3'>
          {category?.charAt(0).toUpperCase() + category?.slice(1)}
        </p>
        <div className='flex items-center justify-between font-semibold text-indigo-800'>
          <div className='font-semibold flex items-center justify-center p-2 bg-indigo-100 rounded-lg w-16 text-sm'>
            <Image src='/shared/icon-arrow-up.svg' width={10} height={10} />
            <p className='ml-2'>{upvotes}</p>
          </div>
          <div className='flex items-center justify-center'>
            <Image src='/shared/icon-comments.svg' width={12} height={12} />
            <p className='ml-1'>{comments ? comments?.length : 0}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Feedback
