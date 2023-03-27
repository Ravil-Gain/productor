import * as React from "react";
import { useState } from "react";
import * as data from "../../public/products.json";
import { InputAutocomplete } from "@/components/products/InputAutocomplete";
import ProductList from "./ProductsList";
import TextInput from "../ui/TextInput";
const { products } = data;

export function InputProducts() {
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

  const getSelectedVal = (value: string) => {
    setOptionsList([value, ...optionsList]);
    console.log("norm", optionsList);
  };
  const submit = () => {
    console.log(name, optionsList);
  };

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  //   setProposals(["a", "b"]);
  // };

  return (
    <div className="flex flex-col justify-center">
      <TextInput value={name} setValue={setName} />
      <InputAutocomplete data={products} onSelected={getSelectedVal} />
      <ProductList products={optionsList} setProducts={setOptionsList} />
      <div className="flex justify-center">
        <div
          onClick={submit}
          className="h-12 w-32 cursor-pointer border-2 rounded-lg bg-slate-900 text-white flex items-center justify-center text-center"
        >
          <strong>Submit</strong>
        </div>
      </div>
    </div>
  );
}
