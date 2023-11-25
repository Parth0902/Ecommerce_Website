import React from 'react'
import { useState } from 'react';
import { IndianRupee } from 'lucide-react';


const Cards = ({Data}) => {
    
  const [hoveredCards, setHoveredCards] = useState({});
  const handleMouseEnter = (id) => {
    setHoveredCards((prev) => ({ ...prev, [id]: true }));
  };
  const handleMouseLeave = (id) => {
    setHoveredCards((prev) => ({ ...prev, [id]: false }));
  };
  
  return (
    <div className='flex justify-start flex-wrap gap-12' >
        {Data.map((card) => (
          <div key={card.id} className='flex flex-col gap-1 relative card'>
            {card.isNew && (
              <span className='absolute top-1 left-1 bg-white border rounded text-green-700 text-xs p-1 font-medium'>
                New Arrival
              </span>
            )}
            <img
              src={hoveredCards[card.id] ? card.img2 : card.img}
              alt='productImage'
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={() => handleMouseLeave(card.id)}
            />
            <h4 className='text-lg text-black'>{card.title}</h4>
            <div className='flex gap-2'>
              <span className='text-gray-400 font-medium line-through'>
                {card.oldPrice}
              </span>
              <span className='text-gray-950 font-medium flex items-center pr-2'>
                {card.newPrice} <IndianRupee size={16} />
              </span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Cards