import React, { useState } from 'react';
import Anoucenment from '../components/Anoucenment';
import Navbar from '../components/Navbar';
import '../Style_Screem/ProductList.css';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';


const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('newest');

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }

    return (
        <div className='container-ScreemListProdcut'>
            <Navbar></Navbar>
            <Anoucenment></Anoucenment>
            <h1 className="titleProductList">{cat}</h1>
            <div className="filterContainer">
                <div className="filter">
                    <span className="filterText">Filter Products:</span>
                    <select name="color" id="" onChange={handleFilters}>
                        <option value="" disabled>Color</option>
                        <option value="White">White</option>
                        <option value="Black">Black</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                    </select>
                    <select name="size" id="" onChange={handleFilters}>
                        <option value="" disabled>Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>

                <div className="filter">
                    <span className="filterText">Short Products:</span>
                    <select name="" id="" onChange={(e)=> setSort(e.target.value)}>
                        <option value="newest" selected>Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products cat={cat} filters={filters} sort={sort} />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default ProductList
