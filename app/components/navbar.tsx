"use client";
// import Image from "next/image";
// import { Image } from "@nextui-org/react";
import React, { use, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import BreadCrumbs from "./breadcrumbs";
interface LOGO {
  merchantLogo: string;
  merchant: string;
}
function Navbar() {
  const [data, setData] = useState<LOGO>();
  const fetchNav = async () => {
    const response = await fetch(
      "https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata"
    );
    const data = await response.json();
    setData(data);
    console.log(data);
  };
  console.log(data?.merchantLogo);

  useEffect(() => {
    fetchNav();
  }, []);
  return (
    <div className=" p-3 flex justify-between">
      <img
        src={data?.merchantLogo}
        className=" w-[40px] h-[40px] "
        // width={70}
        // height={70}
        alt={
          //@ts-ignore
          data?.merchantName
        }
      />

      <FaShoppingCart className=" h-8 w-8 text-purple-300 " />
    </div>
  );
}

export default Navbar;
