import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function BreadCrumbs() {
  return (
    <Breadcrumbs
      classNames={{
        list: "bg-slate-50 shadow-small hover:bg-white ",
      }}
      itemClasses={{
        item: "text-purple-700/60  md:text-lg text-xs font-semibold",
        separator: "text-purple-700/40",
      }}
      variant="solid"
    >
      <BreadcrumbItem>Checkout</BreadcrumbItem>
      <BreadcrumbItem>Payment</BreadcrumbItem>
      <BreadcrumbItem>Confirmation</BreadcrumbItem>
    </Breadcrumbs>
  );
}
