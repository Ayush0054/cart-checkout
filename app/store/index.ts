"use client";

import { create } from "zustand";
import { Product } from "../interfaces/product";

interface OrderDetails {
  products: Product[];
  total: number;
  loading: boolean;
  error: string | null;
}

interface Store {
  orderDetails: OrderDetails;
  fetchOrderDetails: () => Promise<void>;
  paymentMethods: Array<String>;
  selectedPaymentMethod: String;
  totalOrder: number;
  setSelectedPaymentMethod: (method: String) => void;
}

export const useStore = create<Store>((set) => ({
  orderDetails: {
    products: [],
    total: 0,
    loading: true,
    error: null,
  },
  paymentMethods: [],
  totalOrder: 0,
  selectedPaymentMethod: "",
  fetchOrderDetails: async () => {
    try {
      const response = await fetch(
        "https://groww-intern-assignment.vercel.app/v1/api/order-details"
      );
      const data = await response.json();
      console.log(data, "data::");

      const totalPrice = data.products.reduce(
        //@ts-ignore
        (sum, product) => sum + product.price,
        0
      );

      set((state) => ({
        orderDetails: {
          products: data.products || [],
          total: totalPrice,
          loading: false,
          error: null,
        },
        paymentMethods: data.paymentMethods,
        selectedPaymentMethod: state.selectedPaymentMethod || "",
      }));
    } catch (error) {
      set((state) => ({
        orderDetails: {
          products: [],
          total: 0,
          loading: false,
          error: "Failed to fetch order details",
        },
      }));
    }
  },
  setSelectedPaymentMethod: (method: String) => {
    set({ selectedPaymentMethod: method });
  },
}));
