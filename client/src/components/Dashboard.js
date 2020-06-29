import React, { useState } from "react";
import StudentDashboard from "./StudentsDashboard";
import StudentEntries from "./StudentEntries";

import StudentsDataContextProvider from "../components/contexts/StudentsDataContext";
const Dashboard = () => {
  const [showEntries, setShowEntries] = useState(false);
  const [student, setStudent] = useState({});
  const onShowEntries = (student) => {
    if (student) setStudent(student);
    setShowEntries(!showEntries);
  };
  return (
    <StudentsDataContextProvider>
      {showEntries ? (
        <StudentEntries onShowEntries={onShowEntries} student={student} />
      ) : (
        <StudentDashboard onShowEntries={onShowEntries} />
      )}
    </StudentsDataContextProvider>
  );
};

export default Dashboard;
