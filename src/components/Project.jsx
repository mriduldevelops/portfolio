import Link from 'next/link'
import React from 'react'

const projects = [
  {
    img: "https://mriduldevelops.github.io/Mridul-Portfolio-Site/assets/urban-trendz-67627849.png",
    name: "Urban Trendz",
    skills: "Nextjs, Tailwind CSS, Shadcn, TypeScript, Sanity, Stripe",
    siteLink: "https://urban-trendz.vercel.app/",
    codeLink: "https://github.com/mriduldevelops/Urban-Trendz"
  },
  {
    img: "https://mriduldevelops.github.io/Mridul-Portfolio-Site/assets/joblele-06c5123b.png",
    name: "JOBLELE",
    skills: "Reactjs, Tailwind CSS, Javascript, Firebase &  Firestore",
    siteLink: "https://mriduldevelops.github.io/JOBLELE/",
    codeLink: "https://github.com/mriduldevelops/JOBLELE"
  },
  {
    img: "https://mriduldevelops.github.io/Mridul-Portfolio-Site/assets/note-keeper-7abdf9e9.png",
    name: "NoteKeeper",
    skills: "Reactjs, CSS, Javascript",
    siteLink: "https://mriduldevelops.github.io/Note-Keeper/",
    codeLink: "https://github.com/mriduldevelops/Note-Keeper"
  },
  {
    img: "https://mriduldevelops.github.io/Mridul-Portfolio-Site/assets/mcAfee-da36e85c.png",
    name: "McAfee-Clone",
    skills: "HTML, CSS, Javascript",
    siteLink: "https://mriduldevelops.github.io/McAfee-Clone/",
    codeLink: "https://github.com/mriduldevelops/McAfee-Clone"
  },
  {
    img: "https://mriduldevelops.github.io/Mridul-Portfolio-Site/assets/game-57b4293e.png",
    name: "Snake Game",
    skills: "HTML, CSS, Javascript",
    siteLink: "https://mriduldevelops.github.io/Snake-Game/",
    codeLink: "https://github.com/mriduldevelops/Snake-Game"
  },
]

function Project() {
  return (
    <div className='py-20 px-10 border-b-4 border-black' id='projects'>
      <div className='flex flex-col items-center'>
        <h2 className='text-5xl font-semibold font-serif tracking-wider'>PROJECTS</h2>
        <hr className='border-4 border-black mt-5 w-20' />
        <div className='mt-10 space-y-10'>
          {projects.map((project, index) => (
            <div className={`flex gap-10 ${index % 2 == !0 ? "flex-row-reverse" : ""}`} key={index}>
              <div className='w-1/3 aspect-square grid items-center overflow-hidden'>
                <img src={project.img} alt="project image" className='w-auto ' />
              </div>
              <div className='flex items-center'>
                <div className='space-y-5 w-full'>
                  <h5 className='text-3xl font-semibold font-serif tracking-wider underline decoration-custom'>{project.name}</h5>
                  <p className='text-lg'>{project.skills}</p>
                  <div className='flex items-center gap-5 w-full'>
                    <Link href={project.siteLink} className='w-60'>
                      <button
                        className={`bg-custom w-full text-xl font-semibold py-3 hover:bg-black hover:text-white transition-colors duration-300`}
                      >
                        VISIT SITE
                      </button>
                    </Link>
                    <Link href={project.codeLink} className='w-60'>
                      <button
                        className={`bg-custom w-full text-xl font-semibold py-3 hover:bg-black hover:text-white transition-colors duration-300`}
                      >
                        VIEW CODE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Project