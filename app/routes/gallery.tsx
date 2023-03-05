import { LoaderArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { prisma } from '~/utils/prisma.server'

export async function loader(request: LoaderArgs){
    const photos = await prisma.photos.findMany({
      orderBy:{
        createdAt: 'desc'
      }
    })

      return json({photos})

    }



export default function Index() {
    const data = useLoaderData() as { photos: Array<{id:string, imageUrl: string, city: string, description: string, title: string }>
  }

  return (
    <div
    className='flex'
    >
    <ul
    className='flex'>
    {data.photos.map((photo) => (


        <li

        key={photo.id}
        ><img
        src={photo.imageUrl}
        alt={photo.title}
        className='object-contain w-80 h-80'
        /></li>


    )
    )}
    </ul>
    </div>
  )
}