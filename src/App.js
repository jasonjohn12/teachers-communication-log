import React from "react";
import Navigation from "./components/Layout/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col>
          <Dashboard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
