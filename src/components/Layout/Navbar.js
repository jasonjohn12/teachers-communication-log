import React from "react";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";

const Navigation = ({ user, onLogOut, onLogin }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Sinking Pirates</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          {user ? (
            <Button id="LoginButton" variant="outline-info" onClick={onLogOut}>
              {user && user.name}
            </Button>
          ) : (
            <>
              <FormControl
                type="text"
                placeholder="UserName"
                className="mr-sm-2"
              />
              <FormControl
                type="text"
                placeholder="Password"
                className="mr-sm-2"
              />
              <Button variant="outline-info" onClick={onLogin}>
                Login
              </Button>
            </>
          )}
        </Form>
      </Navbar>
    </>
  );
};
export default Navigation;
