import React from 'react'
import Hero from "@/components/layout/Hero"
import FeatureCard from '../ui/FeatureCard'

export  const  HomePage = async () => {
  
  return (
    <div>
      <Hero/>
      <div className='grid content-center justify-items-center grid-cols-2 md:grid-cols-4 p-4 gap-4 md:gap-0 mt-10'>
        <FeatureCard href='/kalkulator-kalori' judul='Kalkulator Kalori'/>
        <FeatureCard href='/' judul='coming soon'/>
        <FeatureCard href='/' judul='coming soon'/>
        <FeatureCard href='/' judul='coming soon'/>
      </div>
    </div>
  )
}
