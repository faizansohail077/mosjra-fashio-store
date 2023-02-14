"use client"
import React from 'react'
import Logo from '@/assests/Img/Logo.svg'
import Image from 'next/image'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { HiMenuAlt1 } from 'react-icons/hi'
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const routes = [
    { id: 0, text: 'Home', route: '' },
    { id: 1, text: 'New Arrivals', route: '' },
    { id: 2, text: 'Men', route: '' },
    { id: 3, text: 'Women', route: '' },
    { id: 4, text: 'Kids', route: '' },
    { id: 5, text: 'Sale', route: '' },
    { id: 6, text: 'Blogs', route: '' },
]


const Header = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <div>
            <Head>
                <title>Create Next Responsive Navbar With Tailwind CSS</title>
                <meta
                    name="description"
                    content="Create Next JS Responsive Menu with Tailwind CSS"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className="w-full">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="#">
                                <Image alt='Logo' src={Logo} height={50} width={50} />
                            </a>
                            <div className="md:hidden flex flex-row-reverse ">
                                <button
                                    className="ml-5 p-2 text-gray-700 rounded-md outline-none "
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <RxCross1 className='h-6 w-6 cursor-pointer' />
                                    ) : (
                                        <HiMenuAlt1 className='h-6 w-6 cursor-pointer' />
                                    )}
                                </button>
                                <div className='flex items-center gap-5' >
                                    <BsSearch className='h-6 w-6 cursor-pointer' />
                                    <AiOutlineShoppingCart className='h-6 w-6 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="text-sm items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                {routes?.map((r) => {
                                    return (
                                        <li key={r.id} className="text-black hover:text-gray-500 font-semibold cursor-pointer hover:underline">
                                            <Link href="/">
                                                {r.text}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className='hidden md:flex  items-center gap-5' >
                        <BsSearch className='h-6 w-6 cursor-pointer' />
                        <AiOutlineShoppingCart className='h-6 w-6 cursor-pointer' />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header