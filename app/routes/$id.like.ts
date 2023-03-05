import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import invariant from 'tiny-invariant'


import type { MetaFunction } from '@remix-run/node' // or cloudflare/deno
import { getUser } from '~/utils/user.server'
import { createLike, deleteLike } from '~/utils/likes.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Like a post',
    description: "Like a post on Derick's blog"
  }
}
export const loader: LoaderFunction = () => {
  throw new Response("This page doesn't exists.", { status: 404 })
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = await getUser(request)
  invariant(user, 'need  user')
  const photoId = params.id
  const userId = user.id
  console.log('userId', userId)

  if (!userId || !photoId) {
    return json(
      { error: 'invalid form data bad userId or photoId like' },
      { status: 400 }
    )
  }
  try {
    if (request.method === 'POST') {
      await createLike({
        user: {
          connect: {
            id: userId
          }
        },
        photo: {
          connect: {
            id: photoId
          }
        }
      })
    }

    if (request.method === 'DELETE') {
      await deleteLike({ userId,  photoId })
    }

    return json({ success: true })
  } catch (error) {
    return json({ error: 'invalid form data like' }, { status: 400 })
  }
}
