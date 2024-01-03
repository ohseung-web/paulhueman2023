import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './data';
import './styles/Cart.css';

function Cart() {
  let [glass] = useState(data);
  let { id } = useParams();
  // let { number } = useParams();
  console.log('cart :' + id);
  return (
    <div className="cartlist">
      {/* <img src={process.env.PUBLIC_URL + '/img/origin_' + id + '.png'} alt="" /> */}
      <img src={process.env.PUBLIC_URL + '/img/origin_' + id + '.png'} alt="" />
      <p>{glass[id - 1].quantity}</p>
    </div>
  );
}

export default Cart;
