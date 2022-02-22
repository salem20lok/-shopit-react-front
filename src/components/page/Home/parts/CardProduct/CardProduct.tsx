import "./CardProduct.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { MdAddShoppingCart } from "@react-icons/all-files/md/MdAddShoppingCart";
import { Product } from "../../../../../@types/products";

const CardProduct = () => {
  const product: Product = {
    name: "iPhone 13 Pro Max",
    price: 450.6,
    description: "Dqtaoply Coque Métallique pour iPhone 13 Pro Max, ",
    rating: 4,
    images: [
      {
        public_id: "",
        url: "/images/iphone.png",
      },
    ],
    category: "string",
    stock: 0,
    numOfReviews: 30,
    Reviews: [],
    createdAt: new Date(7, 7, 2000),
  };

  return (
    <Col className={"products"} xs={8}>
      <Row>
        <Col lg={4} md={6} xs={12} className={"mb-2"}>
          <Card className={"text-center"}>
            {product.stock > 0 ? (
              ""
            ) : (
              <div className="hors-stock">
                <span>Hors-Stock</span>
              </div>
            )}
            <Card.Img variant="top" src={product.images[0].url} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text className={"price"}> {product.price} </Card.Text>
              <div className="star d-flex justify-content-center mb-2">
                <AiFillStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
              </div>
              <Button variant="primary">
                <MdAddShoppingCart /> Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} xs={12} className={"mb-2"}>
          <Card className={"text-center"}>
            <Card.Img variant="top" src="/images/iphone.png" />
            <Card.Body>
              <Card.Title>Iphone 13 pro</Card.Title>
              <Card.Text>Toshiba Notebook with 500GB HDD & 8GB RAM</Card.Text>
              <Card.Text className={"price"}> 250£ </Card.Text>
              <div className="star d-flex justify-content-center mb-2">
                <AiFillStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
              </div>
              <Button variant="primary">
                <MdAddShoppingCart /> Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} xs={12} className={"mb-2"}>
          <Card className={"text-center"}>
            <Card.Img variant="top" src="/images/iphone.png" />
            <Card.Body>
              <Card.Title>Iphone 13 pro</Card.Title>
              <Card.Text>Toshiba Notebook with 500GB HDD & 8GB RAM</Card.Text>
              <Card.Text className={"price"}> 250£ </Card.Text>
              <div className="star d-flex justify-content-center mb-2">
                <AiFillStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
              </div>
              <Button variant="primary">
                <MdAddShoppingCart /> Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} xs={12} className={"mb-2"}>
          <Card className={"text-center"}>
            <Card.Img variant="top" src="/images/iphone.png" />
            <Card.Body>
              <Card.Title>Iphone 13 pro</Card.Title>
              <Card.Text>Toshiba Notebook with 500GB HDD & 8GB RAM</Card.Text>
              <Card.Text className={"price"}> 250£ </Card.Text>
              <div className="star d-flex justify-content-center mb-2">
                <AiFillStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
              </div>
              <Button variant="primary">
                <MdAddShoppingCart /> Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} xs={12} className={"mb-2"}>
          <Card className={"text-center"}>
            <Card.Img variant="top" src="/images/iphone.png" />
            <Card.Body>
              <Card.Title>Iphone 13 pro</Card.Title>
              <Card.Text>Toshiba Notebook with 500GB HDD & 8GB RAM</Card.Text>
              <Card.Text className={"price"}> 250£ </Card.Text>
              <div className="star d-flex justify-content-center mb-2">
                <AiFillStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
                <AiOutlineStar style={{ color: "#ffc107" }} />
              </div>
              <Button variant="primary">
                <MdAddShoppingCart /> Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default CardProduct;
