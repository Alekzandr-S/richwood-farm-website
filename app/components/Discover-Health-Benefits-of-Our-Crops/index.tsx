import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const DiscoverHealthBenefitsOfCrops = () => {
  return (

    <div className='flex flex-col gap-4 lg:grid lg:grid-cols-2'>
      <div className='flex flex-col gap-4 lg:gap-8 2xl:gap-16'>
        <div><p className=' text-white'>Fresh</p></div>  
        <div><h2 className='text-4xl text-white lg:text-5xl 2xl:text-6xl font-semibold'>Discover the Health Benefits of Our Cash Crops</h2></div>  
        <div><p className='text-lg text-white'>Our crops are packed with essential nutrients that promote overall health. Incorporating onions, garlic, ginger, and potatoes into your diet can enhance your immune system and improve digestion.</p></div>  
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row items-center gap-2'>
            <div className=''>
              <Image 
                src='/icons/discover-health-benefits/organic.png' 
                alt=''
                width={50}
                height={50}
              />
            </div>
            <div><p className='text-lg text-white'>Rich in vitamins and minerals for optimal health</p></div>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <div className=''>
              <Image 
                src='/icons/discover-health-benefits/energy-drink.png' 
                alt=''
                width={50}
                height={50}
              />
            </div>
            <div><p className='text-lg text-white'>Supports immune function and boosts energy levels</p></div>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <div className=''>
              <Image 
                src='/icons/discover-health-benefits/alternative-medicine.png' 
                alt=''
                width={50}
                height={50}
              />
            </div>
            <div><p className='text-lg text-white'>Versatile ingredients for delicious and nutritious meals</p></div>
          </div>
        </div>  
        <div><Button variant={'outline'}>Learn More</Button></div>  
      </div>
      <div>
        <Image
          src='/images/discover-health-benefits/overal-health.jpg'
          alt=''
          width={500}
          height={400}
        />
      </div>  
    </div>
  )
}

export default DiscoverHealthBenefitsOfCrops