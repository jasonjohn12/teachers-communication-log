import React from "react";
import StudentDashboard from "./StudentsDashboard";
import StudentInput from "./StudentInput";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import StudentsDataContextProvider from "../components/contexts/StudentsDataContext";
const Dashboard = () => {
  return (
    <StudentsDataContextProvider>
      <StudentDashboard />
    </StudentsDataContextProvider>
  );
};

export default Dashboard;
