import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
        {/* nav */}
        <ul className="nav_links flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/">Pages</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Logo */}
        <div className="nav_logo text-2xl font-bold">
          <Link to="/">
            Beautera<span className="text-red-500">.</span>
          </Link>
        </div>

        {/* Nav Icons  */}
        <div className="nav_icons relative flex space-x-4">
          {/* search */}
          <span>
            <Link to="/search">
              <i className="ri-search-line text-xl"></i>
            </Link>
          </span>

          {/* shopping bag */}
          <span>
            <button className="hover:text-primary">
              <i className="ri-shopping-bag-line text-xl"></i>
              <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">0</sup>
            </button>
          </span>

          {/* user */}
          <span>
            <Link to="/login">
              <i className="ri-user-line text-xl"></i>
            </Link>
          </span>
        </div>
      </nav>
    </header>
  );
};


export default Navbar;