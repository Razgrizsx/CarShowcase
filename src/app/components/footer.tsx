import React from 'react'
import Image from 'next/image'
import logo from "../../../public/logo.png";
import { footerLinks } from "../constants/index"
import Link from 'next/link';

function Footer() {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>

      <div className='flex flex-row max-[1000px]:flex-col mt-5'>

        <div className='flex flex-col max-md:flex-col flex-wrap justify-between align-top gap-5 sm:px-16 px-6 py-10'>
          <div className='flex flex-col justify-start items-start gap-6'></div>
          <Image src={logo} alt={''} width={118} height={18} className='object-contain'></Image>
          <p className='text-base text-gray-700'>Spartan Cars 2023 <br/> Todos los derechos reservados &copy;</p>
        </div>
        
        <div className="footer__links max-[1000px]:pl-4">
          {footerLinks.map((e) => (
            <div key={e.title} className='footer__link'>
              <h3 className='font-bold'>{e.title}</h3>
              {e.links.map((e)=>(
                <Link key={e.title} href={e.url} className='text-gray-500'>
                  {e.title}
                </Link>
                ))}
            </div>
          ))}
        </div>

        </div>
        <div className="flex justify-between items-center flex-wrap mt-5 border-t border-gray-100 sm:px-16 px-6 py-10">
          <p>@2023 - Spartan Cars. Derechos Reservados</p>
          <div className="footer__copyrights-link">
            <Link href={"/"} className='text-gray-500'>
              Privacidad
            </Link>
            <Link href={"/"} className='text-gray-500'>
              Terminos y Condiciones
            </Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer