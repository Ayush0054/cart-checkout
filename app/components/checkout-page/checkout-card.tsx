"use client";
import { Button, Card, Chip, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useStore } from "../../store";
import { useRouter } from "next/navigation";

function CheckoutCard() {
  const { push } = useRouter();
  const [coupon, setCoupon] = useState("");
  const { orderDetails } = useStore();
  const [applied, setApplied] = useState(false);
  const vouch = () => {
    if (coupon.trim() === "") {
      setApplied(false);
    }
    setApplied(true);
  };
  return (
    <Card className=" p-5  md:m-5 w-[350px]   border-2   hover:shadow-xl   ">
      <h1 className="md:text-xl text-md font-bold mb-1 text-gray-600">
        Delivery Detail
      </h1>
      <Chip radius="sm" variant="dot" className=" text-gray-700 font-light">
        14,Bel Road,Bangalore
      </Chip>
      <div className="flex flex-col justify-between md:my-4 my-2 md:mt-10 mt-4">
        <span className=" md:text-xl text-sm text-gray-600 ">Promo Code</span>
        <div className=" flex justify-center gap-3">
          <Input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            minLength={5}
            accept="text"
            maxLength={5}
            size="sm"
            className=" max-h-[10px] "
            description={applied && "Voucher Applied"}
            color="secondary"
          />
          <Button
            size="lg"
            className=" rounded-md md:text-lg text-sm font-semibold"
            color="secondary"
            variant="ghost"
            onClick={() => vouch()}
          >
            Apply
          </Button>
        </div>
      </div>
      <h1 className="md:text-xl text-md font-bold md:my-4 my-2 md:mt-10 mt-4 text-gray-600">
        Order Summary
      </h1>
      <div className="flex justify-between mb-2">
        <span className=" md:text-md  text-sm  ">Shipping</span>
        <span className=" text-md text-gray-500">$5.00</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className=" md:text-md  text-sm ">Order Amount</span>
        <span className=" text-md text-gray-500 ">
          ${orderDetails.total.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between mb-4">
        <span className=" md:text-xl text-sm text-gray-600">Total</span>
        <span className=" md:text-2xl font-semibold">
          ${orderDetails.total.toFixed(2) + 5}
        </span>
      </div>
      <Button
        color="secondary"
        className="w-full md:text-lg text-sm font-semibold rounded-md "
        onClick={() => push("/payment")}
      >
        Proceed to Payment
      </Button>
    </Card>
  );
}

export default CheckoutCard;
