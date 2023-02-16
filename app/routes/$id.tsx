import { LoaderArgs,json, ActionArgs, redirect } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import Layout from '~/components/shared/layout'
import { useOptionalUser } from '~/lib/app-utils'
import { prisma } from '~/utils/prisma.server'

export async function loader({request, params}: LoaderArgs) {
  console.log(params,'params')
  const data = await prisma.photos.findUnique({
    where: {
      id: params.id
    }
  })

  return json({data})

}


export async function action({request,params}:ActionArgs){


  const formData = await request.formData()
  const id = formData.get('id')
  const userId = formData.get('userId')
  const title = formData.get('title')
  const description = formData.get('description')
  const city = formData.get('city')
  const imageUrl = formData.get('imageUrl')

  if(typeof id !== 'string' || title !== 'string' || typeof description !== 'string' || typeof city !== 'string' || typeof imageUrl !== 'string' ){
    return json({error: 'something went wrong with a type'}, {status: 500})
  }

  await prisma.photos.update({
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

  return redirect(`/`)


}
export default function EditPhotos(){
  const user = useOptionalUser()
const data = useLoaderData() as unknown as {data: {id:string, title: string, description: string, city: string, imageUrl: string}}
  return (
    <Layout>
    <Form method="post"
    className='h-full dark:bg-black flex flex-col items-center justify-start'
    >
      <input type="hidden" name="id" defaultValue={data.data.id} />
      <input type="hidden" name="imageUrl" defaultValue={data.data.imageUrl} />
      <input type="hidden" name="userId" defaultValue={user?.id} />
      <label htmlFor="title"
      className='text-2xl text-black dark:text-white'
      >Title</label>
      <input id="title" name="title"
      className='italic border-2 rounded-md'
      defaultValue={data.data.title} />
      <label htmlFor="description"

      className='text-2xl text-black dark:text-white'
      >Description</label>
      <input id="description" name="description"
       className='italic border-2 rounded-md'
      defaultValue={data.data.description} />
      <label htmlFor="city"

      className='text-2xl text-black dark:text-white'
      >City</label>
      <input id="city" name="city"
 className='italic border-2 rounded-md'
      defaultValue={data.data.city} />

      <button
      className='dark:bg-black text-white rounded-md px-4 py-2 ml-4'
      type="submit">Submit</button>
    </Form>
    <div className="dark:bg-black dark:text-white">
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <img src={data.data.imageUrl}
        alt={data.data.title}
        />
        </div>
        </div>
    </Layout>
  )
}
