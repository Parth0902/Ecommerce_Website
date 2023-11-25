import React from 'react'
import Payment from '../Assets/payment.png'
const Footer = () => {
  return (
    <div className='mx-36 py-10'>
      <div className='flex justify-between gap-10'>
        <div className='flex flex-col gap-2 flex-1'>
          <h4 className='font-medium text-xl'>Categories</h4>
          <p>Women</p>
          <p>Men</p>
          <p>Shoes</p>
          <p>Accessories</p>
          <p>New Arrivals</p>
        </div>

        <div className='flex flex-col gap-2 flex-1'>
          <h4 className='font-medium text-xl'>Links</h4>
          <p>FAQ</p>
          <p>Pages</p>
          <p>Stores</p>
          <p>Compare</p>
          <p>Cookies</p>
        </div>

        <div className='flex flex-col gap-2 flex-1'>
          <h4 className='font-medium text-xl'>About</h4>
          <p  className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consectetur, repellendus, error sapiente quos ipsum aperiam maxime assumenda unde non repellat eveniet tenetur. Iste similique quisquam libero qui quia amet.</p>
        </div>

        <div className='flex flex-col gap-2 flex-1'>
          <h4 className='font-medium text-xl'>Contact</h4>
          <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, ad perferendis. Minus fuga fugit dolorem dignissimos ratione, mollitia totam obcaecati magni reiciendis quos, fugiat dolor omnis commodi. Esse, corrupti quia.</p>
        </div >
      </div>

      <div className='flex justify-between py-12'> 
        <div className='flex gap-5 items-center'>
            <h1 className='font-extrabold text-4xl'>Ecom Store</h1>
            <p className='text-gray-500'>&copy; Copyright 2023 All Rights Reserved</p>
        </div>

        <img src={Payment} className='h-14' alt="payment options" />
      </div>
    </div>
  )
}

export default Footer