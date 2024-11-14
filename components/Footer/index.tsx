import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <div className='relative flex flex-col gap-4 lg:gap-16 bottom-0 left-0 right-0 bg-slate500 border-t-white p-20'>
      <div className='flex flex-col gap-4 lg:gap-16 lg:flex-row lg:justify-between'>
        <div className='flex flex-col gap-4'>
          <div className=''>
            <Image  
              src=''
              alt='Richwood Logo'
              width={150}
              height={100}
            />
          </div>

          <div className='flex flex-col gap-2 lg:gap-4'>
            <div><h4>Address:</h4></div>
            <div><p>Level 1, Chongwe St, 101011</p></div>
          </div>

          <div className='flex flex-col gap-2 lg:gap-4'>
            <div><h4>Contact:</h4></div>
            <div><p className='underline'>1800 1123 4567 info@richwoodfarms.com</p></div>
          </div>

          <div className='flex flex-col gap-2 lg:gap-16 lg:flex-row '>
            <Image 
              src='/icons/facebook.png'
              alt='Youtube Logo'
              width={24}
              height={16}
            />
            <Image 
              src='/icons/whatsapp.png'
              alt='FB Logo'
              width={24}
              height={16}
            />
            <Image 
              src='/icons/instagram.png'
              alt='IG Logo'
              width={24}
              height={16}
            />
            <Image 
              src='/icons/linkedin.png'
              alt='x Logo'
              width={24}
              height={16}
            />
            {/* <Image 
              src='/icons/FarmCrops.png'
              alt='LinkedIn Logo'
              width={16}
              height={16}
            /> */}
          </div>
        </div>

        <div className='flex flex-col gap-4 lg:flex-row lg:gap-16'>
          <ul className='flex flex-col gap-4'>
            <li>About Us</li>
            <li>Our Products</li>
            <li>Sustainability</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>

          <ul>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Events</li>
            <li>Community</li>
            {/* <li></li> */}
          </ul>
        </div>
      </div>

      <div className='flex flex-col gap-4 lg:fl'>
        <hr />
        <div className='flex flex-col gap-4 lg:gap-16 lg:flex-row lg:justify-between'>
          <div>
            <p>© 2024 Richwood Farms. All rights reserved.Privacy PolicyTerms of ServiceCookies Settings</p>
          </div>
          <ul className='flex flex-row'>
            <li>
              <Button variant='link'>Privacy Policy</Button>  
            </li>
            <li>
              <Button variant='link'>terms of Service</Button>
            </li>
            <li>
              <Button variant='link'>Cookies Settings</Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer