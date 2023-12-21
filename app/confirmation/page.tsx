"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "../store";
import CheckIcon from "../icons/checkIcon";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";

function Page() {
  const { push } = useRouter();
  const {
    orderDetails,
    paymentMethods,
    fetchOrderDetails,
    selectedPaymentMethod,
    setSelectedPaymentMethod,
  } = useStore();
  const [variant, setVariant] = useState("");
  const [result, setResult] = useState("");
  const getRandomResult = () => {
    const randomResult = Math.random() < 0.5 ? "failure" : "success";
    setResult(randomResult);

    setVariant(randomResult === "success" ? "success" : "danger");
    if (selectedPaymentMethod === "") {
      push("checkout");
    }
  };
  useEffect(() => {
    getRandomResult();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center m-24 ">
      <Card className="md:w-full w-[350px] max-w-xl rounded-none shadow-none ">
        {result == "success" && (
          <div className=" flex justify-center m-5">
            <CheckIcon className="text-purple-700 w-16 h-16 border-2 border-purple-700 rounded-full p-2 " />
          </div>
        )}
        <CardHeader>
          <h1 className=" font-bold text-2xl">Order Confirmation</h1>
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between mb-4">
            <span className=" text-xl text-gray-600">Order ID:</span>
            <span className=" text-gray-700 font-semibold">123456789</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className=" text-xl text-gray-600">Total Amount</span>
            <span className="  font-semibold text-gray-700">
              ${orderDetails.total + 5}
            </span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className=" text-xl text-gray-600">Payment Method</span>
            <div className="flex items-center space-x-2">
              <span className=" text-gray-700 font-semibold">
                {selectedPaymentMethod}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className=" text-xl text-gray-600">Status</span>
            <Chip
              //@ts-ignore
              color={variant}
              className=" font-semibold "
            >
              {result}
            </Chip>
          </div>
        </CardBody>
        <CardFooter className="flex items-center justify-center">
          <Button
            color="secondary"
            className=" md:text-lg text-sm font-semibold rounded-md "
          >
            CHECK STATUS
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Page;
