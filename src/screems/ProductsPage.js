import React, { useState, useEffect } from 'react';
import Anoucenment from '../components/Anoucenment';
import Navbar from '../components/Navbar';
import '../Style_Screem/ProductsPage.css';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import Footer from '../components/Footer';
import axios from 'axios';
import Product from '../components/Product';
import Spinner from '../components/Spinner';
import { publicRequest } from '../requestMethods';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cat, setCat] = useState('')
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)

    // useEffect(() => {
    //     setFilteredProducts(products)
    // }, [products]);

    useEffect(() => {
        if (sort === "newest") {
            setProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort])


    // useEffect(() => {
    //     let aux = 1;
    //     const getProducts = async () => {

    //         try {
        // this is hpw it ewaas before
    //             const res = await axios.get(`http://localhost:5000/api/products`);
    //             setProducts(res.data); // we save all the products taht we take from BACKEND
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getProducts();
    // });

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(`/products`);
                setProducts(res.data); // we save all the products taht we take from BACKEND
            } catch (error) {
                console.log(error)
            }
        }
        getProducts();
    }, []);

    useEffect(() => {
        //     // this is the eprocecss to get the categories from "products"
        //     let greaterTen2 = products.map(item => item.categories);
        //     console.log(products);
        //     console.log(greaterTen2);
        //     const categoriesData = [].concat(...greaterTen2);
        //     console.log(categoriesData);
        //    const dataaa = [...new Set(categoriesData)];
        //    console.log (dataaa)
        // this is a resume of the process to get the categories from "products"
        const dataCategories = [...new Set([].concat(...products.map(item => item.categories)))];
        setCategories(dataCategories)
        console.log(categories)
    }, [products]);


    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(`/products?category=${cat}`);
                setProducts(res.data); // we save all the products taht we take from BACKEND
            } catch (error) {
                console.log(error)
            }
        }
        getProducts();
    }, [cat]);

    return (
        <div className='container-ScreemListProdcut'>
            <Navbar></Navbar>
            <Anoucenment></Anoucenment>
            <h1 className="titleProductList">Category: {cat ? cat : ''}</h1>
            <div className="filterContainer">
                <div className="filter">
                    <span className="filterText">Filter Products:</span>
                    <select name="color" id="" onChange={(e) => setCat(e.target.value)}>
                        <option value="" disabled>Color</option>
                        {categories.map(val => (
                            <option value={val}>{val}</option>
                        ))}
                        {/* <option value="White">White</option>
                        <option value="Black">Black</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option> */}
                    </select>

                </div>
                {/* <div className="filter">
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
                </div> */}

                {/* <div className="filter">
                    <span className="filterText">Short Products:</span>
                    <select name="" id="" onChange={(e)=> setSort(e.target.value)}>
                        <option value="newest" selected>Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </select>
                </div> */}
            </div>
            {/* <Products cat={cat} filters={filters} sort={sort} /> */}
            <div className="container-filter-products">
                <div className="filters">
                    {/* <div className="filterItem">
                        <h2>Categories</h2>
                        <div className="inputItem">
                            <input type="checkbox" id='1' value={1} />
                            <label htmlFor="1">Shoes</label>
                        </div>
                        <div className="inputItem">
                            <input type="checkbox" id='2' value={2} />
                            <label htmlFor="2">women</label>
                        </div>
                        <div className="inputItem">
                            <input type="checkbox" id='3' value={3} />
                            <label htmlFor="3">men</label>
                        </div>
                        {categories.map(item => (
                            <div className="inputItem">
                                <input type="radio" id={item+'1'} value={item} name={item}  />
                                <label for={item+'1'}>{item}</label>
                            </div>
                        ))}
                    </div> */}
                    <div className="filterItem">
                        <h2>Sort by</h2>
                        <div className="inputItem">
                            <input type="radio" id='newest' value="newest" name='price' onChange={(e) => setSort('newest')} />
                            <label htmlFor="newest">Newest</label>
                        </div>
                        <div className="inputItem">
                            <input type="radio" id='asc' value="asc" name='price' onChange={(e) => setSort("asc")} />
                            <label htmlFor="asc">Price (Lower First)</label>
                        </div>
                        <div className="inputItem">
                            <input type="radio" id='desc' value="desc" name='price' onChange={(e) => setSort('desc')} />
                            <label htmlFor="desc">Price (Lower First)</label>
                        </div>
                    </div>
                    <div className="filterItem">
                        <h2>Filter By Price</h2>
                        <div className="inputItem">
                            <span>0</span>
                            <input type="range" onChange={(e) => setMaxPrice(e.target.value)} min={0} max={1000} />
                            <span>{maxPrice}</span>
                        </div>
                    </div>

                </div>
                <div className='container-products'>
                    {products.length <= 0 ? <Spinner /> : (products.slice(0, 8).map((item) =>
                        <Product item={item} key={item.id} />
                    ))}
                </div>
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default ProductsPage
