import { auth } from '@/auth'
import FormHitungKalori from '@/components/layout/FormHitungKalori'
import React from 'react'

const page = async () => {
    const session = await auth()
    if (!session?.user) return <div className='h-96 font-semibold text-primGreen justify-center flex items-center'>Login terlebih dahulu!</div>
  return (
    
    <div>
        <FormHitungKalori/>
    </div>
  )
}

export default page
