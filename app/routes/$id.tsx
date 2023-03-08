import { LoaderArgs, json, ActionArgs, redirect } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import Layout from '~/components/shared/layout'
import { useOptionalUser } from '~/lib/app-utils'
import { prisma } from '~/utils/prisma.server'

export async function loader({ request, params }: LoaderArgs) {
  console.log(params, 'params')
  const data = await prisma.photos.findUnique({
    where: {
      id: params.id
    }
  })

  return json({ data })
}

export async function action({ request, params }: ActionArgs) {
  const formData = await request.formData()
  const action = formData.get('action') as string
  const id = formData.get('id')
  const userId = formData.get('userId') as string
  const title = formData.get('title')
  const description = formData.get('description')
  const city = formData.get('city')
  const imageUrl = formData.get('imageUrl')

  if (
    typeof id !== 'string' ||
    typeof title !== 'string' ||
    typeof description !== 'string' ||
    typeof city !== 'string' ||
    typeof imageUrl !== 'string'
  ) {
    return json({ error: 'something went wrong with a type' }, { status: 500 })
  }

  switch (action) {
    case 'edit':
      return await prisma.photos.update({
    where: {
      id: id
    },
    data: {
      title,
      description,
      city,
      imageUrl,
      userId: userId
    }
  })
    case 'delete':
      return await prisma.photos.delete({
        where: {
          id: id
        }
      })
  }

  return redirect(`/`)
}
export default function EditPhotos() {
  const user = useOptionalUser()
  const data = useLoaderData() as unknown as {
    data: {
      id: string
      title: string
      description: string
      city: string
      imageUrl: string
    }
  }
  return (
    <Layout>
      <Form
        method='post'
        className='flex h-full flex-col items-center justify-start dark:bg-black'
      >
        <input type='hidden' name='id' defaultValue={data.data.id} />
        <input
          type='hidden'
          name='imageUrl'
          defaultValue={data.data.imageUrl}
        />
        <input type='hidden' name='userId' defaultValue={user?.id} />
        <label htmlFor='title' className='text-2xl text-black dark:text-white'>
          Title
        </label>
        <input
          id='title'
          name='title'
          className='rounded-md border-2 italic text-black'
          defaultValue={data.data.title}
        />
        <label
          htmlFor='description'
          className='text-2xl text-black dark:text-white'
        >
          Description
        </label>
        <input
          id='description'
          name='description'
          className='rounded-md border-2 italic text-black'
          defaultValue={data.data.description}
        />
        <label htmlFor='city' className='text-2xl text-black dark:text-white'>
          City
        </label>
        <input
          id='city'
          name='city'
          className='rounded-md border-2 italic text-black'
          defaultValue={data.data.city}
        />

        <button
        name='_action'
        value='edit'
          className='ml-4 rounded-md px-4 py-2 text-white dark:bg-black'
          type='submit'
        >
          Submit
        </button>
        <button
        name='_action'
        value='delete'
          className='ml-4 rounded-md px-4 py-2 text-white dark:bg-black'
          type='submit'
        >
          delete
        </button>
      </Form>
      <div className='dark:bg-black dark:text-white'>
        <div className='group relative m-auto h-[780px] w-full max-w-[1400px] py-16 px-4'>
          <img src={data.data.imageUrl} alt={data.data.title} />
        </div>
      </div>
    </Layout>
  )
}
