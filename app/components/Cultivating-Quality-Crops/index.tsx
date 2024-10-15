import Image from 'next/image'
import React from 'react'

const CultivatingQualityCrops = () => {
  return (
    <div className='flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-16'>
      <div className='flex flex-col gap-4 lg:gap-8'>
        <div><h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold'>Cultivating Quality Crops for a Sustainable Future at Richwood Farms Ltd.</h3></div>
        <div><p className='text-lg'>Richwood Farms Ltd. is dedicated to growing high-quality crops like onions, garlic, ginger, and potatoes. Our goal is to promote sustainable agriculture while providing fresh produce to our community.</p></div>
      </div>

      <div>
        <Image
          src='/images/FarmCrops.webp'
          alt=''
          width={700}
          height={700}
        />
      </div>
    </div>
  )
}

export default CultivatingQualityCrops