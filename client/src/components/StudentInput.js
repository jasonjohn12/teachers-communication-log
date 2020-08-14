import React, { useState, useEffect, useContext } from "react";
import { StudentsDataContext } from "./contexts/StudentsDataContext";
import { Form, Button, Col } from "react-bootstrap";

const StudentInput = ({ closeForm }) => {
  const { addNewStudent } = useContext(StudentsDataContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("");
  const [submit, setSubmit] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setGrade("");
    addNewStudent({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      grade,
    });
  };
  useEffect(() => {
    if (firstName !== "" && lastName !== "") {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [firstName, lastName]);

  return (
    <div style={{ marginTop: "75px" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Control
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </Col>
          <Button
            type="submit"
            disabled={submit}
            style={{ cursor: "not-allowed" }}
          >
            Submit
          </Button>
          <Button
            style={{ marginLeft: "5px" }}
            variant="danger"
            onClick={closeForm}
          >
            Cancel
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default StudentInput;
