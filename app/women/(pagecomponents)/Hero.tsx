import { Wrapper } from '@/components'
import React from 'react'

const Hero = () => {
    return (
        <div className='h-[50vh] w-[100%] lg:py-0 bg-[#E6E6E6]  ' >
            <div className='bg-[url("../assests/Img/womenbanner.png")]  bg-no-repeat bg-cover bg-[center] h-full w-full' >
                <Wrapper>
                    <div className='justify-between px-4 md:items-center md:flex xl:px-0 h-full'>
                        <div className='flex flex-col h-full justify-center gap-10' >
                            <p className=' text-2xl mdtext-5xl font-semibold' >Women's Collection</p>
                            <h1 className='hidden md:inline-block text-sm text-[#292D32] ' >
                                {" HOME > WOMEN COLLECTIONS"}
                            </h1>

                        </div>

                    </div>
                </Wrapper>
            </div>

        </div >
    )
}

export default Hero