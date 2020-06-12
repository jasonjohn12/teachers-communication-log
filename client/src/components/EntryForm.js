import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { createNewEntry } from "../api/entries";
const EntryForm = (student) => {
  console.log("student", student);
  const [contacted, setContacted] = useState(false);
  const [notes, setNotes] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    createNewEntry(student.studentId, { notes, contacted });
    console.log("submitting form");
    setContacted(false);
    setNotes("");
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
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default EntryForm;
