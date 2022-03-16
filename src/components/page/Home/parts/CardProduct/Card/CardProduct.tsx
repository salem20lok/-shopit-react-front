import { Button, Card, Col } from "react-bootstrap";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { MdAddShoppingCart } from "@react-icons/all-files/md/MdAddShoppingCart";
import { Product } from "../../../../../../@types/products";
import { BsInfo } from "@react-icons/all-files/bs/BsInfo";

import "./card.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../../store/OrderProducts/Action";
import { Link } from "react-router-dom";

interface InterfacePropsType {
  product: Product;
}

const CardProduct = ({ product }: InterfacePropsType) => {
  const dispatch = useDispatch();

  return (
    <Col key={product._id} lg={4} md={6} xs={12} className={"mb-2"}>
      <Card className={"text-center"}>
        {product.stock > 0 ? (
          ""
        ) : (
          <div className="hors-stock">
            <span>Hors-Stock</span>
          </div>
        )}
        <Link to={`/product-details/${product._id}`}>
          <Card.Img variant="top" src={product.images[0].url} />
        </Link>
        <Card.Body>
          <Link to={`/product-details/${product._id}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Card.Text className={"price"}> {product.price} </Card.Text>
          <div className="star d-flex justify-content-center mb-2">
            <AiFillStar style={{ color: "#ffc107" }} />
            <AiOutlineStar style={{ color: "#ffc107" }} />
            <AiOutlineStar style={{ color: "#ffc107" }} />
            <AiOutlineStar style={{ color: "#ffc107" }} />
            <AiOutlineStar style={{ color: "#ffc107" }} />
          </div>
          <div className="d-flex justify-content-around ">
            <Button
              onClick={() => {
                dispatch(addToCart({ product, quantity: 1 }));
              }}
              variant="primary"
            >
              <MdAddShoppingCart /> Add
            </Button>
            <Link to={`/product-details/${product._id}`}>
              <Button variant="success">
                <BsInfo /> Details
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProduct;
