import React from 'react'
import Hero from "@/components/layout/Hero"
import FeatureCard from '../ui/FeatureCard'
import { Badge, BadgeInfo, Calculator } from 'lucide-react'
import Footer from '../layout/Footer'

export  const  HomePage = async () => {
  
  return (
    <div>
      <Hero/>
      <div className='grid content-center justify-items-center grid-cols-2 md:grid-cols-4 p-4 gap-4 md:gap-0 my-10'>
        <FeatureCard 
          href='/kalkulator-kalori' 
          judul='Kalkulator Kalori' 
          icon={<Calculator 
                  size={90} 
                  color='#85A947' 
                  strokeWidth={1.2}
                />}
        />
        <FeatureCard 
          href='/' 
          judul='coming soon!' 
          icon={<BadgeInfo 
                  size={90} 
                  color='#85A947' 
                  strokeWidth={1.2}
                />}
        />
        <FeatureCard 
          href='/' 
          judul='coming soon!' 
          icon={<BadgeInfo 
                  size={90} 
                  color='#85A947' 
                  strokeWidth={1.2}
                />}
        />
      </div>
      <Footer/>
    </div>
  )
}
