import React, {useState} from "react";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";

const Navigation = ({ user, onLogOut, onLogin }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onHandleLogin = () => {
    if(userName !== "" && password !== "") {
      onLogin(userName, password)
    }
  }
  const onHandleLogOut = () => {
    setUserName('');
    setPassword('');
    onLogOut();
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Sinking Pirates</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          {user ? (
            <Button id="LoginButton" variant="outline-info" onClick={onHandleLogOut}>
              {user && user.firstName}
            </Button>
          ) : (
            <>
              <FormControl
                type="text"
                placeholder="UserName"
                onChange={e => setUserName(e.target.value)}
                value={userName}
                className="mr-sm-2"
              />
              <FormControl
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                className="mr-sm-2"
              />
              <Button variant="outline-info" onClick={onHandleLogin}>
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
