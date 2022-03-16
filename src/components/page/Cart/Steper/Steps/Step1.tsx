import "./step.css";
import { Fragment, useEffect, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

interface PropsStep1InterfaceType {
  step1F: Function;
}

const Step1 = ({ step1F }: PropsStep1InterfaceType) => {
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    step1F(address, city, country, postalCode, phone);
  }, [address, city, country, postalCode, phone]);

  return (
    <Fragment>
      <FloatingLabel
        className={"mb-3 mt-3"}
        controlId="floatingInputGrid"
        label="Address"
      >
        <Form.Control
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={address}
          type="text"
          placeholder="name@example.com"
        />
      </FloatingLabel>

      <FloatingLabel
        className={"mb-3 mt-3"}
        controlId="floatingInputGrid"
        label="city"
      >
        <Form.Control
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
          type="text"
          placeholder="name@example.com"
        />
      </FloatingLabel>

      <FloatingLabel
        className={"mb-3 mt-3"}
        controlId="floatingInputGrid"
        label="Country"
      >
        <Form.Control
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          value={country}
          type="text"
          placeholder="name@example.com"
        />
      </FloatingLabel>

      <FloatingLabel
        className={"mb-3 mt-3"}
        controlId="floatingInputGrid"
        label="PostalCode"
      >
        <Form.Control
          onChange={(e) => {
            setPostalCode(e.target.value);
          }}
          value={postalCode}
          type="text"
          placeholder="name@example.com"
        />
      </FloatingLabel>
      <FloatingLabel
        className={"mb-3 mt-3"}
        controlId="floatingInputGrid"
        label="Phone Number"
      >
        <Form.Control
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          value={phone}
          type="text"
          placeholder="name@example.com"
        />
      </FloatingLabel>
    </Fragment>
  );
};

export default Step1;
