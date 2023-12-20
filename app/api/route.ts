import { NextResponse } from "next/server";
import { redis } from "../lib/redis";

export async function GET(req: Request, res: NextResponse) {
  const cachedValue = await redis.get("orderDetails");
  if (cachedValue) {
    console.log("Using cached value");

    return NextResponse.json(
      { output: JSON.parse(cachedValue) },
      { status: 200 }
    );
  }
  const response = await fetch(
    "https://groww-intern-assignment.vercel.app/v1/api/order-details"
  );
  console.log(response, "response::");
  const data = await response.json();
  if (!response.ok) {
    return NextResponse.json(
      { output: "Failed to fetch order details" },
      { status: 500 }
    );
  }
  await redis.set("orderDetails", JSON.stringify(data));
  return NextResponse.json(
    { output: JSON.stringify(response) },
    { status: 200 }
  );
}
