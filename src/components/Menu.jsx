'use client'
import React, { useState } from 'react'

function Menu() {
  const [active, setActive] = useState('HOME')

  const handleClick = (btn) => {
    setActive(btn)
  }

  return (
    <div className='h-screen w-2/6 fixed px-4 pt-10 jost'>
      <div className='px-8 border-r-4 border-zinc-800 h-full w-full flex flex-col justify-center gap-2'>
        <a href="#">
        <button
          className={`${
            active === 'HOME' ? 'bg-custom' : 'bg-white'
          } w-full text-xl font-semibold py-3 transition-colors duration-300`}
          onClick={() => handleClick('HOME')}
        >
          HOME
        </button>
        </a>
        <a href="#about">
        <button
          className={`${
            active === 'ABOUT' ? 'bg-custom' : 'bg-white'
          } w-full text-xl font-semibold py-3 transition-colors duration-300`}
          onClick={() => handleClick('ABOUT')}
        >
          ABOUT
        </button>
        </a>
        <a href="#skills">
        <button
          className={`${
            active === 'SKILLS' ? 'bg-custom' : 'bg-white'
          } w-full text-xl font-semibold py-3 transition-colors duration-300`}
          onClick={() => handleClick('SKILLS')}
        >
          SKILLS
        </button>
        </a>
        <a href="#projects">
        <button
          className={`${
            active === 'PROJECTS' ? 'bg-custom' : 'bg-white'
          } w-full text-xl font-semibold py-3 transition-colors duration-300`}
          onClick={() => handleClick('PROJECTS')}
        >
          PROJECTS
        </button>
        </a>
        <a href="#contact">
        <button
          className={`${
            active === 'CONTACT' ? 'bg-custom' : 'bg-white'
          } w-full text-xl font-semibold py-3 transition-colors duration-300`}
          onClick={() => handleClick('CONTACT')}
        >
          CONTACT
        </button>
        </a>
      </div>
    </div>
  )
}

export default Menu
