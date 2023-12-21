import React from "react";
import Lottie from "lottie-react";
import cardgif from "../../icons/card.json";
import { Input } from "@nextui-org/react";
function Cards({
  cardNumber,
  setCardNumber,
  expiry,
  setExpiry,
  cvv,
  setCvv,
}: {
  cardNumber: string;
  setCardNumber: any;
  expiry: string;
  setExpiry: any;
  cvv: string;
  setCvv: any;
}) {
  const style = {
    height: 100,
    width: 100,
  };
  return (
    <div className="flex  items-center justify-evenly">
      <Lottie animationData={cardgif} style={style} className=" " />
      <div className=" flex flex-col items-center justify-center">
        <Input
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          type="text"
          accept="number"
          maxLength={10}
          label="Card number"
          description="We'll never share your details with anyone else."
          className="max-w-xs "
          color="secondary"
        ></Input>
        <div className=" flex justify-center items-center max-w-[300px] gap-2">
          <Input
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            type="text"
            label="Expiry"
            accept="number"
            description="MMYY"
            maxLength={4}
            className="max-w-xs "
            color="secondary"
          ></Input>
          <Input
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            type="text"
            label="CVV"
            accept="number"
            description="XXX"
            maxLength={3}
            className="max-w-xs "
            color="secondary"
          ></Input>
        </div>
      </div>
    </div>
  );
}

export default Cards;
