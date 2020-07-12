import React, { useEffect, useState } from "react";
import { createNewEntry } from "../api/entries";
import moment from "moment";
import { getEntriesByStudentId } from "../api/entries";
import { Button, Spinner } from "react-bootstrap";
import EntryForm from "./EntryForm";
import "antd/dist/antd.css";
import { Table } from "antd";

const StudentEntries = ({ onShowEntries, student }) => {
  const [entries, setEntries] = useState([]);
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEntriesByStudentId(student.studentId).then((res) =>
      setEntries(
        res.data.map((row) => ({
          studentId: row.studentId,
          contacted: row.contacted ? "Yes" : "No",
          datesContacted: moment(row.datesContacted).format("MM/DD/YYYY"),
          notes: row.notes,
          key: row.entryId,
          entryId: row.entryId,
        }))
      )
    );
    setLoading(false);
  }, []);

  const onAddNewEntry = (studentId, notes, contacted) => {
    setLoading(true);
    console.log(studentId, notes, contacted);
    const entry = {
      studentId,
      datesContacted: new Date(),
      notes,
      contacted,
    };
    createNewEntry(entry, studentId).then((response) => {
      setLoading(false);
      if (response.status === 201) {
        const returnEntry = {
          contacted: response.data.contacted ? "Yes" : "No",
          datesContacted: moment(response.data.datesContacted).format(
            "MM/DD/YYYY"
          ),
          notes: response.data.notes,
        };
        setEntries([...entries, returnEntry]);
      }
    });
    setEntries([...entries, entry]);
  };

  const onCloseEntryForm = () => setShowEntryForm(false);

  const columns = [
    {
      title: "Parent Contacted",
      dataIndex: "contacted",
    },
    {
      title: "Date Entered",
      dataIndex: "datesContacted",
      sorter: (a, b) => a.datesContacted.localeCompare(b.datesContacted),
    },
    {
      title: "Notes",
      dataIndex: "notes",
    },
  ];
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
      {loading ? <Spinner /> : <Table dataSource={entries} columns={columns} />}
      {!showEntryForm && (
        <Button onClick={() => setShowEntryForm(!showEntryForm)}>
          Add New Entry
        </Button>
      )}
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
