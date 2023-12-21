"use client";
import React, { useEffect, useState } from "react";

import { useStore } from "../store";
import CheckoutCard from "../components/checkout-page/checkout-card";
import ProductCart from "../components/checkout-page/product-cart";

function Page() {
  const [coupon, setCoupon] = useState("");
  const { orderDetails, fetchOrderDetails } = useStore();
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    fetchOrderDetails();
  }, []);
  const vouch = () => {
    if (coupon.trim() === "") {
      setApplied(false);
    }
    setApplied(true);
  };
  return (
    <div>
      {orderDetails.products.length === 0 ? (
        <h1 className=" text-center font-semibold text-xl">
          Empty cart. Add items to proceed.
        </h1>
      ) : (
        <>
          <div className=" lg:flex lg:justify-evenly lg:items-start grid justify-items-center    ">
            <ProductCart />
            <CheckoutCard />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
