import {
  ActivityLogIcon,
  EnterIcon,
  HeartFilledIcon,
  HeartIcon
} from '@radix-ui/react-icons'
import type { FormMethod } from '@remix-run/react'
import { NavLink, useFetcher } from '@remix-run/react'
import { useState } from 'react'
import { Like } from '~/utils/schemas/like-schema'

export type LikeContainerProps = {
  likes: Like[]
  likeCounts: number
  currentUser: string
  photoId: string
}

export default function LikeContainer({
  likes,
  likeCounts,
  currentUser,
  photoId
}: LikeContainerProps) {
  const fetcher = useFetcher()
  const userLikedPost = likes?.find(({ userId }) => {
    return userId === currentUser
  })
    ? true
    : false

  const [likeCount, setLikeCount] = useState(likes.length)
  const [isLiked, setIsLiked] = useState(userLikedPost)

  const toggleLike = async () => {
    let method: FormMethod = 'delete'
    if (userLikedPost) {
      setLikeCount(likeCount - 1)
      setIsLiked(false)
    } else {
      method = 'post'
      setLikeCount(likeCount + 1)
      setIsLiked(true)
    }

    fetcher.submit(
      { userId: currentUser, photoId },
      { method, action: `/${photoId}/like` }
    )
  }

  return (
    <>
      {currentUser ? (
        <button type='button' onClick={toggleLike}>
          {isLiked ? (
            <div className='flex flex-row space-x-1'>
              <HeartFilledIcon style={{ color: 'red', fill: 'red' }} />
              <p className='space-x-1 text-xs'>{likeCount}</p>
            </div>
          ) : (
            <div className='flex flex-row space-x-1'>
              <HeartIcon />
              <p className='space-x-1 text-xs'>{likeCount}</p>
            </div>
          )}
        </button>
      ) : (
        <>
          <div>
            <div>Liked by: {likeCount}</div>
          </div>
          <NavLink
            to='/login'
            style={{ textDecoration: 'none', color: 'currentcolor' }}
          >
<EnterIcon />
          </NavLink>
        </>
      )}
    </>
  )
}
