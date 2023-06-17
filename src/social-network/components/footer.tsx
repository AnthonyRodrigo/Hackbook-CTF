import React from 'react'
import Image from "next/image";
import {  BsLinkedin} from 'react-icons/bs'
import LogoThcFooter from "@/public/img/logo-THC-footer.png"
import {GiLockedHeart} from "react-icons/gi"

function Footer() {
    return (
        <div>
            <hr className="w-48 h-px mx-auto my-6 bg-gray-200 border-0 dark:bg-textColor"></hr>
            <footer className='flex flex-col justify-center items-center' >
                <div className="grid grid-cols-2 ">
                    <div className="flex justify-center items-center">
                        <div>
                            <h3 className="text-xl font-bold">Developed by </h3>
                        </div>
                    </div> 
                    <div className=''>
                        <ul className='text-base'>
                            <li className='pb-2 flex items-center hover:text-redColor'><a className='text-base ml-1 sm:ml-2 flex  font-semibold hover:text-bgFooter' href="https://www.linkedin.com/in/justin-facquet/" target="_blank"> <BsLinkedin className='text-2xl flex mr-1 sm:mr-2'/> Justin Facquet</a></li>
                            <li className='pb-2 flex items-center hover:text-redColor'><a className='text-base ml-1 sm:ml-2 flex  font-semibold hover:text-bgFooter' href="https://www.linkedin.com/in/tom-heurtebise-tls-sec/" target="_blank"> <BsLinkedin className='text-2xl flex mr-1 sm:mr-2'/> Tom Heurtebise</a></li>
                            <li className='pb-2 flex items-center hover:text-redColor'><a className='text-base ml-1 sm:ml-2 flex  font-semibold hover:text-bgFooter' href="https://www.linkedin.com/in/anthony-rodrigo/" target="_blank"> <BsLinkedin className='text-2xl flex mr-1 sm:mr-2'/> Anthony Rodrigo</a></li>
                        </ul>
                    </div>
                </div>
                <p className='flex flex-row justify-center items-center text-xl font-bold'> with the <GiLockedHeart className='text-redColor text-xl ml-2' /></p>
                <p className='py-2'>Copyright © 2023 - All right reserved</p>
                <Image src={LogoThcFooter} alt="logo-thc-footer" className="w-full rounded-md"/>
            </footer>
        </div>
  )
}

export default Footer