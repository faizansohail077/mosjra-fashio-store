import React, { ReactNode } from 'react'

const Wrapper = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className='h-full w-full mx-auto lg:max-w-7xl font-jose' >{children}</div>
    )
}

export default Wrapper