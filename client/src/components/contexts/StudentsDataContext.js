import React, { useState, createContext, useEffect } from "react";

import { getStudents, addStudent } from "../../api/students";
//import { deleteEntry } from "../../api/entries";

export const StudentsDataContext = createContext();

const StudentsDataContextProvider = (props) => {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    console.log("context");
  }, [studentsData]);

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
      id: Math.floor(Math.random() * Math.floor(100)),
      grade: Number(student.grade),
    };

    addStudent(newStudent)
      .then((response) => {
        if (response.status === 201) {
          setStudentsData([...studentsData, response.data]);
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
  const addStudentEntry = (entry, studentId) => {
    //deleteEntry(entryId);
    // console.log(`Entry with id: ${entryId} is deleted`);
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
