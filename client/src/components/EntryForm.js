import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { addStudentEnry } from "../api/entries";
import { StudentsDataContext } from "./contexts/StudentsDataContext";
const EntryForm = ({ studentId, closeForm, addedNewEntry }) => {
  const { addStudentEntry } = useContext(StudentsDataContext);
  const [contacted, setContacted] = useState(false);
  const [notes, setNotes] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addStudentEntry(studentId, notes, contacted);
    addedNewEntry(studentId, notes, contacted);
    setContacted(false);
    setNotes("");
    closeForm();
  };
  return (
    <Form style={{ marginTop: "75px" }} onSubmit={onHandleSubmit}>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Notes</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Contacted Parents"
          value={contacted}
          onChange={() => setContacted(!contacted)}
        />
        {contacted.toString()}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EntryForm;
