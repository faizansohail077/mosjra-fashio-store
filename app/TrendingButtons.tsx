"use client"

import React, { useState } from 'react'
const button = [
    { id: 0, text: 'All' },
    { id: 1, text: 'Shorts' },
    { id: 2, text: 'Accessories' },
    { id: 3, text: 'Dress Pants' },
    { id: 4, text: 'Shirts' },
]

const TrendingButtons = () => {
    const [id, setId] = useState(0)

    const selectButton = (id: number) => {
        setId(id)
    }
    return (
        <div className="flex gap-5 md:w-[80%] flex-wrap md:flex-nowrap  ">
            {button.map((b) => {
                return (
                    <div className={`${b.id === id ? "bg-black text-white" : "bg-[#E6E6E6] text-black"} text-lg cursor-pointer flex justify-center items-center px-5 py-2 w-full m-0`} key={b.id} onClick={() => selectButton(b.id)} >
                        <p>{b.text}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TrendingButtons