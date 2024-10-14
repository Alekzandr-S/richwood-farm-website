import { Button } from '@/components/ui/button'
import React from 'react'

const JoinUs = () => {
  return (
    <div className='flex flex-col gap-4 lg:gap-16'>
      <div><h3 className='text-3xl'>Join Us in Sustainable Farming</h3></div>
      <div><p>Discover our commitment to quality crop production.</p></div>
      <div>
        <Button>Contact Us</Button>
      </div>
    </div>
  )
}

export default JoinUs