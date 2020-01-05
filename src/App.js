import React, { useState } from "react";
import Navbar from "./components/Layout/Navbar";
import StudentInput from "./components/StudentInput";
import StudentDashboard from "./components/StudentsDashboard";
import uuid from "uuid/v4";
function App() {
  const [studentsData, setStudentsData] = useState([]);

  const addStudent = (firstName, lastName, createdDate, notes) => {
    console.log("Adding Student...", firstName, lastName, notes);
    setStudentsData([
      ...studentsData,
      { id: uuid(), firstName, lastName, createdDate, notes }
    ]);
  };
  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <div className="col-sm">
          <br />
          <StudentInput addStudent={addStudent} />
        </div>
        <div className="col-sm">
          <br />
          <StudentDashboard students={studentsData} />
        </div>
      </div>
    </div>
  );
}

export default App;
