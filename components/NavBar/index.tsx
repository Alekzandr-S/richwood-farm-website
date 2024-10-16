import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <div className='fixed flex flex-col p-4 top-0 left-0 right-0 bg-slate-500'>
      <Image 
        src='/images/FarmCrops.webp'
        alt='Richwood Farms logo' 
        width={80}
        height={80}
      />
    </div>
  )
}

export default NavBar