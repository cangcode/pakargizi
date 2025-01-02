'use client'
import Link from 'next/link'
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'



export const MenuList = () => {
  const { data: session } = useSession()
  const router = useRouter();
  return (
    <div className='flex flex-col md:flex-row md:shadow-none gap-2'>
        <Link href={'/'} className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-fit p-2 '>Beranda</Link>
        <Link href={'/dashboard'} className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-fit p-2 '>Konsultasi</Link>
        <Link href={'/'} className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-fit p-2 '>Hitung Kebutuhan Kalori</Link>
        <Link href={'/'} className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-fit p-2 '>Hitung BMI</Link>
        {session ? <button className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-fit p-2 ' onClick={() => {
        signOut()
        router.push('/')
        }}>Logout</button> : null}
    </div>
  )
}
