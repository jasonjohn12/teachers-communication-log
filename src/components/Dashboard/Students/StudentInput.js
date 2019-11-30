import React from "react";
import { Form, Col } from "react-bootstrap";
const StudentInput = () => {
  return (
    <React.Fragment>
      <p>Student Entry</p>
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="First name" style={{ width: "35%" }} />
            <Form.Control placeholder="Last name" style={{ width: "35%" }} />
          </Col>
        </Form.Row>
      </Form>
    </React.Fragment>
  );
};

export default StudentInput;
