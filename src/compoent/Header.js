import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';
import cart from '../images/ico_basket.png';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="top">
        <div className="global_s">
          <h1>global shipping</h1>
          <div className="global_list">
            <a href="#">eng</a>
            <a href="#">chn</a>
          </div>
        </div>
        <h1>
          <Link to={'/'}>
            <img src={logo} alt="paulhumen" />
          </Link>
        </h1>
        <div className="right_box">
          <div className="my_page">
            <h2>마이페이지</h2>
            <div className="my_list">
              <a href="#">my account</a>
              <a href="#">orders</a>
              {/* <Link to={'/Login'} className="login">
                login
              </Link> */}
              <NavLink
                to={'/Login'}
                className={({ isActive }) => {
                  return isActive ? 'changeHeader' : 'login';
                }}
              >
                login
              </NavLink>
            </div>
          </div>
          <button type="button" id="cart">
            <img src={cart} alt="장바구니" />
          </button>
          <form action="#" method="post" id="search_f">
            <input type="text" placeholder="Search" />
            <button type="button" id="search_btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      </div>
      <nav>
        <ul className="gnb">
          <li>
            <a href="#">shop</a>
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
