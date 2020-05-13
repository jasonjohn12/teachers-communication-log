import React,{useContext} from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { StudentsDataContext } from "./contexts/StudentsDataContext";

const StudentDashboard = ( ) => {
  const { studentsData } = useContext(StudentsDataContext);
 
  const students = studentsData.map(data => (
    <Card key={data.id}>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={data.id}>
          {data.firstName} {data.lastName}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={data.id}>
        <Card.Body>
          <div>Created At: {data.createdAt}</div>
        {data.notes.length > 1 && data.notes.map(note => (
         <div key={note.noteId}>Note: {note.note}</div>
       ))}
          {/* <div>Notes: {data.notes}</div> */}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  ));
  return (
    <React.Fragment>
      <Accordion defaultActiveKey="0" className="container">
        <label>
          Dashboard Count:{" "}
          <span className="student-data-count">{studentsData.length}</span>
        </label>
        {students}
      </Accordion>
    </React.Fragment>
  );
};
export default StudentDashboard;
