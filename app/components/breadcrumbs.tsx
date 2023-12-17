import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { ShoppingCartIcon } from "../icons/shoppingcart";

export default function BreadCrumbs() {
  return (
    <Breadcrumbs
      underline="hover"
      classNames={{
        list: "bg-white shadow-small",
      }}
      itemClasses={{
        item: "text-purple-700/60 data-[current=true]:text-purple-700",
        separator: "text-purple-700/40",
      }}
      variant="solid"
    >
      <BreadcrumbItem href="#shopping-cart">
        <ShoppingCartIcon />
      </BreadcrumbItem>
      <BreadcrumbItem href="/checkout">Checkout</BreadcrumbItem>
      <BreadcrumbItem href="/payment">Payment</BreadcrumbItem>
      <BreadcrumbItem href="#delivery-address">Delivery Address</BreadcrumbItem>
    </Breadcrumbs>
  );
}
