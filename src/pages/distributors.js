import React from 'react';
import Image from 'next/image';
import VortIcon from "../../public/profile/vh4.jpg";
import Distributors from "../components/Distributors.js"
import AnimatedText from '@/components/AnimatedText';

export default function DistributersPage() {
  return (
    <div>
      <div className='flex overlay'>
        <AnimatedText text="Distributors" className='text-2xl text-blue-900' />
      </div>
      <div className=' flex items-center'>
        <Image
          src={VortIcon}
          alt="Vorteil Icon"
          height={700}
          width={700}
          className='object-cover '></Image>
        <div className='col-span-1'>
          <div className='text-2xl'>Distributors:
            <Distributors />
          </div>
        </div>
      </div>
    </div>
  )
}
