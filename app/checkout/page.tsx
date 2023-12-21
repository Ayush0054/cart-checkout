"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "../store";

import CheckoutCard from "../components/checkout-page/checkout-card";
import ProductCart from "../components/checkout-page/product-cart";
import EmptyCart from "../components/checkout-page/empty-cart";

function Page() {
  const { orderDetails, fetchOrderDetails } = useStore();

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <div>
      {orderDetails.products.length === 0 ? (
        <EmptyCart />
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
