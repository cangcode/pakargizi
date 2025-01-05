import React from 'react'
import { Login } from '../ui/Login'
import { Humburger } from './Humburger'
import { auth } from '@/auth'
import Link from 'next/link'


export const Navbar = async () => {
  const session = await auth()
  
  return (
    <div className='flex justify-between p-4 items-center'>
        <Link href={'/'} className='font-bold text-xl text-primGreen'>Nutri Ta&apos;</Link>
        <div className='flex md:flex-row-reverse gap-5 items-center'>
          {session?.user.image ? (
            <img src={session.user.image as string} className='w-10 rounded-full shadow-md' alt="Profile Image" />
          ):(
            <Login/>
          )}
            <Humburger/>
        </div>
    </div>
  )
}
