import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className=''>
        <h1 className='text-4xl'>
          Welcome to Richwood Farms Ltd: Growing Fresh Produce
        </h1>
      </div>
      <div>
        <p>
          At Richwood Farms Ltd, we are dedicated to cultivating high-quality cash crops like onions, garlic, ginger, and potatoes. As a startup, our mission is to bring fresh, sustainable produce to your table while supporting local agriculture.
        </p>
      </div>
      <div className='flex flex-row items-start'>
        <Button variant='default'>Learn More</Button>
      </div>
      <div>
        <Image src='images/img1.svg' alt='hero' width={200} height={200}></Image>
      </div>
    </div>
  )
}

export default HeroSection