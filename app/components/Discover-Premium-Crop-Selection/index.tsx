import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const DiscoverPremiumCropSelection = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4'>
        <div>
          <Image
            src=''
            alt=''
            width={24}
            height={24}
          />
        </div>
        <div className='text-3xl'>
          <h2>Discover Our Premium Cash Crop Selections</h2>
        </div>
        <div><p>At Richwood Farms, we specialize in cultivating high-quality onions, garlic, ginger, and potatoes. Our commitment to sustainable farming practices ensures that you receive fresh, flavorful produce straight from our fields.</p></div>
        <div>
          <Button>Learn More</Button>
        </div>
      </div>
      <div>
        <Image 
          src=''
          alt=''
          width={24}
          height={24}
        />
      </div>
    </div>
    
  )
}

export default DiscoverPremiumCropSelection