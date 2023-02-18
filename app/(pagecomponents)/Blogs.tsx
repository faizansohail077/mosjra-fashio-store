import React from 'react'
import img1 from '../../assests/Img/blog1.png'
import img2 from '../../assests/Img/blog2.png'
import BlogPost from './BlogPost'

const blogData = [
    { id: 0, text: "1", img: img1 },
    { id: 1, text: "1", img: img2 },
]


const Blogs = () => {
    return (
        <div className='p-5 mt-5 mb-10 md:mt-20 mx-auto md:max-w-7xl font-jose' >
            <h1 className=' text-3xl md:text-5xl text-center mb-5 md:mb-10 ' >Our Blogs</h1>

            <div className="flex gap-3 flex-wrap ">
                {blogData.map((b) => {
                    return (
                        <BlogPost key={b.id} img={b.img} />
                    )
                })}
            </div>

        </div >
    )
}

export default Blogs