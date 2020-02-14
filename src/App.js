import React, { useState, useContext } from "react";
import Navigation from "./components/Layout/Navbar";
import StudentInput from "./components/StudentInput";
import StudentDashboard from "./components/StudentsDashboard";
import uuid from "uuid/v4";
import { Container, Row, Col } from "react-bootstrap";
import {AuthContext} from "./components/contexts/AuthContext";
import LandingPage from "./components/Layout/LandingPage";

function App() {
  const [studentsData, setStudentsData] = useState([]);

  const addStudent = (firstName, lastName, createdDate, notes) => {
    setStudentsData([
      ...studentsData,
      { id: uuid(), firstName, lastName, createdDate, notes }
    ]);
  };

  const logInUser = () => {
    console.log('do stuff')
  }
  const { authentication } = useContext(AuthContext);
  let isAuthenticated = authentication.status;
  return (
    <React.Fragment>
      <Row>
        <Col style={{ marginBottom: "15px" }}>
          <Navigation />
        </Col>
      </Row>
      {isAuthenticated && isAuthenticated ? (
        <Container>
          <Row>
            <Col>
              <StudentInput addStudent={addStudent} />
            </Col>
            <Col>
              <StudentDashboard students={studentsData} />
            </Col>
          </Row>
        </Container>
      ) : <LandingPage />}
    </React.Fragment>
  );
}

export default App;
