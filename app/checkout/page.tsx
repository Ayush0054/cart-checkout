"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "../store";
import { Button, Card, Image, ScrollShadow } from "@nextui-org/react";
import BreadCrumbs from "../components/breadcrumbs";
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
      <div className=" flex flex-col justify-center items-center text-center mt-3">
        {/* <h1>Checkout Page</h1> */}
        <BreadCrumbs />
      </div>
      {orders.products.length === 0 ? (
        <h1 className=" text-center font-semibold text-xl">
          Empty cart. Add items to proceed.
        </h1>
      ) : (
        <>
          <div className=" md:flex md:justify-center ">
            <ScrollShadow
              hideScrollBar
              className=" md:h-[90vh]  h-[600px] bg-slate-50 rounded-md shadow-md m-5 "
            >
              {orders.products.map((product: Product) => (
                <div key={product.id} className="  p-10 m-5 border-b-2  ">
                  <div className="flex gap-5 ">
                    <div className=" grid text-center gap-5">
                      <Image
                        isZoomed
                        width={200}
                        height={200}
                        src={product.image}
                        alt=""
                      />
                      <h1>{product.quantity}</h1>
                    </div>
                    <div className=" flex flex-col justify-center">
                      <h1 className="font-semibold">{product.title}</h1>
                      <h1 className="font-semibold text-purple-800">
                        {product.price}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollShadow>

            <div className=" p-6 bg-slate-50 rounded-md shadow-md m-5 ">
              <h1 className="text-xl font-semibold mb-4">Order Summary</h1>
              {/* <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$100.00</span>
        </div> */}
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">{totalPrice}</span>
              </div>
              <Button
                color="secondary"
                className="w-full"
                onClick={() => alert("Proceed to Payment")}
              >
                Proceed to Payment
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
