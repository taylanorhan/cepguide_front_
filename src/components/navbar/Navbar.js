import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { GlobalContext } from '../../context/GlobalState';

const Navbar = () => {
  const { cart, user, setUser } = useContext(GlobalContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
    setSearchQuery('');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <Link to="/Home" className="logo" onClick={handleMenuClick}>
        <h2 style={{ fontSize: '24px' }}>
          <span style={{ fontSize: '34px' }}>C</span>ep
          <span style={{ fontSize: '34px' }}>G</span>uide
        </h2>
      </Link>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">🔍</button>
      </form>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/Home" onClick={handleMenuClick}>
          <li>Home</li>
        </Link>
        <Link to="/Excursions" onClick={handleMenuClick}>
          <li>Excursions</li>
        </Link>
        <Link to="/AboutUs" onClick={handleMenuClick}>
          <li>About Us</li>
        </Link>
        <Link to="/cart" onClick={handleMenuClick}>
          <li>
            &#128722;{' '}
            <span className="card-count" style={{ color: 'red' }}>
              ({cart.length})
            </span>
          </li>
        </Link>
        <Link to="/orders" onClick={handleMenuClick}>
          <li>Orders</li>
        </Link>
        {user ? (
          <>
            <Link to="/profile" onClick={handleMenuClick}>
              <li>Profile</li>
            </Link>
            <li onClick={() => { handleLogout(); handleMenuClick(); }} style={{ cursor: 'pointer' }}>Logout</li>
          </>
        ) : (
          <Link to="/login" onClick={handleMenuClick}>
            <li>Login</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;

