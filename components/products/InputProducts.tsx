import * as React from "react";
import { useState } from "react";
import * as data from "../../public/products.json";
import { InputAutocomplete } from "@/components/products/InputAutocomplete";
import ProductList from "./ProductsList";
import TextInput from "../ui/TextInput";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { database } from "@/firebase/config";
import { ListDocument } from "@/firebase/firestore/list";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";
const { products } = data;

export function InputProducts() {
  const user = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [optionsList, setOptionsList] = useState<string[]>([
    "Рыба свежая",
    "Салат",
    ".jrkva",
    "more",
    "Салат листовой",
    "Масло сливочное",
    "Крупа гречневая",
    "Рис",
    "FiDelete",
    "opouu",
    "akata",
    "more",
  ]);
  if (user.authUser === null) router.push("/");
  const userUid: string = user.authUser!.uid || "";

  const getSelectedVal = (value: string) => {
    setOptionsList([value, ...optionsList]);
    console.log("norm", optionsList);
  };

  const addList = async () => {
    try {
      const docRef = await addDoc(collection(database, "todos"), {
        name:name,
        userId: userUid,
        created: Timestamp.now(),
        products: optionsList,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <TextInput value={name} setValue={setName} />
      <InputAutocomplete
        data={products}
        onSelected={getSelectedVal}
        selected={optionsList}
      />
      <ProductList products={optionsList} setProducts={setOptionsList} />
      <div className="flex justify-center">
        <div
          onClick={addList}
          className="h-12 w-32 cursor-pointer border-2 rounded-lg bg-slate-900 text-white flex items-center justify-center text-center"
        >
          <strong>Submit</strong>
        </div>
      </div>
    </div>
  );
}
