import React from 'react'
import kachi from '../assets/img/Kachi_1.png'
const Hero = () => {
  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className='container mx-auto h-full'>
            <div className='flex items-center h-full pt-8'>
                {/* left side */}
                <div className='flex-1 flex flex-col items-center lg:items-start'>
                    <p className='text-lg text-accent mb-[22px]'>Hey, I'm Kachi </p>
                    <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>I Build & Design <br /> Web Interfaces</h1>
                    <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'> Hi there! I'm a passionate frontend developer with a knack for creating visually stunning and user-friendly websites. With a keen eye for design and a strong command of HTML, CSS, JavaScript, Wordpress,PHP, React, Nextjs, Angular and MERN stack. I bring ideas to life through clean and efficient code.</p>
                    <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all '><a href="mailto: onlinehassle1234@gmail.com">Work with me</a></button>
                </div>
                {/* right side */}
                <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
                    <img className='rounded-full' src={kachi} alt="" />
                </div>
            </div>
        </div>
    </section >
  )
}

export default Hero