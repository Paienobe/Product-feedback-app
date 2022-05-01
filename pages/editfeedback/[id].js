import React, { useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useGlobalContext } from '../../context/GlobalContext'

const Edit = () => {
  const router = useRouter()

  const { productRequests, editRequest, deleteRequest } = useGlobalContext()

  const requiredData = productRequests.find((request) => {
    return request.id === parseInt(router.query.id)
  })

  const [title, setTitle] = useState(requiredData?.title)
  const [description, setDescription] = useState(requiredData?.description)
  const categories = ['UI', 'UX', 'Enhancement', 'Bug', 'Feature']
  const [pickedCategory, setPickedCategory] = useState(requiredData?.category)
  const [showCategories, setShowCategories] = useState(false)

  const formRef = useRef(null)

  return (
    <div className='p-4 bg-indigo-100 min-h-screen text-indigo-800 lg:p-10'>
      <Head>
        <title>Edit Request</title>
      </Head>

      <Link href={`/comments/${router.query.id}`}>
        <div className='flex items-center hover:cursor-pointer '>
          <Image src='/shared/icon-arrow-left.svg' width={12} height={10} />
          <p className='ml-3 text-indigo-900 font-semibold'>Go Back</p>
        </div>
      </Link>

      <div className='mt-8 sm:w-2/3 sm:mx-auto sm:my-16 lg:w-2/5'>
        <form
          className='relative bg-white p-4 pt-10 rounded-lg'
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault()
            editRequest(
              requiredData.id,
              formRef.current.title.value,
              formRef.current.description.value,
              formRef.current.category.value
            )
            router.push('/')
          }}
        >
          <div className='absolute -top-5'>
            <Image
              src='/shared/icon-edit-feedback.svg'
              width={50}
              height={50}
            />
          </div>

          <h1 className='font-bold text-indigo-900'>Edit Feedback</h1>
          <div className='text-sm mt-6'>
            <p className='font-bold'>Feedback Title</p>
            <p className='mb-4'>Add a short, descriptive headline</p>
            <input
              type='text'
              name='title'
              className='bg-indigo-100 p-3 w-full rounded-lg'
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
          </div>

          <div className='text-sm mt-6 '>
            <p className='font-bold text-indigo-900'>Category</p>
            <p className='mb-4'>Choose a category for your feedback</p>
            <div className='relative'>
              <input
                type='text'
                name='category'
                className='bg-indigo-100 p-3 w-full rounded-lg '
                value={pickedCategory}
                required
              />
              <div
                className='absolute right-3 top-3'
                onClick={() => {
                  setShowCategories(!showCategories)
                }}
              >
                <Image
                  src='/shared/icon-arrow-down.svg'
                  width={15}
                  height={12}
                />
              </div>
              {showCategories && (
                <div className='bg-white border-indigo-300 border-2 p-2 rounded-lg absolute top-12 left-3 right-3'>
                  {categories.map((item, index) => {
                    return (
                      <p
                        className='py-2 font-bold text-indigo-900 border border-transparent border-b-indigo-300'
                        key={index}
                        onClick={(e) => {
                          setPickedCategory(e.target.innerText)
                          setShowCategories(false)
                        }}
                      >
                        {item}
                      </p>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          <div className='text-sm mt-6'>
            <p className='font-bold text-indigo-900'>Feedback Details</p>
            <p className='mb-4'>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              name='description'
              required
              className='bg-indigo-100 p-4 w-full rounded-lg'
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            ></textarea>
          </div>

          <div className='flex flex-col mt-6 sm:flex-row sm:items-center sm:justify-end sm:w-2/3 sm:ml-auto'>
            <button
              className='p-3 bg-purple-700 text-sm font-bold text-white rounded-lg sm:mr-3'
              type='submit'
            >
              Save Changes
            </button>

            <button
              className='p-3 mt-2 bg-indigo-900 text-sm font-bold text-white rounded-lg sm:mt-0 sm:mr-3'
              onClick={(e) => {
                e.preventDefault()
                setTitle(requiredData.title)
                setDescription(requiredData.description)
                setPickedCategory(requiredData.category)
                router.push('/')
              }}
            >
              Cancel
            </button>

            <button
              className='p-3 mt-2 bg-red-500 text-sm font-bold text-white rounded-lg sm:mt-0'
              onClick={(e) => {
                e.preventDefault()
                deleteRequest(requiredData.id)
                router.push('/')
              }}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit
