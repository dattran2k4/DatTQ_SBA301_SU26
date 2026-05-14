//Sử dụng Row và Col để render map cho Orchid data từ file orchids.js. Mỗi cột nên hiển thị hình ảnh, tên và mô tả của một loại hoa lan. Đảm bảo rằng bố cục được responsive và hiển thị tốt trên các thiết bị khác nhau.
import { Row, Col, Button } from "react-bootstrap";
import { orchids } from "../data/orchids";

const Orchid = () => {
  return (
    <Row>
      {orchids.map((orchid) => (
        <Col key={orchid.id} xs={12} sm={6} md={3} className="mb-4">
          <div className="card h-100">
            <img
              src={orchid.image}
              className="card-img-top"
              alt={orchid.name}
              style={{ objectFit: "cover", height: "200px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{orchid.name}</h5>
              <p className="card-text">{orchid.description}</p>
              <Button variant="primary" href="#">
                View Details
              </Button>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Orchid;
