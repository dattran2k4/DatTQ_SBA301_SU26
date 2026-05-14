//Sử dụng Carousel của react-bootstrap để tạo một carousel với 3 hình ảnh khác nhau. Mỗi hình ảnh nên có một tiêu đề và mô tả ngắn gọn.
// Sử dụng ảnh orchid-* trong public/images để làm hình ảnh cho carousel.
// Sử dụng map để hiển thị các hình ảnh trong carousel từ một mảng dữ liệu.
// Mỗi bức ảnh có width và height giống nhau để đảm bảo tính thẩm mỹ của carousel.
import { Carousel } from "react-bootstrap";
import { banners } from "../data/banners";

const Carousels = () => {
  return (
    <Carousel style={{ height: "400px" }}>
      {banners.map((item) => (
        <Carousel.Item key={item.id} className="h-100">
          <img
            style={{ objectFit: "cover", maxHeight: "400px", maxWidth: "100%" }}
            src={item.image}
            alt={item.title}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default Carousels;
