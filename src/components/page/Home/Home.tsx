import { Container, Row } from "react-bootstrap";

import "./Home.css";
import SliderBarFilter from "./parts/SliderBarFilter/SliderBarFilter";
import CardProduct from "./parts/CardProduct/CardProduct";

const Home = () => {
  return (
    <div className="home" style={{ backgroundColor: "#E6E6E6" }}>
      <Container fluid>
        <Row>
          <SliderBarFilter />
          <CardProduct />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
