import React, { useEffect, useState } from "react";
import { createNewEntry } from "../api/entries";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import moment from "moment";
import { getEntriesByStudentId } from "../api/entries";
import { Button, Spinner } from "react-bootstrap";
import EntryForm from "./EntryForm";
import BootstrapTable from "react-bootstrap-table-next";

import cellEditFactory from "react-bootstrap-table2-editor";

//import "antd/dist/antd.css";
//import { Table } from "antd";

const StudentEntries = ({ onShowEntries, student, studentsData }) => {
  const [entries, setEntries] = useState([]);
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("student", student);
    console.log("entries", entries);
    // console.log("entires", studentsData);
    // getEntriesByStudentId(student.studentId).then((res) =>
    setEntries(
      student.entries.map((row) => ({
        keyField: row.entryId,
        studentId: row.studentId,
        contacted: row.contacted ? "Yes" : "No",
        datesContacted: moment(row.datesContacted).format("MM/DD/YYYY"),
        notes: row.notes,
        // entryId: row.entryId,
      }))
    );
    //  );
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
    // {
    //   dataField: "entryId",
    //   text: "Product ID",
    // },
    {
      text: "Parent Contacted",
      dataField: "contacted",
      //key:
    },
    //   {
    // text: "Date Entered",
    //  dataField: "datesContacted",
    //  key: "entryId",
    //    sort: true,
    //  },
    {
      text: "Date(s) of Contact",
      dataField: "datesContacted",
      key: "entryId",
    },
    {
      text: "Notes",
      dataField: "notes",
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
      {loading ? (
        <Spinner />
      ) : (
        <BootstrapTable
          keyField="keyField"
          data={entries}
          columns={columns}
          cellEdit={cellEditFactory({
            mode: "click",
            onStartEdit: (row, column, rowIndex, columnIndex) => {
              console.log("start to edit!!!");
            },
            beforeSaveCell: (oldValue, newValue, row, column) => {
              console.log("Before Saving Cell!!");
            },
            afterSaveCell: (oldValue, newValue, row, column) => {
              console.log("After Saving Cell!!");
            },
          })}
        />
      )}
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
