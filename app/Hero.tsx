import { Button } from '@/components'
import React from 'react'

const Hero = () => {
    return (
        <div className=' md:h-[96vh] py-10 lg:py-0 bg-[#E6E6E6] md:bg-[url("../assests/Img/banner.png")] bg-no-repeat	bg-cover  bg-fixed bg-center' >
            <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex xl:px-0 h-full'>

                <div className='text-center md:text-left flex flex-col h-full justify-center gap-5' >

                    <p className='text-xl font-semibold' >Premium High Waisted</p>
                    <h1 className='text-3xl md:text-5xl font-bold md:w-[90%]' >Women Tracks NOW
                        Available</h1>
                    <div className='md:w-[30%]' >

                        <Button title={'SHOP NOW'} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero