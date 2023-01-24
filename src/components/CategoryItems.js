import React from 'react';
import '../style/CategoryItems.css';
import { Link } from "react-router-dom";

const CategoryItems = ({ item }) => {
  return (
    <div className='container-categoryItem'>
      <Link to={`/products/${item.cat}`}>
        <img className='img-categoryItems' src={item.img} alt="" />
        <div className="info-categoryItems">
          <h4 className="title-categoryItems">{item.title}</h4>
          <button className='btn-categoryItems'>show now</button>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItems
