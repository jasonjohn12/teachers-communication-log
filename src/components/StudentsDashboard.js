import React from "react";
import { Accordion, Card } from "react-bootstrap";
const StudentDashboard = ({ students }) => {
  console.log(students);

  // const studentData = students.map(std => (
  //   <div className="card" key={std.id}>
  //     <div className="card-header" id={`heading${std.id}`}>
  //       <h5 className="mb-0">
  //         <button
  //           className="btn btn-link"
  //           data-toggle="collapse"
  //           data-target="#collapseOne"
  //           aria-expanded="true"
  //           aria-controls="collapseOne"
  //         >
  //           {std.firstName} {std.lastName}
  //         </button>
  //       </h5>
  //     </div>

  //     <div
  //       id={`heading${std.id}`}
  //       className="collapse show"
  //       aria-labelledby={`heading${std.id}`}
  //       data-parent="#accordion"
  //     >
  //       <div className="card-body">
  //         <div>Contacted: {std.isContacted ? "True" : "False"}</div>
  //         <div>Notes: {std.notes}</div>
  //         <div>Created At: {std.createdDate.toString()}</div>
  //       </div>
  //     </div>
  //   </div>
  // ));
  return (
    <React.Fragment >
      <Accordion defaultActiveKey="0" className="container">
      <h3>Dashboard</h3>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </React.Fragment>
  );
};
export default StudentDashboard;
