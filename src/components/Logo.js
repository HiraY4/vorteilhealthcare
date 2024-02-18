import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2 -ml-4'>
      <MotionLink href="/" className='px-4 py-4 w-22 h-16 bg-blue-800 text-white flex items-center justify-center rounded-xl text-xl font-bold'
        whileHover={{
          backgroundColor: ["#191970", "#00A877"],
          transition: { duration: 1, repeat: Infinity }
        }}>
        Vorteil HealthCare</MotionLink>
    </div>
  )
}

export default Logo

// "#1F75FE","#76ABDF","#1B4D3E",