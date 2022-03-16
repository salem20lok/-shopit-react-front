import { Container, Row } from "react-bootstrap";

import "./Home.css";
import SliderBarFilter from "./parts/SliderBarFilter/SliderBarFilter";
import CardProductList from "./parts/CardProduct/CardProductList";
import { useEffect, useState } from "react";

const Home = () => {
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 30);
  });
  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="home" style={{ backgroundColor: "#E6E6E6" }}>
      <Container fluid>
        <Row>
          <SliderBarFilter />
          <CardProductList />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
