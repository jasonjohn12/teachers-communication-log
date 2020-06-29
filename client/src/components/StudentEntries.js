import React, { useEffect, useState } from "react";
import moment from "moment";
import { getEntriesByStudentId } from "../api/entries";
import { Button, Table } from "react-bootstrap";
import EntryForm from "./EntryForm";

const StudentEntries = ({ onShowEntries, student }) => {
  const [entries, setEntries] = useState([]);
  const [showEntryForm, setShowEntryForm] = useState(false);
  useEffect(() => {
    getEntriesByStudentId(student.studentId).then((entry) =>
      setEntries(entry.data)
    );
  }, [student.studentId]);

  useEffect(() => {
    getEntriesByStudentId(student.studentId).then((entry) =>
      setEntries(entry.data)
    );
  }, [entries]);

  const onAddNewEntry = (studentId, notes, contacted) => {
    console.log(studentId, notes, contacted);
    const entry = {
      studentId,
      notes,
      contacted,
    };
    setEntries([...entries, entry]);
  };

  const onCloseEntryForm = () => setShowEntryForm(false);

  const renderEntries = (entry, index) => (
    <tr
      key={index}
      onClick={() => onShowEntries(student)}
      style={{
        cursor: "pointer",
      }}
    >
      <td>{entry.contacted.toString()}</td>
      <td>{moment(entry.datesContacted).format("MM/DD/YYYY")}</td>

      <td>{entry.notes}</td>
    </tr>
  );
  return (
    <div>
      <h4
        style={{ color: "lightBlue", cursor: "pointer" }}
        onClick={onShowEntries}
      >
        Back
      </h4>
      <h3>
        {student.firstName + " " + student.lastName + " " + student.grade}{" "}
      </h3>
      <Table responsive hover>
        <thead>
          <tr>
            <th>Contacted</th>
            <th>Date Contacted</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{entries.map(renderEntries)}</tbody>
      </Table>
      <Button onClick={() => setShowEntryForm(!showEntryForm)}>
        Add New Entry
      </Button>
      {showEntryForm && (
        <EntryForm
          {...student}
          closeForm={onCloseEntryForm}
          addedNewEntry={onAddNewEntry}
        />
      )}
    </div>
  );
};

export default StudentEntries;
