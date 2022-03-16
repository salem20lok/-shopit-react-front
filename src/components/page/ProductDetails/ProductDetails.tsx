import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../../@types/products";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import "./ProductDetails.css";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/OrderProducts/Action";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product>({
    _id: "s",
    name: "s",
    price: 0,
    description: "string",
    rating: 3,
    images: [],
    category: "string",
    stock: 0,
    numOfReviews: 0,
    Reviews: [],
  });
  const [error, setError] = useState<boolean>(false);
  const [qte, setQte] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:3000/product/" + id)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((err) => {
        setError(true);
        console.error(err.response.data.message);
      });
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addToCart({ product, quantity: qte }));
    navigate("/");
  };

  return error ? (
    <div> "Product undefended"</div>
  ) : (
    <Container>
      <Row>
        <Col sm={6}>
          <Carousel>
            {product?.images.map((el) => {
              return (
                <Carousel.Item key={el.url}>
                  <img
                    className="d-block w-100"
                    src={el.url}
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
        <Col sm={6}>
          <div className="box">
            <div className="title">
              <h2>{product?.name}</h2>
              <span>Product # {product?._id}</span>
            </div>
            <hr />
            <div className="star d-flex justify-content-start mb-2">
              <AiFillStar style={{ color: "#ffc107" }} />
              <AiOutlineStar style={{ color: "#ffc107" }} />
              <AiOutlineStar style={{ color: "#ffc107" }} />
              <AiOutlineStar style={{ color: "#ffc107" }} />
              <AiOutlineStar style={{ color: "#ffc107" }} />
              <span>(Reviews:{product?.rating})</span>
            </div>
            <hr />
            <div className="command">
              <div className="price">£ {product?.price.toFixed(2)}</div>
              <div className="qte d-flex justify-content-start align-items-center mt-2 ">
                <Button
                  disabled={qte < product.stock ? false : true}
                  onClick={() => setQte(qte + 1)}
                >
                  +
                </Button>
                <input
                  className={"text-center"}
                  value={qte}
                  readOnly
                  type="text"
                  onChange={(e) => setQte(Number.parseInt(e.target.value))}
                />
                <Button
                  onClick={() => setQte(qte - 1)}
                  disabled={qte > 1 ? false : true}
                >
                  -
                </Button>
                <Button
                  variant="success"
                  style={{ marginLeft: "10px", width: "100px" }}
                  onClick={() => handleSubmit()}
                >
                  Add To Cart
                </Button>
              </div>
              <hr />
              <div
                className="status"
                style={{ color: product.stock > 0 ? "green" : "red" }}
              >
                status : {product.stock > 0 ? "In Stock" : "hors Stock"}
              </div>
            </div>
            <hr />
            <div className="description">{product.description}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
