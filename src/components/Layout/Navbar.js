import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div>Communication Tracker</div>

      <ul className={classes.navbarLinks}>
        <li>Sign In</li>
      </ul>
    </nav>
  );
};

export default Navbar;
