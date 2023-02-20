import React from 'react'

type Props = {
    title: string,
    light: Boolean
}

const Button = ({ title, light }: Props) => {
    return (
        <button className={`${light ? "bg-transparent  hover:bg-black text-black hover:text-white border-2 border-black " : "bg-black text-white  "}  w-full py-3 px-5`} > {title}</button >
    )
}

export default Button