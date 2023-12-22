import React from 'react';
import { Link } from 'react-router-dom';

function Aside() {
  return (
    <aside>
      <h2>SHOP</h2>
      <div className="menu">
        <Link to={'/Shop'}>SUNGLASSES</Link>
        <a href="#">GLASSES</a>
      </div>
    </aside>
  );
}

export default Aside;
