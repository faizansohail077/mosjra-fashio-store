"use client"
import { Pagination, Wrapper } from '@/components'
import React, { useState } from 'react'
import { ProductData } from './data'

const Products = () => {

    return (
        <Wrapper>
            <div className="py-10 ">

                <div className='p-5 flex justify-end '>
                    <select onChange={(e) => console.log(e.target.value)} className=' md:w-[20%]
                    px-3
                    py-2
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-black
                    rounded
                    transition
                    ease-in-out
                    m-0
                  focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none' name="" id="">
                        <option value="Best-Selling">Best Selling</option>
                        <option value="A-Z">Alphabetically, A-Z</option>
                        <option value="Z-A">Alphabetically,Z-A</option>
                        <option value="Low-High">Price, Low to High</option>
                        <option value="High-LOW">Price, High to Low</option>
                    </select>

                </div>


                <Pagination itemsPerPage={12} data={ProductData} />
            </div>
        </Wrapper >
    )
}

export default Products