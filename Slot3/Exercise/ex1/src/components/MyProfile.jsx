import { Card } from "react-bootstrap";

const MyProfile = ({ student }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={student.avatar}
        alt={student.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="text-center">
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>
          <small className="text-muted">ID: {student.id}</small>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <button className="btn btn-primary">View Details</button>
      </Card.Footer>
    </Card>
  );
};

export default MyProfile;
