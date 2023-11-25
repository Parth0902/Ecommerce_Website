import React from 'react'

const HeroGrid = () => {
  return (
    <div className='flex gap-2 my-20 mx-2' style={{height:"75vh"}} >
        <div className='col flex flex-col gap-2 h-full'>
           <div className='flex-1 bg-[url("https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1600")] bg-cover bg-no-repeat flex justify-center items-center'>
              <button className='p-2 bg-white px-3 rounded-2xl'>Woman</button>
           </div>
           <div className='flex-1 bg-[url("https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1600")] bg-cover bg-no-repeat flex justify-center items-center '>
              <button className='p-2 bg-white px-3 rounded-2xl'>Sale</button>
           </div>
        </div>
        <div className='col h-full bg-[url("https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600")] bg-cover bg-no-repeat flex justify-center items-center '>
                  <button className='p-2 bg-white px-3 rounded-2xl'>New Season</button>
        </div>
        <div className='col-l flex flex-col gap-2 h-full'>
            <div className='flex-1 flex gap-2'>
                <div className='flex-1 bg-[url("https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&w=1600")] bg-cover bg-no-repeat flex justify-center items-center'>
                      <button className='p-2 bg-white px-3 rounded-2xl'>Men</button>
                </div>
                <div className='flex-1 bg-[url("https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1600")] bg-cover bg-no-repeat flex justify-center items-center '>
                      <button className='p-2 bg-white px-3 rounded-2xl'>Accesories</button>
                </div>
            </div>
            
            <div className='flex-1 bg-[url("https://images.pexels.com/photos/345415/pexels-photo-345415.jpeg?auto=compress&cs=tinysrgb&w=1600")] bg-cover bg-no-repeat flex justify-center items-center'>
               <button className='p-2 bg-white px-3 rounded-2xl'>Shoes</button>
            </div>
        
        </div>

    </div>
  )
}

export default HeroGrid