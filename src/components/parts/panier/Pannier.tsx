import "./Pannier.css";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { OrderProduct } from "../../../store/OrderProducts/types";
import { Fragment, useEffect, useState } from "react";
import { AiFillSetting } from "@react-icons/all-files/ai/AiFillSetting";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { useDispatch } from "react-redux";
import { RemoveItem, UpdateItem } from "../../../store/OrderProducts/Action";
import { useNavigate } from "react-router-dom";

interface PannierProposeInterface {
  cart: OrderProduct[];
  overlay: Function;
  handleOpen: Function;
}

const Pannier = ({ cart, overlay, handleOpen }: PannierProposeInterface) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(
      cart.reduce((previousValue, currentValue) => {
        return (
          previousValue + currentValue.product.price * currentValue.quantity
        );
      }, 0)
    );
  }, [cart]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [update, setUpdate] = useState<boolean>(false);
  const [qte, setQte] = useState<number>(1);

  const ChangeQte = (id: string) => {
    setUpdate(false);
    dispatch(UpdateItem(id, qte));
  };

  return (
    <Fragment>
      <div className="overlay" onClick={() => overlay()} />
      <div className="Pannier bg-white rounded ">
        <div className="header d-flex justify-content-between mb-2 ">
          <div className="article">{cart.length} Article dans le panier</div>
          <div className="price-total">
            Sous-total du panier {totalPrice} TND
          </div>
        </div>
        <hr />
        <div className="box overflow-auto">
          {cart.map((el) => {
            return (
              <div key={el.product._id} className="product-box">
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Delete Product</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{el.product.name} , Delete?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        handleClose();
                        dispatch(RemoveItem(el.product._id));
                      }}
                    >
                      Confirmed
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Row>
                  <Col xs={3}>
                    <img
                      onClick={() => {
                        handleOpen();
                        navigate("/product-details/" + el.product._id);
                      }}
                      src={el.product.images[0].url}
                    />
                  </Col>
                  <Col xs={9}>
                    <h4 className={"title"}>{el.product.name}</h4>
                    <h6>{el.product.price.toFixed(2)} £ </h6>
                    <div className="qte d-flex justify-content-between">
                      <input type="text" disabled value={el.quantity} />
                      <div className="update d-flex justify-content-between align-items-center ">
                        {update ? (
                          <>
                            <input
                              type="number"
                              onChange={(e) =>
                                setQte(Number.parseInt(e.target.value))
                              }
                              min={1}
                              max={100}
                              value={qte}
                            />
                            <Button onClick={() => ChangeQte(el.product._id)}>
                              Update
                            </Button>
                          </>
                        ) : (
                          <AiFillSetting onClick={() => setUpdate(true)} />
                        )}
                        <MdDelete
                          style={{ color: "red" }}
                          onClick={() => handleShow()}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
        <div className="form-confirmed text-center ">
          <Button
            onClick={() => {
              handleOpen();
              navigate("/cart");
            }}
            variant="primary "
            size="lg"
          >
            Confirmed Order
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Pannier;
