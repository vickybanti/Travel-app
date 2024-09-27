import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';
import React from 'react'

interface CampProps {
  backgroundImage: string;
  title:string;
  subtitle:string;
  peopleJoined:string;
}

const CampSite = ({backgroundImage, title, subtitle, peopleJoined} : CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}
    bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`} >
      <div className='flex h-full flex-col items-start justify-between
      p-6 lg:px-20 lg:py-10'>  
        <div className='flexCenter gap-4'>
            <div className='rounded-full bg-green-50 p-4'>
              <Image 
                src="/folded-map.svg"
                alt="map"
                width={25}
                height={25}
                className='rounded-full'
              />
            </div>
            <div className='flex flex-col gap-1'>
                <h4 className='bold-18 text-white'>{title}</h4>
                <p className='regular-14 text-white'>{subtitle}</p>

            </div>
        </div>
        <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {PEOPLE_URL.map((url) => (
              <Image 
              src={url}
              key={url}
              alt='person'
              width={52}
              height={52}
              className='inline-block h-10 w-10 rounded-full'
              
              />
            ))}
          </span>
          <p className='bold-16 md:bold-20 text-white'>{peopleJoined}</p>

        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='2xl:max-container relative
    flex flex-col py-5 lg:mb-10 lg:py-20 xl:mb-20'>

<div className='hide-scrollbar flex h-[340px] 
w-full items-start justify-start gap-8 overflow-x-auto
lg:h-[400px] xl:h-[540px] px-12'>


<CampSite 
backgroundImage="bg-bg-img-1"
title="Putuk Truno camp"
subtitle="Port harcourt"
peopleJoined='120+ joined'
/>

<CampSite 
backgroundImage="bg-bg-img-2"
title="Asian town"
subtitle="Old GRA"
peopleJoined='50+ joined'/>

<CampSite 
backgroundImage="bg-bg-img-1"
title="Tokyo"
subtitle="Rumuomasi"
peopleJoined='230+ joined'/>
</div>

<div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
  <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] 
  xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
    <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
      <strong>Wanna have fun </strong>and not knowing the way?

      </h2>
      <p className='regular-14 xl:regular-16 mt-5 text-white'>
          Have fun on payday, business deals, family dinners, and celebration days
          with exclusive views and bands that make you feel special
      </p>
      <Image 
        src="/quote.svg"
        alt='fun'
        width={186}
        height={219}
        className='camp-quote'
      />

  </div>

</div>
    </section>
  )
}

export default Camp