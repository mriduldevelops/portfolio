'use client'
import React, { useState } from 'react'

function Tabs() {
    const [activeTab, setActiveTab] = useState('EXPERIENCE')
    return (
        <div className='mt-20 flex flex-col items-center'>
            <div className='flex justify-center w-3/4'>
                <div className='flex justify-center border-r-2 border-black px-10 py-1 cursor-pointer' onClick={() => setActiveTab('EXPERIENCE')}>
                    <p className={`font-semibold text-2xl pb-1 border-custom ${activeTab === 'EXPERIENCE' ? 'border-b-4' : 'border-0'}`}>EXPERIENCE</p>
                </div>
                <div className='flex justify-center px-10 py-1 cursor-pointer' onClick={() => setActiveTab('EDUCATION')}>
                    <p className={`font-semibold text-2xl pb-1 border-custom ${activeTab === 'EDUCATION' ? 'border-b-4' : 'border-0'}`}>EDUCATION</p>
                </div>
                {/* <div className='flex justify-center px-10 py-1 cursor-pointer' onClick={() => setActiveTab('SKILLS')}>
                    <p className={`font-semibold text-2xl pb-1 border-yellow-400 ${activeTab === 'SKILLS' ? 'border-b-4' : 'border-0'}`}>SKILLS</p>
                </div> */}
            </div>
            {activeTab === 'EXPERIENCE' &&
                <div className='mt-10 w-full'>
                    <div className='bg-[#f2f2f2] p-4 md:p-10'>
                        <p className='text-lg font-semibold font-serif'>APPOPOLIES STUDIOS </p>
                        <span className='text-lg font-semibold font-serif'>( October,2023 - Today )</span>
                        <h3 className='text-3xl font-serif font-bold mt-2 mb-4'>Frontend Developer</h3>
                        <p className='text-xl md:text-2xl'>As a frontend developer, I worked on building landing pages and the frontend for e-commerce websites using React.js and Next.js. I used CSS frameworks like Bootstrap and Tailwind to create clean, modern designs. I also handled Stripe integrations to set up smooth payment workflows and added interactive features like accordions, carousels, and filters to make the user experience more dynamic and engaging.</p>
                    </div>
                    <div className='bg-[#f2f2f2] p-4 md:p-10 mt-10'>
                        <p className='text-lg font-semibold font-serif'>INFOTRIXS </p>
                        <span className='text-lg font-semibold font-serif'>( September,2023- October,2023 )</span>
                        <h3 className='text-3xl font-serif font-bold mt-2 mb-4'>Frontend Developer Intern</h3>
                        <p className='text-xl md:text-2xl'>I worked on creating a React-based user interface for a team project, making sure it connected seamlessly with the backend. I used Tailwind CSS to design responsive and visually appealing UI elements that improved user experience. This role also gave me hands-on experience in working within a team, helping me understand the importance of collaboration and effective communication in a professional environment.</p>
                    </div>
                </div>
            }
            {activeTab === 'EDUCATION' &&
                <div className='mt-10 w-full'>
                    <div className='bg-[#f2f2f2] p-10'>
                        <p className='text-lg font-semibold font-serif'>Dr. Bhim Rao Ambedkar University, Agra ( 2021 - 2024 )</p>
                        <h3 className='text-2xl md:text-3xl font-serif font-bold mt-2 mb-4'>Bacherlors of Science ( Computer Science )</h3>
                    </div>
                    <div className='bg-[#f2f2f2] p-10 mt-10'>
                        <p className='text-lg font-semibold font-serif'>Kanha Makhan Public School, Mathura ( 2017 - 2021 )</p>
                        <h3 className='text-2xl md:text-3xl font-serif font-bold mt-2 mb-4'>High School &amp; Intermediate</h3>
                    </div>
                </div>
            }
            {/* {activeTab === 'SKILLS' &&
                <div className='mt-10 flex flex-wrap justify-center gap-4'>
                    <div className='border-4 border-black p-2'>
                        <div className='bg-yellow-400 p-2'>
                            <p className='text-2xl font-serif font-semibold'>HTML</p>
                        </div>
                    </div>
                    <div className='border-4 border-black p-2'>
                        <div className='bg-yellow-400 p-2'>
                            <p className='text-2xl font-serif font-semibold'>CSS</p>
                        </div>
                    </div>
                    <div className='border-4 border-black p-2'>
                        <div className='bg-yellow-400 p-2'>
                            <p className='text-2xl font-serif font-semibold'>Javascript</p>
                        </div>
                    </div>
                    <div className='border-4 border-black p-2'>
                        <div className='bg-yellow-400 p-2'>
                            <p className='text-2xl font-serif font-semibold'>ReactJs</p>
                        </div>
                    </div>
                </div>
            } */}
        </div>
    )
}

export default Tabs