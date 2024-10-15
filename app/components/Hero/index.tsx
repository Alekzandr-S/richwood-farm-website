import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-16'>
      <div className='flex flex-col gap-4 lg:gap-16'>
        <div className=''>
          <h1 className='text-4xl xl:text-6xl 2xl:text-8xl font-bold'>
            Welcome to Richwood Farms Ltd: Growing Fresh Produce
          </h1>
        </div>
        <div>
          <p className='text-lg'>
            At Richwood Farms Ltd, we are dedicated to cultivating high-quality cash crops like onions, garlic, ginger, and potatoes. As a startup, our mission is to bring fresh, sustainable produce to your table while supporting local agriculture.
          </p>
        </div>
        <div className='flex flex-row items-start'>
          <Button variant='default'>Learn More</Button>
        </div>
      </div>

      <div>
        <Image 
          src='/images/FarmCrops.webp' 
          alt='hero' 
          width={700} 
          height={700}></Image>
      </div>
    </div>
  )
}

export default HeroSection