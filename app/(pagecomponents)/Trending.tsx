import { StaticImageData } from 'next/image';
import React from 'react'
import TrendingButtons from './TrendingButtons'
import TrendingCard from './TrendingCard'

type Props = {
    id: number;
    text: string;
    price: string;
    img: StaticImageData;
}

const Trending = ({ showButton, data, title }: { title: string, showButton: Boolean, data: Props[] }) => {

    return (
        <div className='p-5  mt-5 md:mt-20 mx-auto md:max-w-7xl font-jose' >
            <h1 className=' text-3xl md:text-5xl text-center mb-5 md:mb-10 ' >{title}</h1>

            {showButton && <div className="mb-10 hidden md:flex justify-center ">
                <TrendingButtons />
            </div>}
            <div className="flex w-full gap-3 md:gap-4 flex-wrap">
                {data?.map((c) => {
                    return (
                        <TrendingCard key={c.id} img={c.img} />
                    )
                })
                }
            </div>
        </div >
    )
}

export default Trending