import React from 'react'
import img1 from "../assests/Img/subcard2.png"
import img2 from "../assests/Img/subcard3.png"
import img3 from "../assests/Img/subcard1.png"
import Card from './Card'


const cardData = [
    { id: 0, img: img1, title: 'For Men Clothing Bundle Deal' },
    { id: 1, img: img2, title: 'For Women Clothing Bundle Deal' },
    { id: 2, img: img3, title: 'Accessories Hand Bag Collection' },
]

const SubHero = () => {
    return (
        <div className='px-4 mx-auto md:max-w-6xl font-jose' >
            <div className="flex flex-wrap md:flex-nowrap gap-5 my-5">

                <div className='p-3 flex flex-col justify-center w-full h-[25vh] py-10 md:py-0 bg-[url("../assests/Img/subcard2.png")] bg-no-repeat bg-cover bg-[100%] ' >

                    <p className='font-semibold' >
                        For Men
                    </p>
                    <p> Clothing Bundle Deal</p>
                    <p className='mt-2 font-medium underline cursor-pointer' >View Deal</p>
                </div>
                <div className='p-3 flex flex-col justify-center w-full h-[25vh] py-10 md:py-0 bg-[url("../assests/Img/subcard3.png")] bg-no-repeat bg-cover bg-[100%] ' >


                    <p className='font-semibold' >
                        For Women
                    </p>
                    <p> Clothing Bundle Deal</p>

                    <p className='mt-2 font-medium underline cursor-pointer' >View Deal</p>
                </div>
                <div className='p-3 flex flex-col justify-center w-full h-[25vh] py-10 md:py-0 bg-[url("../assests/Img/subcard1.png")] bg-no-repeat bg-cover bg-[100%] ' >


                    <p className='font-semibold' >
                        Accessories
                    </p>
                    <p> Hand Bag Collection</p>

                    <p className='mt-2 font-medium underline cursor-pointer' >View Deal</p>
                </div>
            </div>

        </div>
    )
}

export default SubHero