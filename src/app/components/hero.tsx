"use client"

import Image from 'next/image'
import Button from './button'
import car from "../../../public/car1.png";
import hero from "../../../public/hero.png";

export default function Hero(){
    const scroll = () => {

    }
    return(
        <div className='hero'>
            <div className="flex-1 pt-36 padding-x">
                <h1 className='hero__title'>
                    Encuentra, reserva y renta un auto - rapido y facil!
                </h1>
                <p className='hero__subtitle'>Renta un auto sin esfuerzo con nuestro sistema de reserva especial.</p>
                <Button 
                    title='Explorar' 
                    containerStyles="bg-red-accent-200 text-white rounded-full mt-10" 
                    click={scroll}/>
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src={car} alt={''} fill className='object-contain'></Image>
                    <div className='hero__image-overlay'></div>
                </div>
            </div>
        </div>
    )  
}