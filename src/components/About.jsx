import React from 'react'

import Image from '../assets/img/about.webp'


const About = () => {
  return (
    <section id='about' className='section bg-secondary'>
        <div className='container mx-auto'>
            <div className='flex flex-col  gap-24'>
                {/* <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt="" /> */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="flex flex-col">
                        <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">Kachi Celestine </h2>
                        <p className='mb-4 text-accent'>Frontend Web Developer </p>
                        <hr className='mb-8 opacity-5' />
                        <p className='mb-8 text-2xl'> I am a professional who has the skills and knowledge to design, develop, and maintain the software that powers a website or web application. I am responsible for working on both the front-end and back-end of a web project, which includes writing code for the user interface, creating the application logic, and configuring the server-side components.</p>
                    </div>
                    <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'><a href="mailto: onlinehassle1234@gmail.com"> Contact me</a></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About