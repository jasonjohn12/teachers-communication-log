import React from "react";
import StudentInput from "./Students/StudentInput";
import StudentDashboard from "./Students/StudentsDashboard";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container>
      <br />
      <br />
      <Row>
        <Col>
          <StudentInput />
        </Col>
        <Col>
          <StudentDashboard />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
