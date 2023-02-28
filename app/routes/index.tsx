import { useState } from 'react'
import { ChevronRightIcon, ChevronLeftIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';
import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node'
import { useLoaderData } from 'react-router'
import { prisma } from '~/utils/prisma.server'
import {  NavLink } from '@remix-run/react'
import { useOptionalUser } from '~/lib/app-utils'
import Layout from '~/components/shared/layout'
export async function loader(request: LoaderArgs){

//   const data = await bucketItems()
// invariant(data, 'data is required')
// const contents = data.Contents
// invariant(contents, 'contents is required')

//  console.log(contents);

// const urllinks = contents.map((item) => {
//   return  `https://japan2023.s3.us-east-2.amazonaws.com/${item.Key}`

// })

// function getLinks(array: Array<string>, key:string){

// const newLinks = array.filter((item) => item.includes(key))

// const fixed = newLinks.filter((item)=> !item.includes('MP4' || 'mp4'))

// return fixed.map((item)=> {
// return {
//   imageUrl: item,
//   city: key,
//   description: 'description',
//   title: 'title'
// }
// })
// }

// const tokyotwo = getLinks(urllinks, 'tokyotwo')

// console.log(tokyotwo, 'tokyotwo')
const photos = await prisma.photos.findMany()

  return json({photos})

}


export default function Index() {
  const user = useOptionalUser()
  // const data = useLoaderData() as { kanazawa: Array<{ links: string, city: string, description: string, title: string }> }
  // console.log(data.kanazawa)

  const data = useLoaderData() as { photos: Array<{id:string, imageUrl: string, city: string, description: string, title: string }>
  }


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex:number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Layout>
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group dark:bg-black'>

<div
        style={{ backgroundImage: `url(${data.photos[currentIndex].imageUrl})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >
      </div>
      <div className='flex flex-row items-center justify-center'>
      {/* <p>{data.photos[currentIndex].title}</p> */}
     {user &&  <NavLink to={`/${data.photos[currentIndex].id}`}>
      <button className='bg-black text-white rounded-md px-4 py-2 ml-4'>Edit</button>
      </NavLink>
}
      </div>

      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ChevronLeftIcon onClick={prevSlide}
        fill='currentColor'
        />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ChevronRightIcon onClick={nextSlide}

        fill='currentColor'
        />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {data.photos.map((slide, slideIndex) => (

          <div
          id={slide.id}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >

            <DotsHorizontalIcon />
          </div>
        ))}
      </div>

  </div>
  </Layout>

  );
}

