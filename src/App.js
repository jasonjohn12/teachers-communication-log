import React, { useState } from "react";
import Navigation from "./components/Layout/Navbar";
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
      <div >
        <Navigation />
       <div>
          <StudentInput addStudent={addStudent} />
        </div>
        <div>
          <StudentDashboard students={studentsData} /> 
        </div>
      </div>
   
  );
}

export default App;
