"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

import React, { useEffect, useState } from "react";
import { useStore } from "../store";
import PaymentCard from "../components/payment-page/payment-card";
import Upi from "../components/payment-page/upi";
import Cards from "../components/payment-page/cards";

function Page() {
  const { paymentMethods, fetchOrderDetails, setSelectedPaymentMethod } =
    useStore();
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  useEffect(() => {
    fetchOrderDetails();
  }, []);
  return (
    <div className=" md:flex md:justify-evenly md:items-start  grid justify-items-center place-items-end ">
      <Accordion
        variant="splitted"
        className="  p-10 m-5  md:w-[800px] md:h-[180px]   "
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={paymentMethods[0]}
          //@ts-ignore
          className="font-semibold "
          onPress={() => setSelectedPaymentMethod(paymentMethods[0])}
        >
          <Upi upiId={upiId} setUpiId={setUpiId} />
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title={paymentMethods[1]}
          className="font-semibold "
          onPress={() => setSelectedPaymentMethod(paymentMethods[1])}
        >
          <Cards
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            expiry={expiry}
            setExpiry={setExpiry}
            cvv={cvv}
            setCvv={setCvv}
          />
        </AccordionItem>
      </Accordion>
      <PaymentCard
        upiId={upiId}
        cardNumber={cardNumber}
        expiry={expiry}
        cvv={cvv}
      />
    </div>
  );
}

export default Page;
