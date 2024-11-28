import React from 'react'

function Contact() {
    return (
        <div className='py-20 px-10 ' id='contact'>
            <div className='flex flex-col items-center'>
                <h2 className='text-5xl font-semibold font-serif tracking-wider'>CONTACT</h2>
                <hr className='border-4 border-black mt-5 w-20' />
                <div className='mt-10 w-full space-y-5'>
                    <div className='w-full flex flex-col md:flex-row  gap-5'>
                        <input type="text" placeholder='Name*' className='border-2 border-black w-full md:w-1/2 text-xl px-4 py-2 placeholder:text-black' />
                        <input type="email" placeholder='Email*' className='border-2 border-black w-full md:w-1/2 text-xl px-4 py-2 placeholder:text-black' />
                    </div>
                    <textarea rows={4} placeholder='Message' className='border-2 border-black w-full text-xl px-4 py-2 placeholder:text-black' />
                    <button
                        className={`bg-custom w-full text-xl font-semibold py-3 hover:bg-black hover:text-white transition-colors duration-300`}
                    >
                        SEND MESSAGE
                    </button>
                </div>
                <div className='w-full mt-20 space-y-5'>
                    <div className='w-full flex flex-col items-center'>
                        <span>PHONE</span>
                        <p className='text-xl font-semibold tracking-wider'>+917060753394</p>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <span>Email</span>
                        <p className='text-xl font-semibold tracking-wider underline decoration-custom'>sharmamridul045@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact