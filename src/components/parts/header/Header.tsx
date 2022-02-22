import { CardImg, Container, Navbar } from "react-bootstrap";

import "./Header.css";
import { User } from "../../../@types/User";
import Filter from "./parts/Filter/Filter";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import Avatar from "./parts/Avatar/Avatar";

const Header = () => {
  const user: User = {
    name: "salem",
    email: "salemlokmani@gmail.com",
    password: "Salem-12",
    avatar: {
      public_id: "salem",
      url: "/images/avatar/salem.jpg",
    },
    role: ["admin", "user"],
    createdAt: new Date(7, 7, 2000),
  };

  return (
    <Navbar className={"hedear"} bg="dark" expand="lg">
      <Container fluid>
        {/* Nvabar Brand */}
        <Navbar.Brand href="#">
          <CardImg src={"/images/logo.png"} />
        </Navbar.Brand>

        <Filter />

        {/* dropdown menu */}
        <div className="box-user">
          <div className="pannier">
            <FiShoppingCart />
            <span>0</span>
          </div>
          <Avatar user={user} />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
