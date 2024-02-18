import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'

const Index = () => {
  return (
    <div className='hero2'>
      <div className='hero-content items-center justify-between p-24'>
        <AnimatedText text="Vitalizing Health with Advanced Vision" className='!text-6xl !text-left !text-blue-900' />
        <p className='my-4 text-base font-medium text-green-700'>
          Patients' lives are transformed only when we collectively excel in our performance.
          This is achieved by concentrating on the essentials, establishing clear roles, and evaluating the results.</p>
        <div className='flex items-center self-start mt-2'>
          <Link href='contact' title="Contact Us"
            className='flex bg-blue-900 text-light p-4 px-10 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'>
            Contact Us
          </Link>
        </div>
      </div>
      {/* <div>
              <video src="/VHcanva2" autoPlay muted loop className='w-full h-full relative z-index: -5'></video>
              </div> */}
    </div>
  )
}

export default Index