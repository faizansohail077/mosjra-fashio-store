import { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    img: StaticImageData | any,
    title: string,
    subtitle: string,
    id?: string,

}
const Card = ({ img, title, subtitle }: Props) => {
    return (
        <div style={{ backgroundImage: `url(${img.src})` }} className={`p-5 flex flex-auto flex-col justify-center w-full h-[30vh] py-10 md:py-0 bg-no-repeat bg-cover bg-[100%]`} >

            <p className='font-semibold' >
                {title}
            </p>
            <p className='font-semibold' >
                {subtitle}
            </p>

            <p className='mt-2 font-medium underline cursor-pointer' >View Deal</p>
        </div>
    )
}

export default Card