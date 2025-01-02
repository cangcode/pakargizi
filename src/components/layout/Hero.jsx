import React from 'react'
import Button from '../ui/Button'
import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center px-4 gap-2'>
        <h1 className='font-bold text-primGreen text-4xl uppercase '>Panduan Gizi di Genggamanmu</h1>
        <p>Akses cepat dan mudah untuk mengelola <br /> kebutuhan gizi sehari-hari.</p>
        <Button text='Get Started' className={cn('mt-3')}/>
    </div>
  )
}

export default Hero