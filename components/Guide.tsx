import Image from 'next/image'
import React from 'react'
//max-container willspread the div across the entire width
const Guide = () => {
  return (
    <section className='flex flexCenter flex-col'>
      <div className='padding-container max-container w-full pb-24 '>
        <Image 
          src="/camp.svg"
          alt='camp'
          width={50}
          height={50}
        />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
            We are here for you
        </p>

        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Enjoy your life</h2>
          <p className='regular-12 text-gray-30 xl:max-w-[520px]'>
            Only with hilink application you will no longer get lost and get lost again, because we already supporrt
            offline maps when there is no internet connection in the field.
            Invite your friends, relatives adn friends to have fun in the wilderness
            through the valley and reach the top of the mountain
          </p>
        </div>

      </div>

      <div className='flexCenter max-container relative w-full px-12'>
        <Image 
          src="/boat.png"
          alt="bold"
          width={1440}
          height={580}
          className='w-full object-cover object-center 2xl:rounded-5xl xl:rounded-5xl'
        /> 

        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3
        rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
         
         <Image 
          src="/meter.svg"
          alt='meter'
          width={16}
          height={158}
          className='h-full w-auto'
         />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='bold-16 text-green-50'>48mins</p>
              </div>
              <p className='bold-16 mt-2 pl-6'>Port harcourt</p>
            </div>

            <div className='flexBetween flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20 pl-6 pr-6'>Start track</p>
                <h4 className='bold-20 mt-2 whitespace-nowrap'>Okuru</h4>
              </div>
          </div>

        </div>

      </div>
      </div>
    </section>
  )
}

export default Guide