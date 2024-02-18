import React from 'react'
import AnimatedText from '@/components/AnimatedText'

const Details = ({ head, companyLink, company, enquery, phone, reg, ntn, status }) => {

  return <li className='my-20 first:mb-0 last:mb-0 w-[-30%] mx-auto flex flex-col items-center justify-between'>
    <div className='flex absolute-left-8 top-0 origin-left w-full'>
      <h3 className='text-2xl text-dark mb-4'>
        <p className='font-bold'>
          {head}
        </p>
        <p>
          {company}
        </p>
        <p className='text-blue-600 underline text-dark/75'>
          {companyLink}
        </p>
        <span>
          &nbsp;
        </span>
        <p className='font-bold'>
          {enquery}
        </p>
        <p>
          {phone}
        </p>
        <p className='text-dark/75'>
          {reg}
        </p>
        <p className='text-dark/75'>
          {ntn}
        </p>
        <p className='text-dark/75'>
          {status}
        </p>

      </h3>
    </div>
  </li>
}

const contact = () => {
  return (
    <div className=''>
      <div className='w-full items-center justify-between'>
        <video src="/vid2.mp4" autoPlay muted loop className='w-full h-full relative overlay'>
        </video>
        <div className='overlay'>
          <AnimatedText text="Contact Details" className='text-2xl' />
        </div>
        <div className='w-[75%] mx-auto relative'>
          <ul>
            <Details
              head="Head Office:"
              company="Please email us at:"
              companyLink="vorteilhealthcare@gmail.com"
              enquery="For Medical Information Enquiries:"
              phone="****"
              reg="Company Registration No. 719410"
              ntn="NTN: B109746-0"
              status="Company Status: Active"
            />
          </ul>
        </div>
      </div>
    </div>

  )
}

export default contact



