"use"
import { StaticImageData } from 'next/image'
import React from 'react'
type Props = {
    img: StaticImageData | any,
    title: string,
    subtitle: string,
    id?: string,

}
const Card = ({ img, title, subtitle }: Props) => {
    console.log(img, 'imgimg')
    return (
        <div  className={`p-3 flex flex-col justify-center w-full h-[25vh] py-10 md:py-0 bg-[url("../assests/Img/subcard2.png")]  bg-no-repeat bg-[100%]`} >

            <p className='font-semibold' >
                {title}
            </p>
            <p className='font-semibold' >
                {subtitle}
            </p>

            <p className='mt-2 font-medium underline' >View Deal</p>
        </div>
    )
}

export default Card