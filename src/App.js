// import * as images from './images';
import Header from './compoent/Header.js';
// import main from './images/paulhueman_main.jpg';
import Footer from './compoent/Footer.js';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import Login from './Login';
import Join from './Join';
import Home from './Home';
import Postcode from './Postcode';
import { useState } from 'react';
import Shop from './Shop.js';

function App() {
  const [isAllVaild, setIsAllVaild] = useState(false);
  const [currentRoute, setCurrent] = useState('/');
  const routeChange = (newRoute) => {
    setCurrent(newRoute);
  };

  return (
    <Router>
      <div className="heaer_wrap">
        {currentRoute === '/' && <Header />}
        {currentRoute === '/Login' ? (
          ''
        ) : (
          <Header className={`${isAllVaild ? '' : 'top_sub'}`} />
        )}
        {/* <Header className={`${isAllVaild ? '' : 'top_sub'}`} /> */}
      </div>

      {/* <Header /> */}
      <main>
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route path={'/Login'} element={<Login />} />
          <Route path={'/Join'} element={<Join />} />
          <Route path={'/Shop'} element={<Shop />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
