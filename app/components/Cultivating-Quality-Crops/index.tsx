import Image from 'next/image'
import React from 'react'

const CultivatingQualityCrops = () => {
  return (
    <div className='flex flex-col gap-4 lg:gap-16'>
      <div className='flex flex-col gap-4 lg:gap-16'>
        <div><h3>Cultivating Quality Crops for a Sustainable Future at Richwood Farms Ltd.</h3></div>
        <div><p>Richwood Farms Ltd. is dedicated to growing high-quality crops like onions, garlic, ginger, and potatoes. Our goal is to promote sustainable agriculture while providing fresh produce to our community.</p></div>
      </div>
      <div>
        <Image
          src=''
          alt=''
          width={250}
          height={250}
        />
      </div>
    </div>
  )
}

export default CultivatingQualityCrops