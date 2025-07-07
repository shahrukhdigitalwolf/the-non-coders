import Image from 'next/image'
import React from 'react';

interface expertiseDataProps{
  title:string, img:string, desc:string, href:string
}

function SolutionCard({title, img, desc, href }: expertiseDataProps) {
  return (
    <div className='max-w-full lg:w-[250px] xl:w-[300px] mx-auto'>
      <div className='relative'>
        <Image className='w-full h-auto' src={img} alt="" width={250} height={250} />
        <h3 className='absolute bottom-0 left-0 text-[24px] text-white ps-6 pe-12 lg:pe-20 pb-3'>{title}</h3>
      </div>
      <div className='mt-5'>
        <p>{desc}</p>
      </div>
      <div>
        <a href={href}>Read More</a>
      </div>
    </div>
  )
}

export default SolutionCard
