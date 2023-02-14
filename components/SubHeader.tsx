import React from 'react'

const SubHeader = () => {
    return (
        <div className='bg-[#EAEAEA]' >
            <div className='hidden font-jose h-10  items-center justify-end px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4' >
                <div className='flex items-center gap-5' >
                    <p className='text-xs text-[#9D9D9D] pr-3 border-r-2 border-[#BDBDBD] cursor-pointer ' >Track Order</p>
                    <p className='text-xs text-[#9D9D9D] pr-3 border-r-2 border-[#BDBDBD] cursor-pointer'>Register</p>
                    <p className='text-xs text-[#9D9D9D]  border-[#BDBDBD] cursor-pointer'>Sign in</p>
                </div>
            </div>
        </div>
    )
}

export default SubHeader