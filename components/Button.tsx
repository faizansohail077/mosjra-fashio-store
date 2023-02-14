import React from 'react'

type Props = {
    title: string
}

const Button = ({ title }: Props) => {
    return (
        <button className='bg-black text-white w-full p-5' >{title}</button>

    )
}

export default Button