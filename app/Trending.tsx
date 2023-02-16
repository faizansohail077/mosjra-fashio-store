import React from 'react'
import TrendingButtons from './TrendingButtons'
import TrendingCard from './TrendingCard'
import img1 from '../assests/Img/trending1.png'
import img2 from '../assests/Img/trending2.png'
import img3 from '../assests/Img/trending3.png'
import img4 from '../assests/Img/trending4.png'
import img5 from '../assests/Img/trending5.png'
import img6 from '../assests/Img/trending6.png'
import img7 from '../assests/Img/trending7.png'
import img8 from '../assests/Img/trending8.png'

const cardData = [
    { id: 0, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img1 },
    { id: 1, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img2 },
    { id: 2, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img3 },
    { id: 3, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img4 },
    { id: 4, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img5 },
    { id: 5, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img6 },
    { id: 6, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img7 },
    { id: 7, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img8 },
]

const Trending = () => {

    return (
        <div className='p-5 lg:p-0 mt-5 md:mt-20 mx-auto md:max-w-7xl font-jose' >
            <h1 className='text-3xl md:text-5xl text-center mb-5 md:mb-0 ' >Trending Product</h1>

            <div className="my-10 hidden md:flex justify-center ">
                <TrendingButtons />
            </div>
            <div className="flex w-full gap-3 md:gap-4 flex-wrap">
                {cardData?.map((c) => {
                    return (
                        <TrendingCard img={c.img} />
                    )
                })
                }
            </div>
        </div >
    )
}

export default Trending