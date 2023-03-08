import { NavLink } from '@remix-run/react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-center dark:bg-black dark:text-white h-screen'>
      <ul className=''>
        <li>
          <NavLink to={`/`}>
            <h1 className='mt-5 text-2xl font-bold'>Japan 2023</h1>
          </NavLink>
        </li>
      </ul>
      {children}
    </div>
  )
}
