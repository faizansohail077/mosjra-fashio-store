import { Wrapper } from '@/components'
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
        <Wrapper>

            <div className="flex p-5  flex-wrap md:flex-nowrap gap-5 my-5">
                {data?.map((c: Props) => {
                    return (
                        <Card title={c.title} subtitle={c.subtitle} key={c.id} img={c.img} />
                    )
                }
                )
                }
            </div>
        </Wrapper>
    )
}

export default SubHero