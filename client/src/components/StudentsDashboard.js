import React, { useContext, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { StudentsDataContext } from "./contexts/StudentsDataContext";
import StudentInput from "./StudentInput";

const StudentDashboard = ({ onShowEntries }) => {
  const { studentsData } = useContext(StudentsDataContext);
  console.log("studentDaata", studentsData);
  const [showForm, setShowForm] = useState(false);
  const onCloseForm = () => setShowForm(false);

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
      <h6>You have {studentsData.length} students</h6>
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

      {showForm && <StudentInput closeForm={onCloseForm} />}
    </>
  );
};
export default StudentDashboard;
