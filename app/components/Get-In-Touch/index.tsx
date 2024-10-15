import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const GetInTouch = () => {
  return (
    <div className='flex flex-col gap-8 lg:gap-16'>
      <div className='flex flex-col gap-4 lg:gap-8'>
        <div><p className='font-semibold'>Connect</p></div>
        <div><h3 className='text-2xl lg:text-2xl 3xl:text-4xl font-semibold'>Get in Touch</h3></div>
        <div><p className='text-lg'>We'd love to hear from you!</p></div>
      </div>

      <div className='flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-24'>
        <div className='flex flex-col gap-8 lg:gap-16'>
          <div className='flex flex-col gap-2 lg:gap-8'>
            <div>
              <Image
                src='/images/FarmCrops.webp'
                alt=''
                width={50}
                height={50}
              />
            </div>
            <div><h4 className='text-xl'>Email</h4></div>
            <div><p>Reach us at any time.</p></div>
            <div><p>info@richwoodfarms.com</p></div>
          </div>

          <div className='flex flex-col gap-2 lg:gap-8'>
            <div>
              <Image
                src='/images/FarmCrops.webp'
                alt=''
                width={50}
                height={50}
              />
            </div>
            <div><h4 className='text-xl'>Phone</h4></div>
            <div><p>Call us for inquiries</p></div>
            <div><p>+260 123-4567</p></div>
          </div>

          <div className='flex flex-col gap-4 lg:gap-8'>
            <div>
              <Image
                src='/images/FarmCrops.webp'
                alt=''
                width={50}
                height={50}
              />
            </div>
            <div><h4 className='text-xl'>Office</h4></div>
            <div><p>435 Great East Rd, Chongwe 101011</p></div>
            <div><Button variant='link'>Get Directions</Button></div>
          </div>
        </div>
        <div>
          <Image  
            src='/images/FarmCrops.webp'
            alt=''
            width={900}
            height={900}
          />
        </div>
      </div>
    </div>
  )
}

export default GetInTouch;