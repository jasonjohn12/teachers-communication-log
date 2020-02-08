import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
const StudentInput = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [createdDate, setCreatedDate] = useState(Date(Date.now()));
  const [submit, setSubmit] = useState(true);
  const [notes, setNotes] = useState([""]);

  const handleSubmit = e => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setNotes([""]);
    setCreatedDate(Date(Date.now()));
    props.addStudent(firstName.trim(), lastName.trim(), createdDate, notes);
  };
  useEffect(() => {
    if (firstName !== "" && lastName !== "") {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [firstName, lastName]);
  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>FirstName</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={submit} id="submit-button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default StudentInput;
