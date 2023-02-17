import { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    img: StaticImageData
}

const TrendingCard = ({ img }: Props) => {
    return (
        <div className='md:p-2 xl:p-0 flex flex-auto flex-col gap-2 h-[auto] justify-center w-[48%] sm:w-[20%]' >
            <img src={img.src} className="h-[auto] w-full object-cover" />
            <p className='text-md' >Parka TOM TAILOR OLIVE</p>
            <p >Rs: 1440</p>
        </div>
    )
}

export default TrendingCard