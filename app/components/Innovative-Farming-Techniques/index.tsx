import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const DiscoverHealthBenefitsOfCrops = () => {
  return (
    <div className='flex flex-col gap-4 lg:gap-8 2xl:gap-16 lg:items-start'>
      <div className=' lg:grid grid-cols-2 gap-8'>
        <div  className='flex flex-col gap:8'>
          <div><p>Sustainability</p></div>
          <div className='text-4xl lg:text-5xl 2xl:text-6xl font-semibold'><h2>Our Innovative Farming Techniques Explained</h2></div>
        </div>

        <div>
          <p className='text-lg'>At Richwood Farms Ltd, we utilize advanced agricultural techniques to ensure optimal crop growth. Our methods focus on sustainability, soil health, and efficient water usage. This allows us to produce high-quality onions, garlic, ginger, and potatoes while minimizing our environmental impact.</p>
        </div>
      </div>

      <div className='flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-16'>
        <div className='flex flex-col gap-8'>
          <div>
            <Image
              src='/images/FarmCrops.webp'
              alt=''
              width={150}
              height={150}
            />
          </div>
          <div><h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-'>Soil Preparation and Crop Selection</h3></div>
          <div><p className='text-lg'>We carefully select crop varieties suited for our local climate.</p></div>
        </div>
        <div className='flex flex-col gap-8'>
          <div>
            <Image
              src='/images/FarmCrops.webp'
              alt=''
              width={150}
              height={150}
            />
          </div>
          <div><h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-'>Irrigation and Water Management Practices</h3></div>
          <div><p className='text-lg'>Our irrigation systems are designed for efficiency.</p></div>
        </div>
        <div className='flex flex-col gap-8'>
          <div>
            <Image
              src='/images/FarmCrops.webp'
              alt=''
              width={150}
              height={150}
            />
          </div>
          <div><h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-'>Harvesting Techniques for Optimal Quality</h3></div>
          <div><p className='text-lg'>We employ gentle harvesting methods to preserve freshness.</p></div>
        </div>
      </div>
      <div>
        <Button variant={'outline'}>Learn More</Button>
      </div>
    </div>
  )
}

export default DiscoverHealthBenefitsOfCrops