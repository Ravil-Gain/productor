import * as React from "react";
import { FiDelete } from "react-icons/fi";

export interface IProductListProps {
  products: string[];
  setProducts: any;
}

export default function ProductList(props: IProductListProps) {
  const { products, setProducts } = props;

  const Line = (item: string, index:number) => {
    return (
      <div className="flex items-center justify-between  text-center border-2 rounded-lg p-2 my-2" key={index}>
        {item}
        <FiDelete className="cursor-pointer ml-4 my-auto opacity-60 h-8 w-8" onClick={() => setProducts(products.filter((prod) => prod !== item))}
        />
      </div>
    );
  };

  return <div className="py-5">{products.map(Line)}</div>;
}
