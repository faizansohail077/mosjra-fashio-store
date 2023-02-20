import { StaticImageData } from 'next/image'
import React from 'react'
import { BsInstagram } from 'react-icons/bs'

const FriendsCard = ({ img }: { img: StaticImageData }) => {
    return (
        <div style={{ backgroundImage: `url(${img.src})` }} className={`flex items-center justify-center w-[48%] md:w-full h-[40vh]  md:h-[50vh] py-10 md:py-0 bg-no-repeat bg-cover bg-center `} >


            <div className='opacity-0 duration-300 hover:opacity-100 hover:bg-neutral-500/30 hover:flex items-center justify-center w-full h-full font-medium cursor-pointer' >
                <BsInstagram color='white' size={30}
                />

            </div>
        </div>
    )
}

export default FriendsCard