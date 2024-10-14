import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ExploreComprehensiveAgriServices = () => {
  return (
    <div>
      <div className='flex flex-col gap-4 lg:gap-16'>
        <div>
          <h2 className='text-3xl'>Explore Our Comprehensive Agricultural Services for Quality Cash Crop Production</h2></div>
        <div><p>At Richwood Farms Ltd, we specialize in supplying high-quality crops such as onions, garlic, ginger, and potatoes. Our expertise extends to agricultural consulting, ensuring that you receive tailored advice for optimal crop growth. Partner with us to enhance your agricultural success.</p></div>
      </div>
      <div className='flex flex-col gap-4 lg:gap-16'>
        <div className='flex flex-col gap-4 lg:gap-16'>
          <div>
            <Image
              src=''
              alt=''
              width={250}
              height={250}
            />
          </div>
          <div><h3>Reliable Cash Crop Supply Services to Meet Your Agricultural Needs</h3></div>
          <div><p>We provide a consistent supply of fresh, locally grown crops.</p></div>
          <div><Button>Learn More</Button></div>
        </div>
        <div className='flex flex-col'>
          <div>
            <Image
              src=''
              alt=''
              width={250}
              height={250}
            />
          </div>
          <div><h3>Expert Agricultural Consulting for Sustainable Farming Practices</h3></div>
          <div><p>Our consulting services help you implement best practices for sustainable agriculture.</p></div>
          <div><Button>Sign Up</Button></div>
        </div>
        <div className='flex flex-col'>
          <div>
            <Image
              src=''
              alt=''
              width={250}
              height={250}
            />
          </div>
          <div><h3>Innovative Solutions for Crop Management and Production Efficiency</h3></div>
          <div><p>We offer cutting-edge strategies to maximize your crop yield.</p></div>
          <div><Button>Contact</Button></div>
        </div>
      </div>
    </div>
  )
}

export default ExploreComprehensiveAgriServices