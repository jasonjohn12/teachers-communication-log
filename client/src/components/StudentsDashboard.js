import React, { useContext, useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { StudentsDataContext } from "./contexts/StudentsDataContext";
import StudentInput from "./StudentInput";

const StudentDashboard = ({ onShowEntries }) => {
  console.log("props", onShowEntries);
  const { studentsData } = useContext(StudentsDataContext);

  const [showForm, setShowForm] = useState(false);

  const renderStudents = (student, index) => (
    <tr
      key={index}
      onClick={() => onShowEntries(student)}
      style={{
        cursor: "pointer",
        backgroundColor: student.grade < 59.5 ? "rgba(247, 27, 27, 0.15)" : "",
      }}
    >
      <td>{student.firstName}</td>
      <td>{student.grade}</td>
    </tr>
  );
  return (
    <>
      <h3>Dashboard</h3>
      <Table responsive hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>{studentsData.map(renderStudents)}</tbody>
      </Table>
      <Button onClick={() => setShowForm(!showForm)}>Add Student</Button>

      {showForm && <StudentInput />}
    </>
  );
};
export default StudentDashboard;
