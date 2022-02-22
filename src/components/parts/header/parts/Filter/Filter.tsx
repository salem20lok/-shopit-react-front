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

const Filter = () => {
  return (
    <Navbar id="navbarScroll">
      <Form className="d-flex">
        <InputGroup>
          <DropdownButton
            variant="outline-secondary"
            title="Categories"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
          </DropdownButton>

          <FormControl type="search" placeholder="Search" aria-label="Search" />
          <Button variant="outline-success">
            <BiSearch />
          </Button>
        </InputGroup>
      </Form>
    </Navbar>
  );
};

export default Filter;
