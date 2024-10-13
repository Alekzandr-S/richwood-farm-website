import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const DiscoverPremiumCropSelection = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4'>
        <div><p className=''>Fresh</p></div>  
        <div><h2 className='text-3xl'>Discover the Health Benefits of Our Cash Crops</h2></div>  
        <div><p>Our crops are packed with essential nutrients that promote overall health. Incorporating onions, garlic, ginger, and potatoes into your diet can enhance your immune system and improve digestion.</p></div>  
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-2'>
            <div className=''>
              <Image 
                src='' 
                alt=''
                width={24}
                height={24}
              />
            </div>
            <div><p>Rich in vitamins and minerals for optimal health</p></div>
          </div>
          <div className='flex flex-row gap-2'>
            <div className=''>
              <Image 
                src='' 
                alt=''
                width={24}
                height={24}
              />
            </div>
            <div><p>Supports immune function and boosts energy levels</p></div>
          </div>
          <div className='flex flex-row gap-2'>
            <div className=''>
              <Image 
                src='' 
                alt=''
                width={24}
                height={24}
              />
            </div>
            <div><p>Versatile ingredients for delicious and nutritious meals</p></div>
          </div>
        </div>  
        <div><Button variant={'outline'}>Learn More</Button></div>  
      </div>
      <div>
        <Image
          src=''
          alt=''
          height={250}
          width={250}
        />
      </div>  
    </div>
  )
}

export default DiscoverPremiumCropSelection