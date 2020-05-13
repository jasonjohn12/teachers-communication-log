import React, { useState, createContext } from "react";
import moment from "moment";
import uuid from "uuid/v4";

export const StudentsDataContext = createContext();

const StudentsDataContextProvider = props => {
  const [studentsData, setStudentsData] = useState([
    {
      id: uuid(),
      firstName: "Jason",
      lastName: "John",
      createdAt: moment().fromNow(),
      notes: [{noteId: uuid(), note: "My first note"},{noteId: uuid(), note: "My second note"},{noteId: uuid(), note: "My third note"}]
    }
  ]);
  function addStudent(student) {
    const { firstName, lastName } = student;
    setStudentsData([
      ...studentsData,
      {
        id: uuid(),
        firstName,
        lastName,
        createdAt: moment().fromNow(),
        notes: [""]
      }
    ]);
  }

  return (
    <StudentsDataContext.Provider value={{ studentsData, addStudent }}>
      {props.children}
    </StudentsDataContext.Provider>
  );
};
export default StudentsDataContextProvider;
