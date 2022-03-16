import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import { useState } from "react";
import { PaymentInfo, shoppingInfo } from "../../../../@types/order";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { useNavigate } from "react-router-dom";

const Steper = () => {
  const navigate = useNavigate();
  const [handle2, setHandle2] = useState<boolean>(false);
  const [shoppingInfo, setShoppingInfo] = useState<shoppingInfo>({
    address: "",
    city: "",
    phoneNo: "",
    postalCode: 0,
    country: "",
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    paidAt: new Date(),
    status: "",
    delivererAt: new Date(),
  });

  const handleStep1 = (
    address: string,
    city: string,
    country: string,
    postalCode: string,
    phone: string
  ) => {
    setShoppingInfo({
      address,
      city,
      phoneNo: phone,
      postalCode: Number.parseInt(postalCode),
      country,
    });
  };

  const handleStep2 = (payload: PaymentInfo) => {
    setPaymentInfo(payload);
    setHandle2(paymentInfo.status === "");
    console.log(handle2);
  };

  const handle = () => {
    if (handle2) {
      return false;
    } else {
      return true;
    }
  };

  const orderItems = useSelector((e: RootState) => e.order.ProductsItems);

  const submit = () => {
    axios
      .post(
        "http://localhost:3000/order",
        {
          shoppingInfo: shoppingInfo,
          paymentInfo: paymentInfo,
          orderItems: orderItems,
        },
        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluOTlAZ21haWwuY29tIiwiX2lkIjoiNjIwODM5ODkyOGMyNmEzYTBjY2RmMmM3IiwiaWF0IjoxNjQ3MjY5MDExLCJleHAiOjE2NDcyNzI2MTF9.y-WwNXvfLPxOcQTqCjYR96kzWe9Z36sepvBXnCwm5_w",
          },
        }
      )
      .then((res) => {
        localStorage.removeItem("cart");
        navigate("/");
      })
      .catch((e) => {
        console.log(e.response.message.data);
      });
  };

  return (
    <StepProgressBar
      onSubmit={submit}
      startingStep={0}
      steps={[
        {
          label: "shoppingInfo",
          name: "step 1",
          content: <Step1 step1F={handleStep1} />,
        },
        {
          label: "Payment info",
          name: "step 2",
          content: <Step2 handleStep2={handleStep2} />,
          validator: handle,
        },
        {
          label: "Step 3",
          name: "step 3",
          content: <Step3 />,
        },
      ]}
    />
  );
};

export default Steper;
