import React, {useContext } from "react";
import { Navbar } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContext";

const Navigation = () => {
  const { authentication, toggleAuthentication } = useContext(AuthContext);

  let authButton = authentication.status ? "Sign Out" : "Sign In";

  const onToggleAuthentication = () => {
    toggleAuthentication(authentication.status)
  }
  return (
    <Navbar bg="light">
      <Navbar.Brand>Sinking Pirates</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text id="LoginButton"
          onClick={onToggleAuthentication}
          style={{ cursor: "pointer" }}
        >
          {authButton}
        </Navbar.Text>
        <Navbar.Text id="LoginButton"
          onClick={onToggleAuthentication}
          style={{ cursor: "pointer" }}
        >
          {authButton}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
