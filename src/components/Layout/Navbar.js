import React, {useState} from "react";
import { Navbar } from "react-bootstrap";

const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Navbar bg="light">
    <Navbar.Brand>Sinking Pirates</Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      {isAuthenticated === true ? "Logout" : "Sign In"}
    </Navbar.Text>
  </Navbar.Collapse>
  </Navbar>
  );
};
export default Navigation;
