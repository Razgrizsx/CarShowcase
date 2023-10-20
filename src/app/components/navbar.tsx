'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './button'
import logo from '../../../public/logo.png'



function NavBar() {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:p-16 px-6 py-4'>
            <Link href="/" className='flex justify-center items-center'>
                <Image src={logo} alt={''} width={118} height={18} className='object-container'></Image>
                <p className='font-bold pl-4'>Spartan Cars</p>
                </Link>
                <Button title='Login' typebtn='button' containerStyles='bg-red-accent-200 text-white rounded-full min-w-[130px' click={()=> {}}/>
        </nav>
    </header>
    )
}

export default NavBar