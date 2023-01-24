import React from 'react';
import { categories } from '../data';
import CategoryItems from './CategoryItems';
import '../style/Categories.css'


const Categories = () => {
  return (
    <div className='container-cateories'>
        {categories.map((item) => 
            <CategoryItems item = {item} key={item.id}></CategoryItems>
        )}
      
    </div>
  )
}

export default Categories
