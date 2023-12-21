import React, { useState, useTransition } from 'react';
import data from './data';
import './styles/Shop.css';
import { Link } from 'react-router-dom';
import Detail from './Detail';

// 부모 함수
function List() {
  let [glass] = useState(data);

  return (
    <div className="sectionWrap">
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
// props를 이용한다. 단, props는 부모에서 -> 자식만 가능하다.
function Card(props) {
  // 이미지 마우스 오버할때 이미지 변경하기 위한 변수
  let [isHover, setHover] = useState(false);
  const handlerMouseover = () => {
    setHover(true);
  };
  const handlerMouseout = () => {
    setHover(false);
  };
  return (
    <div className="item">
      <Link to={'/Shop/Detail'}>
        <img
          onMouseOver={handlerMouseover}
          onMouseOut={handlerMouseout}
          src={
            isHover
              ? process.env.PUBLIC_URL + '/img/info2_' + props.i + '.png'
              : process.env.PUBLIC_URL + '/img/origin_' + props.i + '.png'
          }
          alt="img"
        />
      </Link>
      <h4>{props.glass.title}</h4>
      <p>{props.glass.model}</p>
      <p>{props.glass.price.toLocaleString(props.glass.price) + ' won'}</p>
    </div>
  );
}

export default List;
