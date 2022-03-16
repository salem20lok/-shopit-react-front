import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup,
  Navbar,
} from "react-bootstrap";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../../../../store/Products/action";

const Filter = () => {
  const [category, setCategory] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [filterCategories, setFilterCategories] = useState("");

  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(getAllProducts(0, name));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/product/category")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((e) => {
        console.error(e.response.data.message);
      });
  }, []);

  return (
    <Navbar id="navbarScroll">
      <Form className="d-flex">
        <InputGroup>
          <DropdownButton
            variant="outline-secondary"
            title="Categories"
            id="input-group-dropdown-1"
          >
            {category.map((el, idx) => {
              return (
                <Dropdown.Item
                  onClick={() => setFilterCategories(el)}
                  key={idx}
                >
                  {el}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>

          <FormControl
            type="search"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search"
            aria-label="Search"
          />
          <Button onClick={() => handleFilter()} variant="outline-success">
            <BiSearch />
          </Button>
        </InputGroup>
      </Form>
    </Navbar>
  );
};

export default Filter;
