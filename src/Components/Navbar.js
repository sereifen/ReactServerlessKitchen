import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <button to="/" className="btn-floating halfway-fab waves-effect waves-light red">
          <Link to="/">Home</Link>
        </button>
        <button to="/Ingredients" className="brand-logo">
          <Link to="/Ingredients">Ingredients</Link>
        </button>
        <button to="/" className="brand-logo">
          <Link to="/">Shop</Link>
        </button>
        <button to="/" className="brand-logo">
          <Link to="/">Shop</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
