import { StaticImageData } from 'next/image'
import React from 'react'

import Card from './Card'

type Props = {
    id: number,
    img: StaticImageData,
    title: string,
    subtitle: string
}


const SubHero = ({ data }: { data: Props[] }) => {
    return (
        <div className='mx-auto md:max-w-7xl font-jose' >

            <div className="flex p-5  flex-wrap md:flex-nowrap gap-5 my-5">
                {data?.map((c: Props) => {
                    return (
                        <Card title={c.title} subtitle={c.subtitle} key={c.id} img={c.img} />
                    )
                }
                )
                }
            </div>
        </div>
    )
}

export default SubHero