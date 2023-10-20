import React from 'react'
import Image from 'next/image'
import logo from "../../../public/logo.png";

function Footer() {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'></div>
        <div className='flex flex-col justify-start items-start gap-6'></div>
        <Image src={logo} alt={''} width={118} height={18} className='object-contain'></Image>
        <p className='text-base text-gray-700'>Spartan Cars 2023 <br/> Todos los derechos reservados &copy;</p>
    </footer>
  )
}

export default Footer