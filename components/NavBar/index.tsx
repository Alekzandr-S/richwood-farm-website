import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <div className='fixed flex flex-col p-4 shadow-lg h-[80px] top-0 left-0 right-0 bg-[#2F4F4F]'>
      <div className='relative'>
        <Image
          src='/logos/RichwoodLogoWhite-1.png'
          alt='Richwood Farms logo'
          width={50}
          height={50}
        />
      </div>
    </div>
  )
}

export default NavBar