import React from 'react'

function Hero() {
    return (
        <div className='md:h-[700px] lg::h-screen flex jost border-b-4 border-black py-10 md:px-10 lg:px-0 flex-col md:flex-row'>
            <div className='w-full h-[600px] md:h-auto md:w-1/2 bg-white md:flex items-center justify-center hidden'>
                <div className='relative flex items-center justify-center right-0'>
                    <div className='z-10 w-[400px] h-[300px] bg-custom'></div>
                    <div className='absolute w-[350px] h-[450px] border-[12px] border-black z-10 flex justify-center items-center'>
                        <div className='w-[90%] h-[90%] bg-black'></div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-2/3 px-4 md:pl-10 flex flex-col justify-center'>
                <h2 className='text-4xl md:text-5xl font-semibold font-serif tracking-wider'>FRONTEND DEVELOPER</h2>
                <hr className='border-4 border-black mt-3 md:mt-5 mb-7 w-1/3' />
                <p className='text-2xl lg:w-3/4 pr-4 md:pr-0'>Founder of Frenify. Professional UI/UX designer and web developer based on London. Sometimes works as a freelancer.</p>
                <div className='w-full h-[600px] md:h-auto md:w-1/2 bg-white flex items-center justify-center md:hidden'>
                    <div className='relative flex items-center justify-center right-0'>
                        <div className='z-10 w-[400px] h-[300px] bg-custom'></div>
                        <div className='absolute w-[350px] h-[450px] border-[12px] border-black z-10 flex justify-center items-center'>
                            <div className='w-[90%] h-[90%] bg-black'></div>
                        </div>
                    </div>
                </div>
                <span className='text-5xl font-semibold md:mt-5 caveat'>Mridul Sharma</span>
            </div>

        </div>
    )
}

export default Hero