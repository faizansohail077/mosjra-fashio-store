import React from 'react'
import FriendsCard from './FriendsCard'
import img1 from '../assests/Img/friend1.png'
import img2 from '../assests/Img/friend2.png'
import img3 from '../assests/Img/friend3.png'
import img4 from '../assests/Img/friend4.png'

const friendData = [
    { id: 0, img: img1 },
    { id: 1, img: img2 },
    { id: 2, img: img3 },
    { id: 3, img: img4 },
]

const Friends = () => {
    return (
        <div className='p-5 mt-5 mb-10 md:mt-20 mx-auto md:max-w-7xl font-jose' >
            <h1 className=' text-3xl md:text-5xl text-center mb-5 md:mb-10 ' >Let's Be Friends</h1>

            <div className="flex flex-wrap md:flex-nowrap ">
                {friendData?.map((f) => {
                    return (
                        <FriendsCard key={f.id} img={f.img} />
                    )
                })}
            </div>
        </div >
    )
}

export default Friends