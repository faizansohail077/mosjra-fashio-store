import Image from 'next/image'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

type Props = {
    id?: number;
    text?: string;
    price?: string;
    img?: string | any;
}


const ProductCard = ({ data }: { data: Props }) => {
    return (
        <div className='p-5 w-[49%] sm:w-[31%] lg:w-[25%] mt-2' >
            <Image src={data?.img} alt={"img"} style={{ objectFit: 'cover', height: '80%', width: '100%', objectPosition: '100% 100%' }} />

            <div className='flex flex-col gap-2 mt-2' >
                <p>Striped denim dress</p>
                <div className='flex items-center justify-between' >
                    <p>Dress</p>
                    <div className='border-t-2 border-[#EAEAEA]  w-[70%]' />
                    <div className='rounded-full p-2 bg-[#EAEAEA] cursor-pointer' ><AiOutlineShoppingCart color='#9D9D9D' size={20} /></div >
                </div>
                <p>$20.00</p>
            </div>

        </div>
    )
}

export default ProductCard