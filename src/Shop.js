import React, { useState } from 'react';
import data from './data';
import './styles/Shop.css';
import { Link } from 'react-router-dom';

// 부모 함수
function Shop() {
  let [glass] = useState(data);
  let arr = [1, 2, 3];
  return (
    <div className="shopwrap">
      <aside>
        <h2>SHOP</h2>
        <div className="menu">
          <a href="#">SUNGLASSES</a>
          <a href="#">GLASSES</a>
        </div>
      </aside>
      <section>
        {glass.map((Element, i) => {
          return <Card glass={glass[i]} i={i + 1}></Card>;
        })}
      </section>
    </div>
  );
}

// 자식 함수
// 부모에 존재하는 변수르 자식 함수에 불러오는 방법
// props를 이용한다. 단, props는 부에서 -> 자식만 가능하다.
function Card(props) {
  return (
    <div className="item">
      <Link >
        <img
          src={process.env.PUBLIC_URL + '/img/origin_' + props.i + '.png'}
          alt="img"
        />
      </Link>
      <h4>{props.glass.title}</h4>
      <p>{props.glass.model}</p>
      <p>{props.glass.price}</p>
    </div>
  );
}

export default Shop;
