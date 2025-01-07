import React from 'react'
import { MenuList } from '../ui/MenuList'
import { routes } from '@/configs/routes'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-primGreen flex flex-col gap-5 w-full justify-center p-4 pt-10 md:px-20'>
        <Link href={'/'} className='font-bold text-2xl text-white w-full'>Nutri Ta&apos;</Link>
        <ul className='w-full'>
            {routes.map((item,index)=>(
                <li
                className='text-[#97ce38] mt-2'
                key={index}
                >
                {item.name}
                </li>
            ))}
        </ul>
        <p className='text-neutral-100 italic'>Aplikasi ini adalah tugas dari mata kuliah Sistem Pakar yang diampu oleh Pak Ir. Untung Suwardoyo S.Kom, MT, IPP. Aplikasi ini dikembangkan oleh tim yang terdiri dari tiga mahasiswa: Ichsan Rasyid, M. Rayha Pratama, dan Muhammad Hafidz Adnan.</p>
    </div>
  )
}

export default Footer