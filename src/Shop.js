import React, { useState } from 'react';
import data from './data';

function Shop() {
  let [glass] = useState(data);

  return (
    <div>
      {glass.map((a, i) => {
        return <Card glass={glass[i]} i={i + 1}></Card>;
      })}
    </div>
  );
}

function Card(props) {
  return (
    <div>
      <img
        src={
          'https://github.com/ohseung-web/img/raw/main/origin_' +
          props.i +
          '.png'
        }
        width="10%"
      />
      <h4>{props.glass.title}</h4>
      <p>{props.glass.content}</p>
      <p>{props.glass.price}</p>
    </div>
  );
}
export default Shop;
