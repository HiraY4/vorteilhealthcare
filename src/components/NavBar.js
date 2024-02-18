import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import V from '../../public/profile/V.PNG'
import Image from 'next/image'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { MoonIcon, SunIcon } from 'lucide-react'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  // console.log(router);
  return (
    <Link href={href} className={`${className} relative group`} >
      {title}
      <span className={`h-[1px] inline-block bg-dark 
      absolute left-0 -bottom-1
      group-hover:w-full transition-[width] ease duration-500
      ${router.asPath === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className='w-full px-16 py-4 font-medium text-lg flex items-center justify-between border-b-2'>
      <Link href="/">
        <Image src={V} alt="VHicon" className="w-20 bg-green-700" />
      </Link>
      {/* <Logo /> */}
      {/* <div className='w-1/2'>
                <Image src={V} alt="VHicon" className="w-20" />
              </div>  */}
      <nav className='flex items-center'>
        <CustomLink href='/' title="Home" className='mr-4 ' />
        <CustomLink href='about' title="About" className='mx-4' />
        <CustomLink href='manufacturing' title="Manufacturing" className='mx-4' />
        <CustomLink href='distributors' title="Distributors" className='ml-4' />

        <button 
        onClick={()=> setMode(mode === "light" ? "dark" : "light")}
        className='ml-3 flex items-center justify-center rounded-full p-1'
        >
          {
            mode === "dark" ?
            <SunIcon className='fill-dark' />
            : <MoonIcon className='fill-dark' />
          }
        </button>
      </nav>
    </header>
  )
}

export default NavBar