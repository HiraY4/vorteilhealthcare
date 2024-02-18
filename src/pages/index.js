import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
// import V from '../../public/images/profile/V.PNG'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
// import bg13 from '../../public/images/profile/bg13.jpeg'
// import p1 from '../../public/images/profile/p1.png'
import p2 from '../../public/profile/p2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vorteil HealthCare</title>
        <meta name="Vorteil Healthcare" content="Vorteil Healthcare for Pakistan" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-5'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={p2} alt="VHicon" className="" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Vitalizing Health with Advanced Vision" className='!text-6xl !text-left !text-blue-900' />
              <p className='my-4 text-base font-medium text-green-700'>
                Patients' lives are transformed only when we collectively excel in our performance.
                This is achieved by concentrating on the essentials, establishing clear roles, and evaluating the results.</p>
              <div className='flex items-center self-start mt-2'>
                <Link href='contact' title="Contact Us"
                  className='flex bg-blue-800 text-light p-4 px-10 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'>
                  Contact Us
                </Link>
              </div>
            </div>
            {/* <div>
              <video src="/vid1.mp4" autoPlay muted loop className='w-full h-full relative z-index: -5'></video>
              </div> */}
          </div>
        </Layout>
      </main>
    </>
  )
}


{/* <video src="/vid2.mp4" autoPlay muted loop className='w-full h-full relative z-index: -5'></video>  */ }