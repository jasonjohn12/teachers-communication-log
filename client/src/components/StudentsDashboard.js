import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Button, Table, Spinner } from "react-bootstrap";
import { StudentsDataContext } from "./contexts/StudentsDataContext";
import StudentInput from "./StudentInput";

const StudentDashboard = ({ onShowEntries, studentsData, isLoading }) => {
  const [showForm, setShowForm] = useState(false);
  // const [studentsData, setStudentsData] = useState([]);

  const onCloseForm = () => setShowForm(false);

  const renderStudents = (student, index) => (
    <tr
      key={index}
      onClick={() => {
        onShowEntries(student);
      }}
      style={{
        cursor: "pointer",
        backgroundColor: student.grade < 59.5 ? "rgba(247, 27, 27, 0.15)" : "",
      }}
    >
      <td>{student.firstName}</td>
      <td>{student.grade}</td>
      <td>
        {student.entries.filter((x) => x.contacted === true).length > 0
          ? "Contacted"
          : "No Contact"}
      </td>
    </tr>
  );

  return (
    <>
      <h3>Dashboard</h3>
      <h6>You have {studentsData.length} students</h6>

      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <Table responsive hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
              <th>Parent Contacted</th>
            </tr>
          </thead>
          <tbody>{studentsData.map(renderStudents)}</tbody>
        </Table>
      )}
      {!showForm && (
        <Button onClick={() => setShowForm(!showForm)}>Add Student</Button>
      )}

      {showForm && <StudentInput closeForm={onCloseForm} />}
    </>
  );
};
export default StudentDashboard;
