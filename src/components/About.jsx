import { Download, FileDown } from 'lucide-react'
import React from 'react'
import Tabs from './Tabs'

function About() {
  return (
    <div className='py-20 px-10 border-b-4 border-black' id='about'>
        <div className='flex flex-col items-center'>
        <h2 className='text-5xl font-semibold font-serif tracking-wider'>ABOUT</h2>
        <hr className='border-4 border-black mt-5 w-20' />
        </div>
        <p className='mt-10 text-2xl text-center'>I'm a Freelancer Front-end Developer with over 12 years of experience. I'm from London, UK. I code and create web elements for amazing people around the world. I like work with new people. New people are new experiences.</p>
        <div className='mt-10 flex gap-4 justify-center flex-wrap'>
          <div className='bg-[#f2f2f2] border-4 border-[#444444] px-4 py-2'>
            <p className='text-lg md:text-xl'>Name: <span className='font-semibold'>Mridul Sharma</span></p>
          </div>
          <div className='bg-[#f2f2f2] border-4 border-[#444444] px-4 py-2'>
            <p className='text-lg md:text-xl'>Email: <span className='font-semibold'>sharmamridul045@gmail.com</span></p>
          </div>
          <div className='bg-[#f2f2f2] border-4 border-[#444444] px-4 py-2'>
            <p className='text-lg md:text-xl'>Phone: <span className='font-semibold'>+917060753394</span></p>
          </div>
        </div>
        <div className='flex flex-col items-center mt-20 group'>
          <div className='flex gap-2 items-end'>
            <div className='w-[2px] h-14 bg-black group-hover:bg-custom group-hover:transition-all ease-in-out duration-1000'></div>
            <div className='w-[2px] h-24 bg-black group-hover:bg-custom group-hover:transition-all ease-in-out duration-1000'></div>
            <div className='w-[2px] h-14 bg-black group-hover:bg-custom group-hover:transition-all ease-in-out duration-1000'></div>
          </div>
          <div className='my-7 z-10 w-[320px] h-[220px] bg-custom cursor-pointer flex flex-col items-center justify-center'>
            <Download size={50}/>
          {/* <FileDown size={50}/> */}
          <p className='mt-4 text-2xl font-semibold'>DOWNLOAD CV</p>
          </div>
          <div className='flex gap-2 items-start'>
            <div className='w-[2px] h-14 bg-black group-hover:bg-custom group-hover:transition-all ease-in-out duration-1000'></div>
            <div className='w-[2px] h-24 bg-black group-hover:bg-custom group-hover:transition-all ease-in-out duration-1000'></div>
            <div className='w-[2px] h-14 bg-black group-hover:bg-custom group-hover:transition-all ease-in-out duration-1000'></div>
          </div>
        </div>
        <Tabs/>
    </div>
  )
}

export default About