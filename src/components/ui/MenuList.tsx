'use client'
import Link from 'next/link'
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export const MenuList = () => {
  const { data: session } = useSession()
  return (
    <div className='flex flex-col md:flex-row md:shadow-none gap-2'>
        <Link href={'/'} className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-full p-2 '>Beranda</Link>
        <Link href={'/dashboard'} className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-full p-2 '>Dasboard</Link>
        <Link href={'/'} className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-full p-2 '>Beranda</Link>
        {session ? <button className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-full p-2 ' onClick={() => signOut()}>Logout</button> : null}
    </div>
  )
}
