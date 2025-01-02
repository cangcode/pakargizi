import React from 'react'
import Button from '../ui/Button'
import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center md:text-center px-4 gap-2'>
        <h1 className='font-bold text-primGreen text-4xl uppercase md:text-5xl '>Panduan Gizi di Genggamanmu</h1>
        <p className='md:text-xl '>Akses cepat dan mudah untuk mengelola <br /> kebutuhan gizi sehari-hari.</p>
        <Button text='Get Started' className={cn('mt-3 md:mx-auto')}/>
    </div>
  )
}

export default Hero