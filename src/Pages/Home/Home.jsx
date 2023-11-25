import React from 'react'
import Slider from '../../Slider/Slider'
import FeaturedProducts from '../../Compoenents/FeaturedProducts.jsx'
import HeroGrid from '../../Compoenents/HeroGrid'
import ContactUs from '../../Compoenents/ContactUs.jsx'
import Product from '../Product/Product.jsx'
const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts sectionName={"Featured Products"}/>
      <HeroGrid/>
      <FeaturedProducts sectionName={"Trending Products"}/>
      <ContactUs/>
   
    </div>
  )
}

export default Home