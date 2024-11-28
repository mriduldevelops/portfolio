import React from 'react'
import Hero from './Hero'
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Contact from './Contact'

function Content() {
  return (
    <div className='w-full lg:w-4/6 h-[200vh] absolute right-0'>
        <Hero/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default Content