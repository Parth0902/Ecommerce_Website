import React from 'react'
import { ChevronDown,IndianRupee,Search,User,Heart,ShoppingCart} from 'lucide-react';
import indian_flag from "../Assets/india.png"

const NavBar = () => {
  return (
    <div className='flex px-6 py-3'>
        <div className='flex-2 flex flex-row justify-start gap-4'>
            <div className='flex flex-row items-center'>
              <img src={indian_flag} className='h-9' alt="indian flag" />
              <ChevronDown />
            </div>
            
            <div className='flex flex-row items-center'>
              <IndianRupee/>
              <ChevronDown />
            </div>

            <p>Men</p>
            <p>Women</p>
            <p>children</p>
            <p>Accessories</p>
        </div>

        <div className='flex-1 flex flex-row justify-center '>
            <p>Ecom_Web</p>
        </div>

        <div className='flex-2 flex flex-row justify-end gap-4'>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            <p>Store</p>
            <Search/>
            <User/>
            <Heart/>

            <div className='flex'>
              <ShoppingCart/>
              <span className='bg-blue-500 px-2 rounded-full h-6 2-6 text-white relative bottom-2 right-2'>0</span>

            </div>
        </div>
    </div>
  )
}

export default NavBar