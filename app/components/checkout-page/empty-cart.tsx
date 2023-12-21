"use client";
import ShoppingCart from "@/app/icons-lotties/shopping-cart";
import { Button } from "@nextui-org/react";

import React from "react";

function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="text-center">
        <ShoppingCart className="h-20 w-20 text-purple-500 mx-auto" />
        <h1 className="text-gray-900 md:text-4xl text-2xl font-semibold mt-4">
          Your Cart is Empty
        </h1>
        <p className="text-gray-600 md:text-lg text-sm  mt-2 mb-4">
          It looks like you haven't added anything to your cart yet.
        </p>
        <Button
          color="secondary"
          variant="ghost"
          onClick={() => location.reload()}
        >
          Start Shopping
        </Button>
      </div>
    </div>
  );
}

export default EmptyCart;
