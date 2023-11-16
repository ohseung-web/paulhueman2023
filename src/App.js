// import * as images from './images';
import Header from './compoent/Header.js';
// import main from './images/paulhueman_main.jpg';
import Footer from './compoent/Footer.js';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path={'/Login'} element={<Login />} />
        </Routes>
      <main>
        <div className="bg"></div>
        {/* <Link to={'/Login'}>test</Link> */}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
