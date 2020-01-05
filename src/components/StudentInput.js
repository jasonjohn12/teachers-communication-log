import React, { useState, useEffect } from "react";

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
      <form onSubmit={handleForm}>
        <div className="form-group col">
          <label htmlFor="firstName">First Name</label>
          <input
            className="form-control"
            id="ex1"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            className="form-control"
            id="ex2"
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <br />
          <input
            type="submit"
            className="btn btn-outline-primary"
            disabled={submit}
          />
        </div>
      </form>
    </div>
  );
};

export default StudentInput;
