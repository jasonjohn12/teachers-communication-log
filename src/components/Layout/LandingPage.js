import React, { useState } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import Register from "./Register";

const LandingPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <Jumbotron className="text-center">
      <h1>Hello, teachers!</h1>
      <p>This is a simple application to track communication with parents.</p>
      <p className="text-center">
        <Button variant="primary" onClick={() => setShow(true)}>
          Register
        </Button>
        {show === true ? (
          <Register show={show} closeModal={handleClose} />
        ) : null}
        <Register />
      </p>
    </Jumbotron>
  );
};

export default LandingPage;
