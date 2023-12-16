"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "../store";
import { Card, Image } from "@nextui-org/react";
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}
function Page() {
  const [orders, setOrders] = useState({ products: [] });

  let total = 0;
  const fetchOrders = async () => {
    const response = await fetch(
      "https://groww-intern-assignment.vercel.app/v1/api/order-details"
    );
    const orders = await response.json();
    setOrders(orders);

    console.log("order", orders);
  };
  const totalPrice = orders.products.reduce(
    //@ts-ignore
    (sum, product) => sum + product.price,
    0
  );
  useEffect(() => {
    fetchOrders();
  }, []);
  //   const { orderDetails, fetchOrderDetails } = useStore();

  //   useEffect(() => {
  //     // Fetch order details when the component mounts
  //     fetchOrderDetails();
  //   }, []);

  return (
    <div>
      <h1>Checkout Page</h1>

      {orders.products.length === 0 ? (
        <p>Empty cart. Add items to proceed.</p>
      ) : (
        <>
          <ul>
            {orders.products.map((product: Product) => (
              <Card key={product.id} className=" bg-slate-300 p-24">
                <h1>{product.title}</h1>
                <Image width={240} src={product.image} alt="" />
                <h1>{product.price}</h1>
                <h1>{product.quantity}</h1>
              </Card>
            ))}
          </ul>
          <div>
            <h1>{totalPrice}</h1>
            <button onClick={() => alert("Proceed to Payment")}>
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
