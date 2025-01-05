'use client'
import FormHitungKalori from '@/components/layout/FormHitungKalori'
import React from 'react'
import { useSession } from "next-auth/react"


const Page = () => {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-20 h-20 animate-pulse flex text-xl font-semibold text-secGreen'> Loading.. </div>
      </div>
    )
  }
    if (!session?.user) {
      return  (
        <div className='h-96 font-semibold text-primGreen justify-center flex items-center'>Login terlebih dahulu!</div>
      )

    }
    return (
    <div>
        <FormHitungKalori/>
    </div>
  )
}

export default Page
