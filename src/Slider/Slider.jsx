import React,{useState} from 'react'
import { ArrowBigRight,ArrowBigLeft } from 'lucide-react';
import '../App.css';

const data = [
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
];


const Slider = () => {
  const [currSilde,setCurrSlide]=useState(0);

  const prevSlide=()=>{setCurrSlide(currSilde===0?2:(prev)=>prev-1)};
  const nextSlide=()=>{setCurrSlide(currSilde===2?0:(prev)=>prev+1)};
  return (
    <div className='overflow-hidden relative' >
      <div className='flex transition ease-in-out duration-1000'  style={{width:"300vw",height:"95vh",transform:`translateX(-${currSilde*100}vw)`}}>
          <img src={data[0]} className="w-screen object-fill" alt="First Img" />
          <img src={data[1]} className="w-screen object-fill" alt="Second Img" />
          <img src={data[2]} className="w-screen object-fill" alt="Third Img" />
      </div>
      <div className="flex justify-center">
        <div className='flex absolute bottom-10 gap-2'>
         <ArrowBigLeft size={40}  strokeWidth={0.5} className=' border cursor-pointer hover:text-white border-black hover:border-white' onClick={prevSlide}/>
         <ArrowBigRight size={40} strokeWidth={0.5}  className=' border cursor-pointer hover:text-white border-black hover:border-white' onClick={nextSlide}/>
        </div>
      </div>
     

    </div>
  )
}

export default Slider