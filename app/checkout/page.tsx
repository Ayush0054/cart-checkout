"use client";
import React, { useEffect, useState } from "react";
// import { useStore } from "../store";
import {
  Button,
  Card,
  Chip,
  Image,
  Input,
  ScrollShadow,
  Table,
} from "@nextui-org/react";
import BreadCrumbs from "../components/breadcrumbs";
import { useStore } from "../store";
import { FaShoppingBag } from "react-icons/fa";
import CheckoutCard from "../components/checkout-page/checkout-card";
export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}
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
          <div className=" md:flex md:justify-evenly md:items-start grid justify-items-center ">
            <ScrollShadow hideScrollBar className=" md:h-[90vh]  h-[600px]    ">
              {orderDetails.products.map((product: Product) => (
                <Card
                  key={product.id}
                  className="  p-10 m-5 border-2  md:w-[800px] md:h-[180px]   "
                >
                  <div className="flex items-center ">
                    <div className=" flex items-center gap-10">
                      <Image
                        isZoomed
                        width={70}
                        height={70}
                        src={product.image}
                        className=" min-w-[70px] min-h-[70px] max-w-[70px] max-h-[70px]"
                        alt=""
                      />

                      <h1 className=" md:font-semibold md:text-xl text-xs pr-5 ">
                        {product.title.substring(0, 10)}
                      </h1>
                    </div>

                    <div className="ml-auto flex items-center space-x-4">
                      <h1 className="font-bold text-purple-800 md:text-lg text-sm ">
                        {product.price}$
                      </h1>
                      <h1 className="font-semibold text-purple-800 md:text-lg flex items-center gap-1 text-sm ">
                        {product.quantity}
                        <FaShoppingBag />
                      </h1>
                    </div>
                  </div>
                </Card>
              ))}
            </ScrollShadow>

            <CheckoutCard />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
