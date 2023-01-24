import React from 'react'
import Anoucenment from '../components/Anoucenment'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'

// https://www.youtube.com/watch?v=c1xTDSIXit8&t=2244s

// 1:59
const Home = () => {
  return (
    <div>
      <Anoucenment></Anoucenment>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  )
}

export default Home
