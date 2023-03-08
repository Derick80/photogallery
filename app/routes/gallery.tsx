import { useState } from 'react'
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  DotsHorizontalIcon
} from '@radix-ui/react-icons'
import type { LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from 'react-router'
import { prisma } from '~/utils/prisma.server'
import { NavLink } from '@remix-run/react'
import { useOptionalUser } from '~/lib/app-utils'
import Layout from '~/components/shared/layout'
import LikeContainer from '~/components/like-container'
import type { Like } from '~/utils/schemas/like-schema'
export async function loader(request: LoaderArgs) {
  const photos = await prisma.photos.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      _count: {
        select: {
          likes: true
        }
      },
      likes: true,
      user: true
    }
  })

  const kanazawa = photos.filter((photo) => photo.city === 'kanazawa')
  const tokyo = photos.filter((photo) => photo.city === 'tokyo')
  const osaka = photos.filter((photo) => photo.city === 'osaka')
  const kyoto = photos.filter((photo) => photo.city === 'kyoto')

  return json({ photos, kanazawa, tokyo, osaka, kyoto })
}

export default function Index() {
  const user = useOptionalUser()

  const data = useLoaderData() as {
    photos: Array<{
      id: string
      imageUrl: string
      city: string
      description: string
      title: string
      likes: Like[]
    }>
  }

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? data.photos.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.photos.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <Layout>
      <div className='group relative m-auto h-[380px] w-full max-w-[350px] py-16 px-4 dark:bg-black'>
        <div
          style={{
            backgroundImage: `url(${data.photos[currentIndex].imageUrl})`
          }}
          className='h-full w-full rounded-2xl bg-cover bg-center duration-500'
        ></div>
        <div className='flex gap-2 flex-row items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
          <p>{data.photos[currentIndex].title}</p>
          <p>{data.photos[currentIndex].city}</p>



          {user && (
            <NavLink to={`/${data.photos[currentIndex].id}`}>
              <button className='ml-4 rounded-md bg-black px-4 py-2 text-white'>
                Edit
              </button>
            </NavLink>
          )}</div>
        </div>

        {/* Left Arrow */}
        <div className='absolute top-[50%] left-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block'>
          <ChevronLeftIcon onClick={prevSlide} fill='currentColor' />
        </div>
        {/* Right Arrow */}
        <div className='absolute top-[50%] right-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block'>
          <ChevronRightIcon onClick={nextSlide} fill='currentColor' />
        </div>
        <div className='top-4 flex justify-center py-2'>
          {data.photos.map((slide, slideIndex) => (
            <div
              id={slide.id}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='cursor-pointer text-2xl'
            >
              <DotsHorizontalIcon />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
