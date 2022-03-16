import { CardImg, Container, Navbar } from "react-bootstrap";

import "./Header.css";
import { User } from "../../../@types/User";
import Filter from "./parts/Filter/Filter";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import Avatar from "./parts/Avatar/Avatar";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Link } from "react-router-dom";
import Pannier from "../panier/Pannier";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const cart = useSelector((state: RootState) => {
    return state.order.ProductsItems;
  });

  const handleOpen = () => {
    setIsOpen(false);
  };

  return (
    <Navbar className={"hedear"} bg="dark" expand="lg">
      <Container fluid>
        {/* Nvabar Brand */}
        <Navbar.Brand href="#">
          <Link to={"/"}>
            <CardImg src={"/images/logo.png"} />
          </Link>
        </Navbar.Brand>

        <Filter />

        {/* dropdown menu */}
        <div className="box-user">
          <div className="pannier">
            <FiShoppingCart onClick={() => setIsOpen(!isOpen)} />
            {isOpen ? (
              <Pannier
                cart={cart}
                handleOpen={handleOpen}
                overlay={handleOpen}
              />
            ) : (
              <></>
            )}
            <span>{cart.length}</span>
          </div>
          <Avatar user={user} />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
