import Image from 'next/image'
import { useGlobalContext } from '../../context/GlobalContext'
import Feedback from '../../components/Feedback'
import { useRouter } from 'next/router'
import CommentsContainer from '../../components/CommentsContainer'
import Link from 'next/link'
import CommentInput from '../../components/CommentInput'
import Head from 'next/head'

const CommentsPage = () => {
  const router = useRouter()
  const { productRequests } = useGlobalContext()
  const selectedFeedback = productRequests?.find((item) => {
    return item.id.toString() === router.query.id
  })
  return (
    <div className='min-h-screen bg-indigo-100 p-4 text-indigo-900 sm:p-8 lg:px-36'>
      <Head>
        <title>Comments</title>
      </Head>
      <div className='flex items-center justify-between font-semibold text-sm'>
        <Link href='/'>
          <div className='flex items-center hover:cursor-pointer'>
            <Image src='/shared/icon-arrow-left.svg' width={12} height={10} />
            <p className='ml-3 text-indigo-900'>Go Back</p>
          </div>
        </Link>
        <Link href={`/editfeedback/${router.query.id}`}>
          <button className='text-white p-2 bg-indigo-700 rounded-lg text-sm font-semibold'>
            Edit Feedback
          </button>
        </Link>
      </div>

      <div>
        <Feedback {...selectedFeedback} />
        {selectedFeedback?.comments && (
          <CommentsContainer comments={selectedFeedback?.comments} />
        )}
        <CommentInput id={selectedFeedback?.id} />
      </div>
    </div>
  )
}

export default CommentsPage
