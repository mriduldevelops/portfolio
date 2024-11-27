import React from 'react'

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'NextJs', 'Nodejs', 'Tailwind CSS', 'Git & GitHub', 'MongoDB', 'Firebase', 'VSCode']

function Skill() {
    return (
        <div className='py-20 px-10 border-b-4 border-black' id='skills'>
            <div className='flex flex-col items-center'>
                <h2 className='text-5xl font-semibold font-serif tracking-wider'>SKILLS</h2>
                <hr className='border-4 border-black mt-5 w-20' />
                <div className='mt-10 flex flex-wrap justify-center gap-4'>
                    {skills.map((skill, index)=>(
                        <div className='border-4 border-black p-2' key={index}>
                        <div className='bg-custom p-2'>
                            <p className='text-2xl font-serif font-semibold'>{skill}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Skill