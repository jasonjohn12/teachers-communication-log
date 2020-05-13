import React, { useState } from "react";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";

const Navigation = ({ user, onLogOut, onLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogOut = () => {
    setUserName("");
    setPassword("");
    onLogOut();
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submittingFOrm");
    if (userName  && password ) {
      onLogin(userName, password);
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Sinking Pirates</Navbar.Brand>
        <Nav className="mr-auto"></Nav>

        {user ? (
          <Button
            id="logoutButton"
            variant="outline-info"
            onClick={onHandleLogOut}
          >
            {user && user.firstName}
          </Button>
        ) : (
          <Form inline onSubmit={submitForm}>
            <FormControl
              type="text"
              placeholder="Username"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mr-sm-2"
            />

            <FormControl
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mr-sm-2"
            />

            <Button variant="primary" type="submit" id="loginButton">
              Login
            </Button>
          </Form>
        )}
      </Navbar>
    </>
  );
};
export default Navigation;
