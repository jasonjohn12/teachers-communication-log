import React, { useContext } from "react";
import Navigation from "./components/Layout/Navbar";
import StudentInput from "./components/StudentInput";
import StudentDashboard from "./components/StudentsDashboard";
import { Container, Row, Col } from "react-bootstrap";
import StudentsDataContextProvider from "./components/contexts/StudentsDataContext";
import { UserContext } from "./components/contexts/UserContext";
import LandingPage from "./components/Layout/LandingPage";

function App() {
  const { user, logout, login } = useContext(UserContext);

  let isAuthenticated = user !== null ? true : false;

  const onLogOut = () => {
    logout();
  };

  const onLogin = (username, password) => {
    login(username, password);
  }

  return (
    <React.Fragment>
      <Row>
        <Col style={{ marginBottom: "15px" }}>
          <Navigation user={user} onLogOut={onLogOut} onLogin={login}/>
        </Col>
      </Row>
      {isAuthenticated && isAuthenticated ? (
        <Container>
          <StudentsDataContextProvider>
            <Row>
              <Col>
                <StudentInput />
              </Col>
              <Col>
                <StudentDashboard />
              </Col>
            </Row>
          </StudentsDataContextProvider>
        </Container>
      ) : (
        <LandingPage />
      )}
    </React.Fragment>
  );
}

export default App;
