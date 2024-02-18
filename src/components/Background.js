import React from 'react'
import Image from 'next/image'
// import bg from '../../public/profile/bg13.jpeg'
import AnimatedText from './AnimatedText'

const Background = () => {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <AnimatedText text="Manufacturing" className='text-blue-900' />
        <p className='my-4 mx-4 text-base text-black font-semibold'>
          At Vorteil HealthCare, we prioritize manufacturing all our products to the highest standards of quality, safety, and efficacy, ensuring their availability as needed. We specialize in a range of sophisticated and lifesaving therapies, utilizing cutting-edge technologies and the expertise of our dedicated Vorteil HealthCare team.
        </p>
        <p className='my-4 mx-4 text-base text-black font-semibold'>
          We are committed to sustaining and generating numerous quality jobs in coming years. Our aim is to be recognized as a leading employer, an environmentally responsible organization, and a responsible corporate entity in all our locations.
        </p>
      </div>
      {/* <Image 
      src={bg}
      alt='background-image'
      className='bg-img'
      // width={1000}
      // height={1000}
      fill={true}  */}
      {/* /> */}
    </div>
  )
}

export default Background