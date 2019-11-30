import React, { useState } from "react";
import { Navbar } from "react-bootstrap";

const Navigation = () => {
  const [isAuthenticated, setAuthentication] = useState(false);
  return (
    <Navbar>
      <Navbar.Brand href="#home">SunnyOnes</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {isAuthenticated ? (
            <a href="#login">Sign Out </a>
          ) : (
            <a href="#login">Sign In </a>
          )}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
