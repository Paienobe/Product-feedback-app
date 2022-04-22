import Image from 'next/image'
import { useGlobalContext } from '../../context/GlobalContext'
import Feedback from '../../components/Feedback'
import { useRouter } from 'next/router'
import CommentsContainer from '../../components/CommentsContainer'
import Link from 'next/link'
import CommentInput from '../../components/CommentInput'

const CommentsPage = () => {
  const router = useRouter()
  const { feedbackData } = useGlobalContext()
  const selectedFeedback = feedbackData.productRequests.find((item) => {
    return item.id.toString() === router.query.id
  })
  console.log()
  return (
    <div className='min-h-screen bg-indigo-100 p-4 text-indigo-900'>
      <div className='flex items-center justify-between font-semibold text-sm'>
        <Link href='/'>
          <div className='flex items-center hover:cursor-pointer'>
            <Image src='/shared/icon-arrow-left.svg' width={12} height={10} />
            <p className='ml-3 text-indigo-900'>Go Back</p>
          </div>
        </Link>

        <button className='text-white p-2 bg-indigo-700 rounded-lg text-sm font-semibold'>
          Edit Feedback
        </button>
      </div>

      <div>
        <Feedback {...selectedFeedback} />
        {selectedFeedback?.comments && (
          <CommentsContainer comments={selectedFeedback?.comments} />
        )}
        <CommentInput />
      </div>
    </div>
  )
}

export default CommentsPage
