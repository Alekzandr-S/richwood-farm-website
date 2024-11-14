'use client'

import { Button } from '@/components/ui/button'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const DiscoverPremiumCropSelection = () => {
  doSomeThing();

  function doSomeThing() {
    console.log('The something done');
  }
  
  return (
    <div className='flex flex-col gap-4 lg:gap-16 2xl:gap-24 lg:grid lg:grid-cols-2 '>
      <div className='flex flex-col gap-4 lg:gap-16 2xl:gap-'>
        <div>
          <Image
            src='/images/discover-premium-section/icon/icons8-premium-64.png'
            alt=''
            width={240}
            height={240}
          />
        </div>
        <div className=''>
          <h2 className='text-4xl text-white lg:text-5xl 2xl:text-6xl font-semibold'>Discover Our Premium Cash Crop Selections</h2>
        </div>
        <div><p className='text-lg text-white'>At Richwood Farms, we specialize in cultivating high-quality onions, garlic, ginger, and potatoes. Our commitment to sustainable farming practices ensures that you receive fresh, flavorful produce straight from our fields.</p></div>
        <div>
          <Button>Learn More</Button>
        </div>
      </div>
      <motion.div
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
      >
        <Image 
          src='/images/discover-premium-section/Screenshot_20241018-152358_Google.jpg'
          alt=''
          width={700}
          height={700}
        />
      </motion.div>
    </div>
    
  )
}

export default DiscoverPremiumCropSelection