import React from 'react';
import './Shops.css';
import Shop from '../Shop/Shop';

const Shops = ({shops}) => {
const shopCards = shops.map(shop => {
  return(
    <Shop
      title={shop.title}
      description={shop.description}
      url={shop.url}
      id={shop.id}
      key={shop.id}
      />
  )
})
  return (
    <div className='shops-container'>
      {shopCards}
    </div>
  )
}

export default Shops;
