import { Product } from "@/app/interfaces/product";
import { useStore } from "@/app/store";
import { Card, Image, ScrollShadow } from "@nextui-org/react";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import BreadCrumbs from "../breadcrumbs";

function ProductCart() {
  const { orderDetails, fetchOrderDetails } = useStore();
  return (
    <div className=" grid justify-items-start">
      <div className=" max-sm:hidden ">
        <BreadCrumbs />
      </div>
      <ScrollShadow hideScrollBar className=" md:h-[90vh]  h-[430px]    ">
        {orderDetails.products.map((product: Product) => (
          <Card
            key={product.id}
            className="  p-10 mt-5 border-2  md:w-[800px] md:h-[180px]  hover:shadow-xl   "
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
                  ${product.price}
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
    </div>
  );
}

export default ProductCart;
