import React from 'react'
import Button from '../ui/Button'
import { cn } from '@/lib/utils'
import { auth } from '@/auth'

const Hero = async () => {
  const session = await auth()
  return (
    <div className='flex flex-col justify-center md:items-center md:text-center px-4 gap-2 mt-10'>
        <h1 className='font-bold text-primGreen text-4xl md:text-7xl '>Halo{!session && '!'} <span className='uppercase text-secGreen'>{session?.user.name + '!'}</span> welcome to <span className='text-primGreen font-bold'>Nutri Ta'</span></h1>
        <p className='md:text-2xl md:w-[35rem]'>Aplikasi pakar gizi dengan akses cepat dan mudah untuk mengelola kebutuhan <span className='text-primGreen font-bold'>Nutri</span>si <span className='text-primGreen font-bold'>ta'</span> sehari-hari.</p>
        <Button text='Pammulai mi' className={cn('mt-3 md:mx-auto')}/>
    </div>
  )
}

export default Hero