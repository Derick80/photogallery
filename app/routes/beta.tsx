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

  return json({ photos })
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

  return (
    <Layout>
      <div className='group relative m-auto h-[780px] w-full max-w-[1400px] py-16 px-4 dark:bg-black'></div>
    </Layout>
  )
}
