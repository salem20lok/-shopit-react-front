import "./SliderBarFilter.css";
import { Button, Col, Dropdown, Form, InputGroup } from "react-bootstrap";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { useState } from "react";

const SliderBarFilter = () => {
  const [categories, setCategories] = useState<boolean>(true);
  const [price, setPrice] = useState<boolean>(true);
  const [ratings, setRatings] = useState<boolean>(true);
  return (
    <Col className={"sidebar"} lg={4} md={4} xs={12}>
      <Form className={"sidebarForm"}>
        <InputGroup className="mb-3">
          <Button size="lg" type={"reset"} variant="danger">
            Reset
          </Button>
          <Button size="lg" variant="success">
            Apply
          </Button>
        </InputGroup>

        {/*filter-categories*/}
        <div className="filter-categories">
          <Dropdown.Divider />
          <div className="title-filter d-flex justify-content-between mb-2 ">
            <span>Categories</span>
            <AiOutlinePlusCircle onClick={() => setCategories(!categories)} />
          </div>
          <div
            style={{ display: categories ? "none" : "block" }}
            className="box-filter"
          >
            <Form.Group
              className="mb-3 overflow-auto "
              controlId="formBasicCheckbox"
              style={{ height: "100px" }}
            >
              <Form.Check type="checkbox" label="Check me out" />
              <Form.Check type="checkbox" label="Check me out" />
              <Form.Check type="checkbox" label="Check me out" />
              <Form.Check type="checkbox" label="Check me out" />
              <Form.Check type="checkbox" label="Check me out" />
              <Form.Check type="checkbox" label="Check me out" />
              <Form.Check type="checkbox" label="Check me out" />
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </div>
        </div>
        {/*filter-Price*/}
        <div className="filter-categories">
          <Dropdown.Divider />
          <div className="title-filter d-flex justify-content-between mb-2 ">
            <span>Price</span>
            <AiOutlinePlusCircle onClick={() => setPrice(!price)} />
          </div>
          <div
            style={{ display: price ? "none" : "block" }}
            className="box-filter"
          >
            <Form.Group
              className="mb-3 overflow-auto "
              controlId="formBasicCheckbox"
            >
              <Form.Label>Max Price</Form.Label>
              <Form.Range />

              <Form.Label>Min Price</Form.Label>
              <Form.Range />
            </Form.Group>
          </div>
        </div>
        {/*filter-Price*/}
        <div className="filter-categories">
          <Dropdown.Divider />
          <div className="title-filter d-flex justify-content-between mb-2 ">
            <span>Ratings</span>
            <AiOutlinePlusCircle onClick={() => setRatings(!ratings)} />
          </div>
          <div
            style={{ display: ratings ? "none" : "block" }}
            className="box-filter"
          >
            <Form.Group
              className="mb-3 overflow-auto "
              controlId="formBasicCheckbox"
            >
              <Form.Label>Max ratings</Form.Label>
              <Form.Range />

              <Form.Label>Min ratings</Form.Label>
              <Form.Range />
            </Form.Group>
          </div>
        </div>
      </Form>
    </Col>
  );
};

export default SliderBarFilter;
