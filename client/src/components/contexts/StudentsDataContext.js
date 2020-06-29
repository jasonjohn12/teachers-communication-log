import React, { useState, createContext, useEffect } from "react";

import { getStudents, addStudent } from "../../api/students";
import {
  createNewEntry,
  deleteEntry,
  getEntriesByStudentId,
} from "../../api/entries";

export const StudentsDataContext = createContext();

const StudentsDataContextProvider = (props) => {
  console.log("studentContextRender");
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    getStudentsContext();
  }, []);

  const getStudentsContext = async () => {
    const result = await getStudents();
    setStudentsData(result.data);
  };

  const getStudentByIdContext = async (id) => {
    const result = await getStudents(id);
    setStudentsData(result.data);
  };

  function addNewStudent(student) {
    const newStudent = {
      ...student,
      grade: Number(student.grade),
    };

    addStudent(newStudent)
      .then((response) => {
        if (response.status === 201) {
          getStudentsContext();
        }
      })
      .catch((error) => {
        alert(`Unable to add student. Please try again. ${error.message}`);
      });
  }

  const deleteStudentEntry = (entryId) => {
    // deleteEntry(entryId);
    console.log(`Entry with id: ${entryId} is deleted`);
  };

  const addStudentEntry = (studentId, notes, contacted) => {
    var entry = {
      notes,
      contacted,
    };
    console.log(entry, studentId);
    createNewEntry(entry, studentId);
  };

  return (
    <StudentsDataContext.Provider
      value={{
        studentsData,
        addNewStudent,
        getStudentByIdContext,
        addStudentEntry,
        deleteStudentEntry,
      }}
    >
      {props.children}
    </StudentsDataContext.Provider>
  );
};
export default StudentsDataContextProvider;
