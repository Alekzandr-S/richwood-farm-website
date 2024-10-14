import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const DiscoverHealthBenefitsOfCrops = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div><p>Sustainability</p></div>
      <div className='text-3xl'><h2>Our Innovative Farming Techniques Explained</h2></div>
      <div>
        <p>At Richwood Farms Ltd, we utilize advanced agricultural techniques to ensure optimal crop growth. Our methods focus on sustainability, soil health, and efficient water usage. This allows us to produce high-quality onions, garlic, ginger, and potatoes while minimizing our environmental impact.</p>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col '>
          <div>
            <Image
              src=''
              alt=''
              width={24}
              height={24}
            />
          </div>
          <div><h3>Soil Preparation and Crop Selection</h3></div>
        </div>
        <div>
          <Image
            src=''
            alt=''
            width={24}
            height={24}
          />
        </div>
        <div><h3>Irrigation and Water Management Practices</h3></div>
        <div>
          <Image
            src=''
            alt=''
            width={24}
            height={24}
          />
        </div>
        <div><h3>Harvesting Techniques for Optimal Quality</h3></div>
      </div>
      <div>
        <Button variant={'outline'}>Learn More</Button>
      </div>
    </div>
  )
}

export default DiscoverHealthBenefitsOfCrops