import { Fragment, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import moment from "moment";
import { PaymentInfo } from "../../../../../@types/order";

interface ProposStep2Interface {
  handleStep2: Function;
}

const Step2 = ({ handleStep2 }: ProposStep2Interface) => {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    paidAt: new Date(),
    status: "",
    delivererAt: new Date(),
  });

  return (
    <Fragment>
      <FloatingLabel
        className={"mb-4 mt-5"}
        controlId="dob"
        label="Date de Livrison"
      >
        <Form.Control
          value={moment(paymentInfo.paidAt).format("YYYY-MM-DD")}
          onChange={(e) => {
            setPaymentInfo({
              paidAt: new Date(e.target.value),
              status: paymentInfo.status,
              delivererAt: paymentInfo.delivererAt,
            });
            handleStep2({
              paidAt: new Date(e.target.value),
              status: paymentInfo.status,
              delivererAt: paymentInfo.delivererAt,
            });
          }}
          type="date"
          name="dob"
          placeholder="Date of Birth"
        />
      </FloatingLabel>

      <FloatingLabel
        className={"mb-4 mt-4"}
        controlId="floatingSelectGrid"
        label="Works with selects"
      >
        <Form.Select
          onChange={(e) => {
            setPaymentInfo({
              paidAt: paymentInfo.paidAt,
              status: e.target.value,
              delivererAt: paymentInfo.delivererAt,
            });
            handleStep2({
              paidAt: paymentInfo.paidAt,
              status: e.target.value,
              delivererAt: paymentInfo.delivererAt,
            });
          }}
          value={paymentInfo.status}
          aria-label="Status Payment"
        >
          <option> Select</option>
          <option value="Card">Card</option>
          <option value="liquid">liquid</option>
        </Form.Select>
      </FloatingLabel>
    </Fragment>
  );
};

export default Step2;
