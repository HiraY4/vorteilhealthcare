import React from 'react'
import Image from 'next/image'
import AnimatedText from './AnimatedText'
import CEOimage from '../../public/profile/VHCEO.jpg'


const AboutBackG = () => {
  return (
    <div className='hero' >
      <div className='hero-content items-center justify-between p-24'>
        <AnimatedText text="Vision to Heal" className='text-blue-900' />
        <p className='my-4 text-base font-medium text'>
          Vorteil Healthcare's mission is to introduce innovative medications and treatments to meet the unmet healthcare needs of Pakistani patients, driven by the goal of fostering a healthier Pakistan and building robust, empowered communities.
        </p>
        <p className='my-4 text-base font-medium text'>
          Vorteil Healthcare has been dedicated to enhancing the health and well-being of Pakistani citizens. The company is committed to play a pivotal role in tackling the healthcare challenges in Pakistan, leveraging its expertise in the sector to make a significant impact.
        </p>
        <div className='grid w-full grid-cols-2 gap-16'>
          <div className='flex flex-col items-start justify-start'>
            <h2 className='mb-4 text-lg font-bold text-dark uppercase'>
              Message from CEO;
            </h2>
            <p className='my-4 font-medium justify-between items-center'>
              The company is dedicated to ensuring the availability of safe, cutting-edge, and cost-effective medicines to countless individuals across the nation. The company's extensive range of medicines spans various therapeutic areas, including cough remedies and nutraceuticals, establishing Vorteil HealthCare as a leading pharmaceutical manufacturer in the country.
            </p>
            <p className='font-medium'>Dr. Ahad Ali Birmani</p>
            <p className='font-medium'>Chief Executive Officer</p>
            <p className='font-medium'>Vorteil Healthcare.</p>
          </div>
          <div className='col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark bg-blue p-8'>
            <Image src={CEOimage} alt="" className="w-full h-auto rounded-2xl -p-1 -m-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutBackG


{/* <AboutBackG className="p-0 z-index-0 w-full h-full"/> */ }