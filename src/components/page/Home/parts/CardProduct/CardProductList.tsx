import "./CardProduct.css";
import { Col, Pagination, Row } from "react-bootstrap";
import { Product } from "../../../../../@types/products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../../../store/Products/action";
import { RootState } from "../../../../../store";
import { DiDropbox } from "@react-icons/all-files/di/DiDropbox";
import CardProduct from "./Card/CardProduct";

const CardProductList = () => {
  const [active, setActive] = useState<Number>(1);
  const [skip, setSkip] = useState<any>(0);

  const count = useSelector((state: RootState) => {
    return Math.round(state.products.count / 8);
  });

  let items = [];
  for (let number = 1; number <= count; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handlePagination(number, (number - 1) * 8)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const handlePagination = (n: Number, s: number) => {
    setActive(n);
    setSkip(s);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(skip, ""));
  }, [skip]);

  const products = useSelector((state: RootState) => {
    return state.products.ProductsItems;
  });

  return (
    <Col className={"products"} lg={8} md={8} xs={12}>
      <Row>
        {products.length ? (
          products.map((product: Product) => {
            return <CardProduct key={product._id} product={product} />;
          })
        ) : (
          <div>
            No-data... <DiDropbox />
          </div>
        )}
      </Row>
      <div className={"pagination d-flex justify-content-center mt-4"}>
        <Pagination size="lg">{items}</Pagination>
      </div>
    </Col>
  );
};

export default CardProductList;
