import React from 'react'
import img1 from "../assests/Img/subcard2.png"
import img2 from "../assests/Img/subcard3.png"
import img3 from "../assests/Img/subcard1.png"
import Card from './Card'


const cardData = [
    { id: 0, img: img1, title: 'For Men', subtitle: 'Clothing Bundle Deal' },
    { id: 1, img: img2, title: 'For Women', subtitle: 'Clothing Bundle Deal' },
    { id: 2, img: img3, title: 'Accessories', subtitle: 'Hand Bag Collection' },
]

const SubHero = () => {
    return (
        <div className='mx-auto md:max-w-7xl font-jose' >

            <div className="flex p-5 xl:p-0 flex-wrap md:flex-nowrap gap-5 my-5">
                {cardData?.map((c) => {
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