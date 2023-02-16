import { ActionArgs, json, redirect } from '@remix-run/node'
import { Form, useFetcher } from '@remix-run/react'
import { prisma } from '~/utils/prisma.server'
import { requireUserId } from '~/utils/user.server'


type ActionData = {
    imageUrl?: string
  }
export async function action({request}:ActionArgs){
  const user = requireUserId(request)
    const formData = await request.formData()
    const title = formData.get('title')
    const description = formData.get('description')
    const city = formData.get('city')
    const imageUrl = formData.get('imageUrl')

    if(typeof title !== 'string' || typeof description !== 'string' || typeof city !== 'string' || typeof imageUrl !== 'string'){
        return json({error: 'something went wrong'}, {status: 500})
    }

 await prisma.photos.create({
        data: {
            title,
            description,
            city,
            imageUrl,
            userId: user.id
        }
    })

    return redirect('/')
}


export default function New(){

    const fetcher = useFetcher<ActionData>()



    const onClick = async () =>
      fetcher.submit({
        imageUrl: 'imageUrl',
        key: 'imageUrl',
        action: '/actions/image'
      })

    return(
        <>
 <Form
          className='col-span-2 col-start-3 flex flex-col rounded-xl shadow-md'
          method='post'
        >
          <label htmlFor='imageUrl'>Image</label>
          <input
            type='text'
            className='rounded-xl bg-crimson12 text-slate12'
            name='imageUrl'
            value={fetcher?.data?.imageUrl}
            onChange={(e) => console.log(e.target.value)}
          />
            <label htmlFor='title'>Title</label>
          <input

            name='title'
            onChange={(e) => console.log(e.target.value)}
          />
            <label htmlFor='description'>Description</label>
          <input

            name='description'
            onChange={(e) => console.log(e.target.value)}
          />
 <button type='submit'>Save post</button>
        </Form>
<div>
<fetcher.Form
            method='post'
            encType='multipart/form-data'
            action='/actions/image'
            onClick={onClick}
            className='col-span-2 col-start-3 flex flex-col rounded-xl shadow-md'
          >
            <label htmlFor='imageUrl'>Image to upload</label>
            <input
              id='imageUrl'
              className='rounded-xl bg-crimson12 text-slate12'
              type='file'
              name='imageUrl'
              accept='image/*'
            />
            <button type='submit'>Upload</button>
          </fetcher.Form>
          {fetcher.data ? (
            <>
              <div>
                File has been uploaded to S3 and is available under the
                following URL:
              </div>
              <input
                type='hidden'
                name='imageUrl'
                value={fetcher.data.imageUrl}
              />
              {fetcher?.data?.imageUrl}

              <img src={fetcher.data.imageUrl} alt={'#'} />
            </>
          ) : null}
</div>
        </>
    )
}