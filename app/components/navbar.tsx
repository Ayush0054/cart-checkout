"use client";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
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
  };

  useEffect(() => {
    fetchNav();
  }, []);
  return (
    <div className=" p-3 flex justify-between">
      <img
        src={data?.merchantLogo}
        className=" w-[40px] h-[40px] "
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
