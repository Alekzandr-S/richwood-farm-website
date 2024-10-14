import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const StayUpdated = () => {
  return (
    <div className='flex flex-col gap-4 lg:gap-16'>
      <div><h3 className='text-3xl'>Stay Updated with Richwood Farms</h3></div>
      <div className='flex flex-col gap-4 lg:gap-16'>
        <div><p>Subscribe to our newsletter for the latest updates on our crops and farming practices. Join our community and be the first to know about our fresh produce.</p></div>
        <div className='flex flex-col gap-2'>
          <Input type='email' placeholder='Email'></Input>
          <Button>Sign up</Button>
        </div>
        <div><p>Your Email HereSign UpBy clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p></div>
      </div>
    </div>
  )
}

export default StayUpdated