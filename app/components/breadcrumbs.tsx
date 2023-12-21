import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { ShoppingCartIcon } from "../icons/shoppingcart";

export default function BreadCrumbs() {
  return (
    <Breadcrumbs
      underline="hover"
      classNames={{
        list: "bg-slate-50 shadow-small  ",
      }}
      itemClasses={{
        item: "text-purple-700/60 data-[current=true]:text-purple-700 md:text-lg text-xs font-semibold",
        separator: "text-purple-700/40",
      }}
      variant="solid"
    >
      {/* <BreadcrumbItem>
        <ShoppingCartIcon />
      </BreadcrumbItem> */}
      <BreadcrumbItem href="/checkout">Checkout</BreadcrumbItem>
      <BreadcrumbItem href="/payment">Payment</BreadcrumbItem>
      <BreadcrumbItem href="/delivery-address">Confirmation</BreadcrumbItem>
    </Breadcrumbs>
  );
}
