// This will contain a form to create a new list
import * as React from "react";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";
import { InputProducts } from "@/components/products/InputProducts";
// import { GetServerSideProps } from "next";

export default function CreateShoppingList() {
  const user = useAuth();
  const router = useRouter();
  //
  if (user.loading) return null;
  if (!user.loading && !user.authUser) router.push("/");
  return <InputProducts />;
}
