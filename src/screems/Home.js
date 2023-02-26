import React from 'react'
import Anoucenment from '../components/Anoucenment'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import { useDispatch } from 'react-redux';
import { deleteData_user } from "../redux/userRedux";
import { deleteData_products } from '../redux/cardRedux';
import { useSelector } from 'react-redux';

// https://www.youtube.com/watch?v=c1xTDSIXit8&t=2244s

// 1:59
const Home = () => {
  // const dispatch = useDispatch();
  // dispatch(deleteData_user()); 
  // dispatch(deleteData_products());

  return (
    <div>
      {/* <Anoucenment></Anoucenment> */}
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
