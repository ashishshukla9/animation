import React from 'react'

const Background = () => {
    return (
        <>
            <div className='fixed z-[2] w-full h-screen'>
                <div className='absolute top-[5%] w-full py-10 flex justify-center font-semibold text-zinc-600 text-xl'>Documents.</div>
                <h1 className='text-zinc-900 text-[14vw] tracking-tighter leading-none absolute top-1/3 left-1/2 -translate-x-[50%] -translate-Y-[50%] font-semibold'>Docs.</h1>
            </div>

        </>
    )
}

export default Background
