import React from 'react';
import './Shop.css';
const Shop = ({ title, description, url}) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{url}</p>
      <button>Go Shop!</button>
    </div>
  )
}
export default Shop;
