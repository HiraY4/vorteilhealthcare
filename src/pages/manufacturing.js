import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Background from '@/components/Background'

const manufacturing = () => {
  return (
    <>
      <Head>
        <title>VH | Manufacturing</title>
        <meta name='manufacturing' content='vorteil healthcare manufacturing ' />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <div className='hero-bg w-full h-full p-32'>
          <Background />
        </div>
        {/* <Layout className='p-2'> */}
        {/* <div className='hero-bg w-full h-full p-32'>
    <Background />
      </div> */}
        {/* <AnimatedText text="Manufacturing"/>
    <p className='my-4 text-base font-medium text'>
    At Vorteil HealthCare, we prioritize manufacturing all our products to the highest standards of quality, safety, and efficacy, ensuring their availability as needed. We specialize in a range of sophisticated and lifesaving therapies, utilizing cutting-edge technologies and the expertise of our dedicated Vorteil HealthCare team.
    </p>
    <p className='my-4 text-base font-medium text'>
    We are committed to sustaining and generating numerous quality jobs in coming years. Our aim is to be recognized as a leading employer, an environmentally responsible organization, and a responsible corporate entity in all our locations.
    </p> */}
        {/* </Layout> */}
      </main>
    </>
  )
}

export default manufacturing