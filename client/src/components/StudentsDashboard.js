import React, { useContext } from "react";
import { Accordion, Card, Button, Table } from "react-bootstrap";
import { StudentsDataContext } from "./contexts/StudentsDataContext";

const StudentDashboard = () => {
  const { studentsData } = useContext(StudentsDataContext);

  // const students = studentsData.map((data) => (
  // <Card key={data.id}>
  //   <Card.Header>
  //     <Accordion.Toggle as={Button} variant="link" eventKey={data.id}>
  //       {data.firstName} {data.lastName}
  //     </Accordion.Toggle>
  //   </Card.Header>
  //   <Accordion.Collapse eventKey={data.id}>
  //     <Card.Body>
  //       <div>Created At: {data.createdAt}</div>
  //       {data.notes.length > 1 &&
  //         data.notes.map((note) => (
  //           <div key={note.noteId}>Note: {note.note}</div>
  //         ))}
  //       {/* <div>Notes: {data.notes}</div> */}
  //     </Card.Body>
  //   </Accordion.Collapse>
  // </Card>
  //));

  const renderStudents = (student, index) => (
    <tr key={index}>
      <td>{student.firstName}</td>
      <td>{student.grade}</td>
      {/* <td>{person.age}</td> */}
    </tr>
  );
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {studentsData.map(renderStudents)}
        {/* <tr>
          <td>Jason John</td>
          <td>95%</td>
        </tr>
        <tr>
          <td>Jimmy John</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>Kenny John</td>
          <td>85%</td>
        </tr> */}
      </tbody>
    </Table>
    // <React.Fragment>
    //   <Accordion defaultActiveKey="0" className="container">
    //     <label>
    //       Dashboard Count:{" "}
    //       <span className="student-data-count">{studentsData.length}</span>
    //     </label>
    //     {students}
    //   </Accordion>
    // </React.Fragment>
  );
};
export default StudentDashboard;
