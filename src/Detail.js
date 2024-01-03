import React, { useState } from 'react';
import './styles/Detail.css';
import './styles/Shop.css';
import Aside from './Aside.js';
import cart from './images/cart.png';
import heart from './images/heart.png';
import data from './data.js';
import { Link, useParams } from 'react-router-dom';

function Detail() {
  let [glass] = useState(data);
  let { id } = useParams();

  let [number, setNumber] = useState(1);
  // id-1을 하는 이유는 id는 data의 key값이지만 [id]는 index값으로 변경되기때문에
  // index 번호는 0부터 시작하기 때문이다.
  glass[id - 1].quantity = number;
  //console.log(id);
  // minus, plus 버튼 클릭시 숫자 증가/감소 함수
  let handleIncrease = () => {
    setNumber((current) => current + 1);
    glass[id - 1].quantity = setNumber;
  };
  let handleDecrease = () => {
    if (number == 1) {
      alert('최소 구매수량 : 1 ');
      setNumber((current) => 1);
      glass[id - 1].quantity = setNumber;
    } else {
      setNumber((current) => current - 1);
      glass[id - 1].quantity = setNumber;
    }
  };

  // const handleInit = () => {
  //   setNumber((current) => 1);
  // };

  return (
    <div className="shopwrap">
      <Aside />
      <section>
        {/* img */}
        <div className="photo">
          <img
            src={process.env.PUBLIC_URL + '/img/detailImg/PHS4_' + id + '.png'}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + '/img/detailImg/PHS42_' + id + '.png'}
            alt=""
          />
          <img
            src={process.env.PUBLIC_URL + '/img/detailImg/PHS43_' + id + '.png'}
            alt=""
          />
        </div>
        {/* 상품 상세 정보 */}
        <aside className="info">
          <h1>PHS-1158A Col.4</h1>
          <p className="price">
            {glass[id - 1].price.toLocaleString(glass[id - 1].price) + 'won'}
          </p>
          <ul className="detail_info">
            <li>LENS WIDTH : {glass[id - 1].LENS}</li>
            <li>NOSE BRIDGE : {glass[id - 1].NOSE}</li>
            <li>FRAME SIDE : {glass[id - 1].FRAME}</li>
            <li>MATERIAL : {glass[id - 1].MATERIAL}</li>
          </ul>
          <form action="" method="post">
            <div className="frm_info">
              <button type="button" className="minus" onClick={handleDecrease}>
                -
              </button>
              <div id="num">{glass[id - 1].quantity}</div>
              <button type="button" className="plus" onClick={handleIncrease}>
                +
              </button>
              <Link to={`/Cart/${id}`} className="cart">
                <img src={cart} alt="장바구니" />
              </Link>
              {/* </a> */}
              <a href="#" className="like">
                <img src={heart} alt="관심상품" />
              </a>
            </div>
            <button type="submit" id="buy">
              BUY NOW
            </button>
          </form>
          {/* 네이버 간편구매 API 생략 */}
          {/* <div className="color_list">
            <h2>COLORS</h2>
            <div className="list">
              <a href="#">
                <img src="" alt="PHS-1158A COl.9" />
              </a>
              <a href="#">
                <img src="" alt="PHS-1158A COl.5" />
              </a>
            </div>
          </div> */}
        </aside>
      </section>
    </div>
  );
}

export default Detail;
