import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

type Props = {
    id?: string;
    text?: string;
    price?: string;
    img?: string | any;
}

const sizes = [
    "SL", "S", "M", "L", "XL"
]
const ProductCard = ({ data, sale }: { data: Props, sale?: Boolean }) => {
    const [addToCartId, setAddToCartId] = useState("")

    const addItem = (id: string) => {
        setAddToCartId(id)
    }

    return (
        <div className='p-3 md:p-0 overflow-hidden relative  w-[49%] sm:w-[31%] lg:w-[24%] mt-2' >
            <div className='group relative w-full' >

                <Image src={data?.img} alt={"img"} style={{ objectFit: 'cover', height: '80%', width: '100%', objectPosition: '100% 100%' }} />

                <div className="child-div duration-500 flex flex-col justify-end gap-3 h-[80%] md:h-[30%] w-full absolute bg-gray-100/60 bottom-[-300px] hover:bottom-0 ">
                    <div className='flex justify-center gap-3 flex-wrap' >
                        {sizes.map((s) => {
                            return (
                                <div className='border-2 hover:bg-black hover:text-white font-bold hover:cursor-pointer px-3 py-1' >
                                    {s}
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <button className='border-2 border-black hover:bg-black hover:text-white w-full py-2 ' >Buy Now</button>
                    </div>
                </div>

            </div>
            {sale && <div style={{ padding: "0.6vw 2.5vw 0.3vw" }} className='bg-[#EC2E2E] top-0 right-[-1.8vw] hidden rotate-[45deg] md:flex justify-center items-center absolute text-white' >25%</div>}

            <div className='flex flex-col gap-2 mt-2' >
                <p>Striped denim dress</p>
                <div className='flex items-center justify-between' >
                    <p>Dress</p>
                    <div className='border-t-2 border-[#EAEAEA]  w-[70%]' />

                    <div onClick={() => addItem(data?.id!)} className={`rounded-full p-2 ${data?.id === addToCartId ? "bg-black" : "bg-[#EAEAEA]"} cursor-pointer`} >
                        <AiOutlineShoppingCart color='#9D9D9D' size={20} />
                    </div >
                </div>
                <p>$20.00</p>
            </div>



        </div>

    )
}

export default ProductCard