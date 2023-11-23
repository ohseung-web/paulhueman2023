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

function App() {
  return (
    <Router>
      <Header />
      <main>
        <switch>
          <Routes>
            <Route exact path={'/'} element={<Home />} />
          </Routes>
          <Routes>
            <Route path={'/Login'} element={<Login />} />
          </Routes>
          <Routes>
            <Route path={'/Join'} element={<Join />} />
          </Routes>
          {/* <div className="bg"></div> */}
        </switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
