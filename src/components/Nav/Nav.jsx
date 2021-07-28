import React, { useState } from 'react';
import { useStateValue } from '../../context/contextProvider';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [appearedMenu, setAppearedMenu] = useState(false);
  const [{ cart, user, role }] = useStateValue();

  function menuAppearing() {
    setAppearedMenu(!appearedMenu);
  }
  function pageHaut() {
    window.scroll(0, 0);
  }

  return (
    <main>
      <div id="NavMenu">
        <Link className="nav_login" onClick={pageHaut} to="/Login">
          <img src="/src/img/userIcon.png" alt="panier" />
          <p className={user.length !== 0 ? 'online ' : 'offline'}></p>
        </Link>
        <Link className="nav_cart" onClick={pageHaut} to="/cart">
          <img src="/src/img/emptyCart.png" alt="panier" />
          <p className={cart.length !== 0 ? 'counter' : 'emptyCart'}>{cart.length}</p>
        </Link>
        <div id="menu-burger" onClick={menuAppearing} className={appearedMenu ? 'clicked' : ''}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <nav id="menu" className={appearedMenu ? 'clicked' : ''}>
        <Link onClick={pageHaut} to="/">
          Accueil
        </Link>
        <Link onClick={pageHaut} to="/shop/0">
          Boutique
        </Link>
        <Link onClick={pageHaut} to="/Kezako">
          Kezako
        </Link>
        {role === 2 && (
          <Link onClick={pageHaut} to="/Kezako">
            Admin
          </Link>
        )}
      </nav>
    </main>
  );
}

export default Nav;
