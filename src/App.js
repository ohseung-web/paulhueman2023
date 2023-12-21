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
import Detail from './Detail.js';
import List from './List.js';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route path={'/Login'} element={<Login />} />
          <Route path={'/Join'} element={<Join />} />
          <Route path={'/Shop'} element={<Shop />} />
          <Route path={'/Detail/:id'} element={<Detail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
