import React from 'react';
import '../style/Product.css';
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from 'styled-components';
import {Link} from 'react-router-dom'


export default function Product({ item }) {
  const Info = styled.div`
  
  `
  const Container = styled.div`
      &:hover ${Info}{
        opacity: 1;
      }
  `;


  const Icon = styled.div`
      &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
      }
  `

  console.log(item)
  return (
    <Container className='container-product'>
      <div className="circle"></div>
      <img className='img-product' src={item.img} alt="" />
      <Info className="info-product">
        <Icon className="icon">
          <ShoppingCartOutlined />
        </Icon>
        <Icon className="icon">
          <Link to={`/product/${item._id}`}>
          <SearchOutlined />
          </Link>
        </Icon>
        <Icon className="icon">
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      <div className="containerInfo">
        <div className="nameProduct">
          <span>{item.title}</span>
        </div>
        <div className="priceProduct">
          <span>$ {item.price}</span>
        </div>
      </div>
    </Container>
  )
}
