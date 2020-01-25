import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
const StudentInput = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [createdDate, setCreatedDate] = useState(Date(Date.now()));
  const [submit, setSubmit] = useState(true);
  const [notes, setNotes] = useState([""]);

  const handleForm = e => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setNotes([""]);
    setCreatedDate(Date(Date.now()));
    props.addStudent(firstName, lastName, createdDate, notes);
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
      <h3>Student Input</h3>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default StudentInput;
