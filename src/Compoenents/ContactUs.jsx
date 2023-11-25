import React from 'react'
import { Facebook,Chrome,Twitter,Instagram } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className='py-3 w-full flex items-center justify-center gap-36 bg-blue-600'>
        <p className='text-white font-semibold text-lg'>BE IN TOUCH WITH US</p>
        <div className='flex gap-0'>
            <input type="text" className='p-2 text-sm rounded-l-xl' placeholder='Enter your email' />
             <button className='rounded-r-xl p-2 bg-slate-900 text-white'>JOIN US</button>
        </div>
        <div className='flex gap-3'>
            <Facebook color={'#ffffff'} className='cursor-pointer'/>
            <Instagram color={'#ffffff'} className='cursor-pointer'/>
            <Twitter color={'#ffffff'} className='cursor-pointer'/>
            <Chrome color={'#ffffff'} className='cursor-pointer'/>
        </div>

    </div>
  )
}

export default ContactUs