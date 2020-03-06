import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";

const Register = ({ show, closeModal }) => {
    const {register} = useContext(UserContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  const handleClose = () => {
    closeModal();
  };

  const submitForm = (e) => {
    e.preventDefault();
    register({firstName, lastName, email, password});
    closeModal();
    
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitForm}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default React.memo(Register);
