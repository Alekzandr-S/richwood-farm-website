import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ExploreComprehensiveAgriServices = () => {
  return (
    <div className='flex flex-col gap-4 lg:gap-8 2xl:gap-16'>
      <div className='flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-16'>
        <div>
          <h2 className='text-2xl text-white lg:text-3xl 2xl:text-4xl font-semibold'>Explore Our Comprehensive Agricultural Services for Quality Cash Crop Production</h2></div>
        <div><p className='text-lg text-white'>At Richwood Farms Ltd, we specialize in supplying high-quality crops such as onions, garlic, ginger, and potatoes. Our expertise extends to agricultural consulting, ensuring that you receive tailored advice for optimal crop growth. Partner with us to enhance your agricultural success.</p></div>
      </div>

      <div className='flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-16'>
        <div className='flex flex-col lg:gap-8'>
          <div>
            <Image
              src='/images/explore-comprehensive/reliable.jpg'
              alt=''
              width={250}
              height={250}
            />
          </div>
          <div><h3 className='text-xl text-white lg:text-2xl 2xl:text-3xl font-'>Reliable Cash Crop Supply Services to Meet Your Agricultural Needs</h3></div>
          <div><p className='text-lg text-white'>We provide a consistent supply of fresh, locally grown crops.</p></div>
          <div><Button variant='link' className='text-[#FFD700]'>Learn More</Button></div>
        </div>

        <div className='flex flex-col lg:gap-8'>
          <div>
            <Image
              src='/images/explore-comprehensive/sustainable.jpg'
              alt=''
              width={250}
              height={250}
            />
          </div>
          <div><h3 className='text-xl text-white lg:text-2xl 2xl:text-3xl'>Expert Agricultural Consulting for Sustainable Farming Practices</h3></div>
          <div><p className='text-lg text-white'>Our consulting services help you implement best practices for sustainable agriculture.</p></div>
          <div><Button variant='link' className='text-[#FFD700]'>Sign Up</Button></div>
        </div>

        <div className='flex flex-col lg:gap-8'>
          <div>
            <Image
              src='/images/explore-comprehensive/innovative.jpg'
              alt=''
              width={250}
              height={250}
            />
          </div>
          <div><h3 className='text-xl text-white lg:text-2xl 2xl:text-3xl'>Innovative Solutions for Crop Management and Production Efficiency</h3></div>
          <div><p className='text-lg text-white'>We offer cutting-edge strategies to maximize your crop yield.</p></div>
          <div><Button variant='link' className='text-[#FFD700]'>Contact</Button></div>
        </div>
      </div>
    </div>
  )
}

export default ExploreComprehensiveAgriServices