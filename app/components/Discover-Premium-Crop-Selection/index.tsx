import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const DiscoverPremiumCropSelection = () => {
  return (
    <div className='flex flex-col gap-4 lg:gap-16 2xl:gap-24 lg:grid lg:grid-cols-2 '>
      <div className='flex flex-col gap-4 lg:gap-16 2xl:gap-'>
        <div>
          <Image
            src='/images/FarmCrops.webp'
            alt=''
            width={240}
            height={240}
          />
        </div>
        <div className=''>
          <h2 className='text-4xl lg:text-5xl 2xl:text-6xl font-semibold'>Discover Our Premium Cash Crop Selections</h2>
        </div>
        <div><p className='text-lg'>At Richwood Farms, we specialize in cultivating high-quality onions, garlic, ginger, and potatoes. Our commitment to sustainable farming practices ensures that you receive fresh, flavorful produce straight from our fields.</p></div>
        <div>
          <Button>Learn More</Button>
        </div>
      </div>
      <div>
        <Image 
          src='/images/FarmCrops.webp'
          alt=''
          width={700}
          height={700}
        />
      </div>
    </div>
    
  )
}

export default DiscoverPremiumCropSelection