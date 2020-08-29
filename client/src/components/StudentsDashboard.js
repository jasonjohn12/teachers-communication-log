import React, { useState } from "react";
import { Button, Table, Spinner } from "react-bootstrap";
import StudentInput from "./StudentInput";
import moment from "moment";

const StudentDashboard = ({ onShowEntries, studentsData, isLoading }) => {
  const [showForm, setShowForm] = useState(false);

  const onCloseForm = () => setShowForm(false);

  const checkRecentDate = (student) => {
    var dates = [];
    student.entries.forEach((element) => {
      if (element.contacted === true) {
        dates.push(moment(element.datesContacted).format("MM/DD/YYYY"));
      }
    });

    return dates.join(", ");
  };

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
      <td>{checkRecentDate(student)}</td>
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
export default React.memo(StudentDashboard);
