import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import TwitterIcon from './Twitter'
import FacebookIcon from './Facebook'
import InstagramIcon from './Instagram'
import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <footer className='flex border-t-2 w-full border-solidborder-dark font-medium text-lg bg-inherit '>
      <Layout className='px-32 py-4 flex-items-center justify-between'>
        <span className='flex justify-center'>
          Copyright &copy; {new Date().getFullYear()} Vorteil HealthCare. All Rights Reserved.
        </span>

        <span className='w-full ml-3 flex items-end justify-center h-10'>
          <motion.a
            href='https://twitter.com/'
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          ><TwitterIcon />
          </motion.a>

          <motion.a
            href='https://www.facebook.com/'
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <FacebookIcon />
          </motion.a>

          <motion.a
            href='https://www.instagram.com/'
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3">
            <InstagramIcon />
          </motion.a>
          
        </span>
        
      </Layout>
    </footer>
  )
}

export default Footer

// <div className='w-full -top-px font-medium flex justify-center'> </div>
