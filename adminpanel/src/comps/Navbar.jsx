import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>LOGO</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Posts</Link>
        </li>
        <li>
          <Link to="/langs">Langs</Link>
        </li> 
        <li>
          <Link to="/anims">Anims</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
