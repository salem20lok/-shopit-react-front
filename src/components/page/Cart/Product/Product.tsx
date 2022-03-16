import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OrderProduct } from "../../../../store/OrderProducts/types";
import { AiFillSetting } from "@react-icons/all-files/ai/AiFillSetting";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { RemoveItem, UpdateItem } from "../../../../store/OrderProducts/Action";

interface ProductPropsInterface {
  item: OrderProduct;
}

const Product = ({ item }: ProductPropsInterface) => {
  const dispatch = useDispatch();

  const [update, setUpdate] = useState<boolean>(false);
  const [qte, setQte] = useState<number>(1);

  return (
    <Row key={item.product._id}>
      <Col>
        <Row>
          <Col>
            <Link to={`/product-details/${item.product._id}`}>
              <Card.Img variant="top" src={item.product.images[0].url} />
            </Link>
          </Col>
          <Col>
            <h2 className={"title"}>{item.product.name}</h2>
          </Col>
          <Col>
            <h4 className={"price"}>{item.product.price} TND </h4>
          </Col>
          <Col>
            <input
              type="text"
              disabled
              className={"qte"}
              value={item.quantity}
            />
          </Col>
          <Col>{(item.product.price * item.quantity).toFixed(2)} TND </Col>
          <Col>
            <div className="update d-flex ">
              {update ? (
                <>
                  <input
                    type={"number"}
                    value={qte}
                    onChange={(e) => setQte(Number.parseInt(e.target.value))}
                    min={1}
                  />
                  <Button
                    onClick={() => {
                      dispatch(UpdateItem(item.product._id, qte));
                      setUpdate(false);
                    }}
                  >
                    Update
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={() => setUpdate(true)}>
                    <AiFillSetting />
                  </Button>
                  <Button
                    onClick={() => dispatch(RemoveItem(item.product._id))}
                  >
                    <MdDelete />
                  </Button>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Product;
