import Link from 'next/link'
import Image from 'next/image'
import { useGlobalContext } from '../context/GlobalContext'

const NewFeedback = () => {
  const { feedbackData } = useGlobalContext()

  return (
    <div className='p-4 bg-indigo-100 min-h-screen text-indigo-800 lg:p-10'>
      <Link href='/'>
        <div className='flex items-center hover:cursor-pointer '>
          <Image src='/shared/icon-arrow-left.svg' width={12} height={10} />
          <p className='ml-3 text-indigo-900 font-semibold'>Go Back</p>
        </div>
      </Link>

      <div className='mt-8 sm:w-2/3 sm:mx-auto sm:my-16 lg:w-2/5'>
        <form className='relative bg-white p-4 pt-10 rounded-lg'>
          <div className='absolute -top-5'>
            <Image src='/shared/icon-new-feedback.svg' width={50} height={50} />
          </div>

          <h1 className='font-bold text-indigo-900'>Create New Feedback</h1>
          <div className='text-sm mt-6'>
            <p className='font-bold'>Feedback Title</p>
            <p className='mb-4'>Add a short, descriptive headline</p>
            <input
              type='text'
              name='title'
              className='bg-indigo-100 p-3 w-full rounded-lg'
            />
          </div>

          <div className='text-sm mt-6'>
            <p className='font-bold text-indigo-900'>Category</p>
            <p className='mb-4'>Choose a category for your feedback</p>
            <input
              type='text'
              name='category'
              className='bg-indigo-100 p-3 w-full rounded-lg'
            />
          </div>

          <div className='text-sm mt-6'>
            <p className='font-bold text-indigo-900'>Feedback Details</p>
            <p className='mb-4'>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              name='details'
              className='bg-indigo-100 p-4 w-full rounded-lg'
            ></textarea>
          </div>

          <div className='flex flex-col mt-6 sm:flex-row sm:items-center sm:w-52 sm:ml-auto'>
            <button className='p-3 bg-purple-700 text-sm font-bold text-white rounded-lg sm:mr-3'>
              Add Feedback
            </button>
            <button className='p-3 mt-2 bg-indigo-900 text-sm font-bold text-white rounded-lg sm:mt-0'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewFeedback
