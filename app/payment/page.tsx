"use client";
import { Button, Card } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/breadcrumbs";

function Page() {
  const [orders, setOrders] = useState([]);
  const [buttonColor, setButtonColor] = useState("bg-blue-700");
  let total = 0;
  const handleButtonClick = () => {
    // Randomly generate a color (you can customize this logic)
    const randomColor = `bg-purple-500`;
    setButtonColor(randomColor);
  };
  const fetchOrders = async () => {
    const response = await fetch(
      "https://groww-intern-assignment.vercel.app/v1/api/order-details"
    );
    const orders = await response.json();
    setOrders(orders.paymentMethods);

    console.log("order", orders);
  };
  //   const totalPrice = orders.products.reduce(
  //     //@ts-ignore
  //     (sum, product) => sum + product.price,
  //     0
  //   );
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div className="p-6 mt-8">
      <div className=" flex flex-col justify-center items-center text-center">
        {/* <h1 className="text-xl font-semibold  my-4">Payment Methods</h1> */}
        <BreadCrumbs />
      </div>
      {orders.map((order: any) => (
        <Button
          key={order.id}
          className="  m-5  bg-purple-700 text-white  "
          onClick={handleButtonClick}
        >
          {order}
        </Button>
      ))}
      {/* <div className="mt-8 bg-white p-6 rounded-md shadow-md">
        <h1 className="text-xl font-semibold mb-4">Payment Methods</h1>
        <div className="flex flex-col space-y-4">
          <Button className="bg-blue-500 text-white">Credit Card</Button>
          <Button className="bg-green-500 text-white">PayPal</Button>
          <Button className="bg-yellow-500 text-white">Bank Transfer</Button>
        </div>
      </div> */}
    </div>
  );
}

export default Page;
