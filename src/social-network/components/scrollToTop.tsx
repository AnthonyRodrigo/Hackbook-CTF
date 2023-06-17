"use client"
import React from 'react'
import { useEffect,useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'
import { MdOpacity } from 'react-icons/md';

function ScrollToTop() {
    const [isVisible,setIsVisible] = useState(false);

    const classNames =(...classes: string[]) => {
        return classes.filter(Boolean).join(' ');
    }

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else{
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(()=> {
        window.addEventListener('scroll',toggleVisibility);
        
        return () => {
            window.removeEventListener('scroll',toggleVisibility);
        }

    },[])

  return (
    <div className='fixed z-10 bottom-7 right-4 py-24 md:px-8 lg:px-20'>
        <button type='button' onClick={scrollToTop} 
        className={classNames(isVisible ? 'opacity-100' : 'opacity-0',
        'w-12 h-12 md:w-16 md:h-16 justify-center cursor-pointer inline-flex border border-textColor  items-center p-3 rounded-full sshadow-md shadow-gray-800 text-redColor bg-white transition-opacity hover:bg-redColor hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-redColor'
        )}>
            <BiArrowFromBottom className='h-7 w-7 md:h-8 md:w-8' aria-hidden='true'/>
        </button>
    </div>
  )
}

export default ScrollToTop