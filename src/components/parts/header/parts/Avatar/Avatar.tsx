import "./Avatar.css";
import { User } from "../../../../../@types/User";
import { Badge, Dropdown } from "react-bootstrap";

interface InterfacePropsType {
  user: User;
}

const Avatar = (props: InterfacePropsType) => {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
        <img
          className={"avatar"}
          src={
            props.user.avatar.url.length
              ? props.user.avatar.url
              : "/images/avatar/avatar.png"
          }
        />
      </Dropdown.Toggle>

      <Dropdown.Menu className={"float-end"} variant="dark">
        {props.user.role.map((el: string, idx) => {
          return (
            <Badge bg="secondary" key={idx} style={{ margin: "0 5px" }}>
              {el}
            </Badge>
          );
        })}
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-1">profile</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">signin</Dropdown.Item>
        <Dropdown.Item href="#/action-4">signup</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Avatar;
