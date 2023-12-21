"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  const redirect = () => {
    push("/checkout");
  };
  redirect();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
