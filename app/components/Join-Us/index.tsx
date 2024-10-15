import { Button } from '@/components/ui/button'
import React from 'react'

const JoinUs = () => {
  return (
    <div className='flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-24'>
      <div className='flex flex-col gap-4 lg:gap-8'>
        <div><h3 className='text-4xl lg:text-5xl 2xl:text-6xl font-bold'>Join Us in Sustainable Farming</h3></div>
        <div><p className='text-xl'>Discover our commitment to quality crop production.</p></div>
      </div>

      <div className='flex flex-row gap-2 lg:gap-8'>
        <Button>Contact Us</Button>
        <Button variant={'outline'}>Contact Us</Button>
      </div>
    </div>
  )
}

export default JoinUs