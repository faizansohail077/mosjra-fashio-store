import { StaticImageData } from 'next/image'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const BlogPost = ({ img }: { img: StaticImageData }) => {
    return (
        <div style={{ backgroundImage: `url(${img.src})` }} className="mb-[100px] relative p-4 md:p-10 h-[70vh] w-full lg:w-[48%] bg-no-repeat bg-cover bg-center ">

            <div className='bg-white text-center p-5 inline-block text-lg font-bold' >
                <p>12</p>
                <p>AUG</p>
            </div>

            <div className='absolute bottom-[-100px] left-4 md:left-auto w-[90%] bg-white shadow-md p-5 flex flex-col gap-4' >
                <button className='bg-[#E6E6E6] text-center p-3 text-xl inline w-[50%] lg:w-[30%]' >Lifestyle</button>
                <p className='font-bold' >How to dress up for casual/party season?</p>
                <p className='font-medium'>The holidays are just around the corner, and that means party season is in full swing! If you're not sure what to wear to...</p>
                <div className="flex items-center gap-3">
                    <p>Read More</p>
                    <IoIosArrowRoundForward size={30} />
                </div>
            </div>
        </div>
    )
}

export default BlogPost