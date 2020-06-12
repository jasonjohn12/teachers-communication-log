import React, { useContext, useState, useEffect } from "react";
import Navigation from "./components/Layout/Navbar";
import Dashboard from "./components/Dashboard";
import { Container, Row, Col, Spinner } from "react-bootstrap";

import { UserContext } from "./components/contexts/UserContext";
import LandingPage from "./components/Layout/LandingPage";

function App() {
  const { user, logout, loginContext } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(user);

  //let isAuthenticated = user !== null ? true : false;

  useEffect(() => {
    user && user ? setIsAuthenticated(true) : setIsAuthenticated(false);
    if (isAuthenticated) setIsLoading(false);
  }, [user, isAuthenticated]);

  const onLogOut = () => {
    logout();
  };

  const onLogin = (username, password) => {
    setIsLoading(true);
    loginContext(username, password);
  };

  return (
    <>
      <Row>
        <Col style={{ marginBottom: "15px" }}>
          <Navigation user={user} onLogOut={onLogOut} onLogin={onLogin} />
        </Col>
      </Row>
      {isAuthenticated && isAuthenticated ? (
        <Container>
          {isLoading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <Dashboard />
          )}
        </Container>
      ) : (
        <LandingPage />
      )}
    </>
  );
}

export default App;
