'use client'

import { Button } from '@/components/ui/button'
import { fadeIn } from '@/hooks/variants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-16'>
      <div className='flex flex-col gap-4 lg:gap-16'>
        <div className=''>
          <motion.h1 
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className='text-4xl text-[#FFD700] xl:text-6xl 2xl:text-8xl font-bold'>
            Welcome to Richwood Farms Ltd: Growing Fresh Produce
          </motion.h1>
        </div>
        <div>
          <motion.p 
            variants={fadeIn('right', 0.35)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className='text-lg text-white'>
            At Richwood Farms Ltd, we are dedicated to cultivating high-quality cash crops like onions, garlic, ginger, and potatoes. As a startup, our mission is to bring fresh, sustainable produce to your table while supporting local agriculture.
          </motion.p>
        </div>
        <motion.div 
          variants={fadeIn('right', 0.45)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className='flex flex-row items-start'>
          <Button variant='default'>Learn More</Button>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
      >
        <Image 
          src='/images/hero-section/135861580_10303829.jpg' 
          alt='hero' 
          width={700} 
          height={700}></Image>
      </motion.div>
    </div>
  )
}

export default HeroSection