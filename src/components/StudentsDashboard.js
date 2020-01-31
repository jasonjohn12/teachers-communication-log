import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const StudentDashboard = ({ students }) => {
  const studentData = students.map(data => (
    <Card key={data.id}>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={data.id}>
          {data.firstName} {data.lastName}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={data.id}>
        <Card.Body>
          <div>Created At: {data.createdDate}</div>
          <div>Notes: {data.notes}</div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  ));
  return (
    <React.Fragment>
      <Accordion defaultActiveKey="0" className="container">
        <label>Dashboard Count: {studentData.length}</label>
        {studentData}
      </Accordion>
    </React.Fragment>
  );
};
export default StudentDashboard;
