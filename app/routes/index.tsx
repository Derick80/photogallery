import { LoaderArgs, json } from '@remix-run/node'
import { NavLink, useLoaderData } from '@remix-run/react'
import { useOptionalUser } from '~/lib/app-utils'
import { prisma } from '~/utils/prisma.server'

export async function loader(request: LoaderArgs) {
  const photos = await prisma.photos.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  const kanazawa = photos.filter((photo) => photo.city === 'kanazawa')

  return json({ photos, kanazawa })
}

export default function Index() {
  const data = useLoaderData() as {
    photos: Array<{
      id: string
      imageUrl: string
      city: string
      description: string
      title: string
    }>
  }
const user = useOptionalUser()
  return (
    <div className='columns-1 md:columns-3'>

        {data.photos.map((photo) => (

            <><img
            key={ photo.id }
            src={ photo.imageUrl }
            alt={ photo.title }
            className=' aspect-video' /><p>            { photo.city }
            </p>

            <p>
            {user && (
            <NavLink to={`/${photo.id}`}>
              <button className='ml-4 rounded-md bg-black px-4 py-2 text-white'>
                Edit
              </button>
            </NavLink>
          )}</p></>        ))}
    </div>
  )
}
