import React, { useState, useEffect } from "react";
import axios from "axios";
import { getStudents } from "../api/students";
import StudentDashboard from "./StudentsDashboard";
import StudentEntries from "./StudentEntries";

import StudentsDataContextProvider from "../components/contexts/StudentsDataContext";
const Dashboard = () => {
  const [showEntries, setShowEntries] = useState(false);
  const [loading, setLoading] = useState(false);
  const [studentsData, setStudentsData] = useState([]);
  const [student, setStudent] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await getStudents();
      console.log("asfa", result);
      setStudentsData(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const onShowEntries = (student) => {
    if (student) setStudent(student);
    setShowEntries(!showEntries);
  };

  return (
    <StudentsDataContextProvider>
      {showEntries ? (
        <StudentEntries
          onShowEntries={onShowEntries}
          student={student}
          studentsData={studentsData}
        />
      ) : (
        <StudentDashboard
          isLoading={loading}
          onShowEntries={onShowEntries}
          studentsData={studentsData}
        />
      )}
    </StudentsDataContextProvider>
  );
};

export default Dashboard;
