"use client";
import React, { useEffect } from "react";
import { useStore } from "../../store";
import { Button, Card } from "@nextui-org/react";
import { useRouter } from "next/navigation";
function PaymentCard({
  upiId,
  cardNumber,
  expiry,
  cvv,
}: {
  upiId: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}) {
  const { push } = useRouter();
  const { orderDetails, fetchOrderDetails, selectedPaymentMethod } = useStore();
  const handlePaymentMethodChange = () => {
    if (selectedPaymentMethod === "UPI") {
      if (upiId === "") {
        alert("Please enter a  UPI ID");
      }
      if (!upiId.includes("@")) {
        alert("Please enter a valid UPI ID");
      } else {
        push("/confirmation");
      }
    }
    if (selectedPaymentMethod === "CARDS") {
      if (cardNumber === "" || expiry === "" || cvv === "") {
        alert("Please enter all the details");
      }
      const numberPattern = /^\d+$/;
      if (numberPattern.test(cardNumber) === false) {
        alert("Please enter a valid card number");
      } else {
        push("/confirmation");
      }
    }
    if (selectedPaymentMethod === "") {
      alert("Please select a payment method");
    }
  };
  useEffect(() => {
    fetchOrderDetails();
  }, []);
  return (
    <Card className=" p-5  m-14  md:w-[350px] w-3/4  border-2   ">
      <div className="flex justify-between mb-4">
        <span className=" text-xl text-gray-600">Total</span>
        <span className=" text-gray-700 font-semibold">
          {orderDetails.total + 5}$
        </span>
      </div>
      <div className="flex justify-between mb-4">
        <span className=" text-xl text-gray-600">Payment Method</span>
        <span className=" text-gray-700 font-semibold">
          {selectedPaymentMethod}
        </span>
      </div>
      <Button
        color="secondary"
        className="w-full text-lg font-semibold rounded-md "
        onClick={handlePaymentMethodChange}
      >
        Make a payment
      </Button>
    </Card>
  );
}

export default PaymentCard;
