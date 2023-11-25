import React, { useState } from 'react';
import { IndianRupee } from 'lucide-react';
import Cards from './Cards';

const FeaturedProducts = ({ sectionName }) => {
    const Data=[
        {
            id:1,
            img:'https://images.bewakoof.com/t1080/men-s-black-panther-graphic-printed-oversized-t-shirt-624569-1699536335-1.jpg',
            img2:'https://images.bewakoof.com/t1080/men-s-black-copanther-graphic-printed-oversized-t-shirt-624569-1696412559-3.jpg',
            title:'Mens Oversizet T shirt',
            isNew:true,
            oldPrice:1100,
            newPrice:750
            
        },
        {
            id:2,
            img:"https://images.bewakoof.com/t1080/men-s-black-beast-rider-graphic-printed-oversized-t-shirt-626016-1699611299-3.jpg",
            img2:"https://images.bewakoof.com/t1080/men-s-black-beast-rider-graphic-printed-oversized-t-shirt-626016-1699611288-1.jpg",
            title:'Mens Oversizet T shirt',
            isNew:false,
            oldPrice:1100,
            newPrice:750
            
        },
        {
            id:3,
            img:"https://images.bewakoof.com/t1080/women-s-black-wanderlust-graphic-printed-oversized-t-shirt-625278-1697110236-1.jpg",
            img2:"https://images.bewakoof.com/t1080/women-s-black-wanderlust-graphic-printed-oversized-t-shirt-625278-1697110247-3.jpg",
            title:'Womens Oversizet T shirt',
            isNew:true,
            oldPrice:1100,
            newPrice:750
            
        },
        {
            id:4,
            img:"https://images.bewakoof.com/t1080/women-s-green-world-balance-graphic-printed-oversized-625761-1699275769-2.jpg",
            img2:"https://images.bewakoof.com/t1080/women-s-green-world-balance-graphic-printed-oversized-625761-1699275785-5.jpg",
            title:'Womens Oversizet T shirt',
            isNew:false,
            oldPrice:1100,
            newPrice:750
            
        },
       
    ];

  return (
    <div className='flex flex-col gap-10 mx-24 my-6 flex-wrap'>
      <div className='flex justify-between items-center'>
        <h4 className='font-bold text-2xl flex-1'>{sectionName}</h4>
        <p  className='font-sans text-justify text-gray-700 flex-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi quasi eveniet nesciunt temporibus, dolores beatae officia dolor minus est rem! Nobis dolore numquam autem totam illum perspiciatis ullam aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, maxime.</p>

      </div>
      <div className='mx-36 flex justify-center'>
         <Cards Data={Data}/> 
      </div>
    </div>
  );
};

export default FeaturedProducts;
