import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const StayUpdated = () => {
  return (
    <div className='flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-16'>
      <div><h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold'>Stay Updated with Richwood Farms</h3></div>

      <div className='flex flex-col gap-4 lg:gap-16'>
        <div><p className='text-lg'>Subscribe to our newsletter for the latest updates on our crops and farming practices. Join our community and be the first to know about our fresh produce.</p></div>
        <div className='flex flex-col gap-2 lg:gap-8'>
          <Input type='email' placeholder='Email'></Input>
          <Button>Sign up</Button>
        </div>
        <div><p className='text-lg'>Your Email HereSign UpBy clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p></div>
      </div>
    </div>
  )
}

export default StayUpdated