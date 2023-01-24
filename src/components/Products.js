import React, { useEffect, useState } from 'react';
import { popularProducts } from '../data';
import '../style/Products.css';
import Product from './Product';
import axios from 'axios';

export default function Products({ cat, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat
          ? `http://localhost:5000/api/products?category=${cat}`
          : `http://localhost:5000/api/products`);
        setProducts(res.data); // we save all the products taht we take from BACKEND
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();
  }, [cat]); // every time that "cat" change it si going to run the funtion inside useEffect

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      ))
    )
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort])


  return (
    <div className='container-products'>
      {cat
        ? filteredProducts.map((item) =>
          <Product item={item} key={item.id} />
        )
        : products.slice(0, 8).map((item) =>
          <Product item={item} key={item.id} />
        )}
    </div>
  )
}
