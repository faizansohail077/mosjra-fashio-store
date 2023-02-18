import React from 'react'
import Wrapper from './Wrapper'

const Footer = () => {
  return (
    <div className='bg-black' >
      <Wrapper>
        <div className='px-5 xl:px-0 flex flex-wrap md:flex-nowrap justify-between py-10 text-white' >

          <div className='w-full mt-10 md:mt-0 ' >
            <p className='font-bold' >About Shop</p>

            <ul className='list-none' >
              <li className='footer-list' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</li>
              <li className='footer-list' >E. karubar@gmail.com</li>
              <li className='footer-list' >T. 004434424</li>
            </ul>
          </div>

          <div className='w-full mt-10 md:mt-0 md:text-right'>
            <p>Company</p>
            <ul className='list-none' >
              <li className='footer-list' >About us</li>
              <li className='footer-list' >Accounts</li>
              <li className='footer-list' >Contact us</li>
              <li className='footer-list' >Order Tracking</li>
              <li className='footer-list' >News</li>
            </ul>
          </div>

          <div className='w-full mt-10 md:mt-0 md:text-right'>
            <p>Customer Care</p>
            <ul className='list-none' >
              <li className='footer-list' >Terms & Condition</li>
              <li className='footer-list' >Shipping Policy</li>
              <li className='footer-list' >FAQs</li>
              <li className='footer-list' >Refund Policy</li>
              <li className='footer-list' >Privacy Policy</li>
            </ul>
          </div>

          <div className='w-full mt-10 md:mt-0 md:text-right'>

            <p>Follow us</p>
            <ul className='list-none' >
              <li className='footer-list' >Facebook</li>
              <li className='footer-list' >Instagram</li>
              <li className='footer-list' >Linkedin</li>
              <li className='footer-list' >Youtube</li>
              <li className='footer-list' >Twitter</li>
            </ul>
          </div>

        </div>

        <div className="mx-auto md:max-w-7xl  border-t-2 border-white py-5 text-white">
          <div className="flex gap-2 md:gap-0 items-center justify-center md:justify-between ">
            <p>@2022 www.karobarhq.com  all right reserved</p>
            <p>Privacy Policy & Term of Use</p>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Footer