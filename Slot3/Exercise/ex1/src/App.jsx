import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { students } from "./data/student";
import MyProfile from "./components/MyProfile";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h2 className="text-center text-primary">Student Profiles</h2>
            <hr className="text-primary" />
          </Col>
        </Row>
        <Row className="g-4">
          {students.map((student) => (
            <Col key={student.id} xs={12} sm={6} md={4} lg={3}>
              <MyProfile student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
