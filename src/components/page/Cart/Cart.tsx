import { Button, Col, Container, Modal, Row } from "react-bootstrap";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import "./Cart.css";
import Product from "./Product/Product";
import { useState } from "react";
import Steper from "./Steper/Steper";

const Cart = () => {
  const items = useSelector((el: RootState) => {
    return el.order.ProductsItems;
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className={"cart"} fluid>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Steper />
        </Modal.Body>
      </Modal>
      <Row className={"mt-4"}>
        <Col xs={8}>
          <h1 className={"title"}>Pannier</h1>
          <hr />
          <Row>
            <Col>Article</Col>
            <Col />
            <Col>Price</Col>
            <Col>Qté</Col>
            <Col>Total</Col>
            <Col />
          </Row>
          <hr style={{ height: "5px" }} />
          {items.map((el) => {
            return <Product key={el.product._id} item={el} />;
          })}
        </Col>
        <Col xs={4}>
          <div className="recue">
            <h1 className={"title"}>SOMMAIRE</h1>
            <hr />
            <div className="total-price d-flex justify-content-between  align-items-center ">
              <p className={"total"}>Total</p>
              <span className={"price-total"}>
                {items
                  .reduce(
                    (previousValue, currentValue) =>
                      previousValue +
                      currentValue.product.price * currentValue.quantity,
                    0
                  )
                  .toFixed(2)}{" "}
                TND
              </span>
            </div>
            <hr />
            <div className="total-price d-flex justify-content-between  align-items-center ">
              <p className={"total"}>TVA</p>
              <span className={"price-total"}>00.00 TND</span>
            </div>
            <hr />
            <div className="total-price d-flex justify-content-between  align-items-center ">
              <p className={"total"}>Total de la commande</p>
              <span style={{ color: "red" }} className={"price-total"}>
                {items
                  .reduce(
                    (previousValue, currentValue) =>
                      previousValue +
                      currentValue.product.price * currentValue.quantity,
                    0
                  )
                  .toFixed(2)}{" "}
                TND
              </span>
            </div>
            <hr />
            <div className={"d-flex justify-content-between"}>
              <Button onClick={() => handleShow()} className={"Case"}>
                Passer a la Case
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
