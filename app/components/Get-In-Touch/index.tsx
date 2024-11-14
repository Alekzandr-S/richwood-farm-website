import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const GetInTouch = () => {
  return (
    <div className='flex flex-col gap-8 lg:gap-16'>
      <div className='flex flex-col gap-4 lg:gap-8'>
        <div><p className='font-semibold text-white'>Connect</p></div>
        <div><h3 className='text-2xl text-white lg:text-2xl 3xl:text-4xl font-semibold'>Get in Touch</h3></div>
        <div><p className='text-lg text-white'>We'd love to hear from you!</p></div>
      </div>

      <div className='flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-24'>
        <div className='flex flex-col gap-8 lg:gap-16'>
          <div className='flex flex-col gap-2 lg:gap-8'>
            <div>
              <Image
                src='/icons/get-in-touch/phone-call.png'
                alt=''
                width={50}
                height={50}
              />
            </div>
            <div><h4 className='text-xl text-white'>Phone</h4></div>
            <div><p className='text-white'>Call us for inquiries</p></div>

            <a href="tel:260 123-4567">
              <p className='text-white'>+260 123-4567</p>
            </a>
          </div>

          <div className='flex flex-col gap-2 lg:gap-8'>
            <div>
              <Image
                src='/icons/get-in-touch/mail.png'
                alt=''
                width={50}
                height={50}
              />
            </div>
            <div><h4 className='text-xl text-white'>Email</h4></div>
            <div><p className='text-white'>Reach us at any time.</p></div>

            <a href="mailto: richwoodfarms.co.site">
              <p className='text-white'>info@richwoodfarms.com</p>
            </a>
          </div>

          <div className='flex flex-col gap-4 lg:gap-8'>
            <div>
              <Image
                src='/icons/get-in-touch/place.png'
                alt=''
                width={50}
                height={50}
              />
            </div>
            <div><h4 className='text-xl text-white'>Office</h4></div>
            <div><p className=' text-white'>435 Great East Rd, Chongwe 101011</p></div>
            <div><Button variant='link' className='text-white p-0'>Get Directions</Button></div>
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