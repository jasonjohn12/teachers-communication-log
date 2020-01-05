import React, { useState } from "react";

const Navbar = () => {
  const [isAuthenticated, setAuthentication] = useState(false);
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              {isAuthenticated ? (
                <a className="nav-link" href="#">
                  Sign Out
                </a>
              ) : (
                <a className="nav-link" href="#">
                  Sign In
                </a>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
    // <nav class="navbar">
    //   <h3>SunnyOnes</h3>
    //   <ul class="nav-links">
    //     <li class="nav-item">
    //       <a href="#">Sign In</a>
    //     </li>
    //     <li class="nav-item">
    //       <a href="#">Forum</a>
    //     </li>
    //     <li class="nav-item">
    //       <a href="#">News</a>
    //     </li>
    //     <li class="nav-item">
    //       <a href="#">Sign in</a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;

// // <nav className="Navbar ">
// //   <h3>SunnyOnes</h3>
// //   <ul className="">
// //     <li>Sign In</li>
// //   </ul>
// // </nav>
