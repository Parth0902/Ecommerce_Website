import React from 'react'
import Banner from '../../Assets/Banner.png'
import Cards from '../../Compoenents/Cards';
const Products = () => {
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
    <div className='flex justify-between my-10'>
      <div className='flex flex-col gap-5 mx-16 ' style={{flex:"2"}}>
        <section id='sec-1'>
            <h4>s Categories</h4>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <input type="radio" name='product' value={"hat"}/>
                <label htmlFor="hat">Hat</label>
              </div>
              <div className='flex gap-2'>
                <input type="radio" name='product' value={"T-shirt"}/>
                <label htmlFor="Tsgirt">Tshirt</label>
              </div>
            </div>
        </section>

        <section id='sec-2'>
          <h4>Fiter By price</h4>
           <input type="range" />
        </section>

        <section id='sec-3'>
          <h4>Sort by</h4>
          <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                    <input type="radio" name='Price' value={"Low"}/>
                    <label htmlFor="hat">Price (Lowest first)</label>
                  </div>
                  <div className='flex gap-2'>
                    <input type="radio" name='Price' value={"High"}/>
                    <label htmlFor="Tsgirt">Price (Highest First)</label>
              </div>
            </div>
        </section>
      </div>

      <div className='flex flex-col gap-10 mr-10' style={{flex:"8"}}>
        <img src={Banner} alt="" style={{height:"70%"}}/>
         <div>
            <Cards Data={Data}/>
        </div>
          
      </div>

    </div>
  )
}

export default Products