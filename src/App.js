import React, { useState } from "react";
import Navigation from "./components/Layout/Navbar";
import StudentInput from "./components/StudentInput";
import StudentDashboard from "./components/StudentsDashboard";
import uuid from "uuid/v4";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  const [studentsData, setStudentsData] = useState([]);

  const addStudent = (firstName, lastName, createdDate, notes) => {
    setStudentsData([
      ...studentsData,
      { id: uuid(), firstName, lastName, createdDate, notes }
    ]);
  };
  return (
    <React.Fragment>
      <Row >
      <Col style={{marginBottom: "15px"}}>
      <Navigation />
      </Col>
      </Row>
      <Container >
        <Row> 
          <Col>
            <StudentInput addStudent={addStudent} />
          </Col>
          <Col>
            <StudentDashboard students={studentsData} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
