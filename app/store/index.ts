"use client";
// store/index.ts
import { create } from "zustand";
import { Product } from "../checkout/page";

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
      // Fetch order details from the API
      const response = await fetch("/api");
      const data = await response.json();
      console.log(data, "data::");

      const totalPrice = data.output.products.reduce(
        //@ts-ignore
        (sum, product) => sum + product.price,
        0
      );
      // Set the order details in the store
      set((state) => ({
        orderDetails: {
          products: data.output.products || [],
          total: totalPrice,
          loading: false,
          error: null,
        },
        paymentMethods: data.output.paymentMethods,
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
