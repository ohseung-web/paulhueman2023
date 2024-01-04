import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';
import cart from '../images/ico_basket.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';

function Header() {
  let [glass] = useState(data);
  let { id } = useParams();

  //header_top부분 배경색 변경하기 위한 변수 지정
  const [isSwitched, setIsSwitced] = useState(false);
  // isSwitched가 false의 부정 => true
  const switchHandler = () => {
    setIsSwitced(true);
  };
  const switchOrigin = () => {
    setIsSwitced(false);
  };
  return (
    <header
      className=""
      style={{
        background: isSwitched ? '#fff' : 'transparent',
        height: isSwitched ? '170px' : 'max-content',
      }}
    >
      <div
        style={{
          background: isSwitched ? 'rgb(59,59,59)' : 'transparent',
          color: isSwitched ? '#fff' : '#111',
          height: isSwitched ? '40px' : '60px',
        }}
        className="top"
      >
        <div className="global_s">
          <h1>global shipping</h1>
          <div className="global_list">
            <a href="#">eng</a>
            <a href="#">chn</a>
          </div>
        </div>
        <div className="right_box">
          <div className="my_page">
            <h2>마이페이지</h2>
            <div className="my_list">
              <a href="#">my account</a>
              <a href="#">orders</a>
              <Link to={'/Login'} className="login" onClick={switchHandler}>
                login
              </Link>
              {/* <NavLink
                to={'/Login'}
                className={({ isActive }) => {
                  return isActive ? header.classList.add('change') : 'login';
                }}
              >
                login
              </NavLink> */}
            </div>
          </div>
          <Link
            to={`/Cart/${glass.id}`}
            type="button"
            id="cart"
            style={{
              filter: isSwitched ? 'invert(1)' : 'invert(0)',
            }}
          >
            <img src={cart} alt="장바구니" />
          </Link>
          <form action="#" method="post" id="search_f">
            <input
              type="text"
              placeholder="Search"
              style={{
                borderBottom: isSwitched ? '2px solid #fff' : '2px solid #111',
                color: isSwitched ? '#fff' : '#000',
              }}
            />
            <button
              type="button"
              id="search_btn"
              style={{
                filter: isSwitched ? 'invert(1)' : 'invert(0)',
              }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      </div>
      <h1>
        <Link
          to={'/'}
          onClick={switchOrigin}
          style={{
            position: isSwitched ? 'relative' : 'static',
            top: isSwitched ? '30px' : '0',
          }}
        >
          <img src={logo} alt="paulhumen" />
        </Link>
      </h1>
      <nav style={{ padditgTop: isSwitched ? '40xp' : '0' }}>
        <ul className="gnb">
          <li>
            <Link to={'/Shop'} onClick={switchHandler}>
              shop
            </Link>
            <ul className="sub">
              <li>
                <a href="#">sunglasses</a>
              </li>
              <li>
                <a href="#">glasses</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">brand</a>
          </li>
          <li>
            <a href="#">campaign</a>
            <ul className="sub">
              <li>
                <a href="#">celeb</a>
              </li>
              <li>
                <a href="#">lookbook</a>
              </li>
              <li>
                <a href="#">video</a>
              </li>
              <li>
                <a href="#">medeo</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">stockists</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
