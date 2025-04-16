import * as React from "react";
import { FiDelete } from "react-icons/fi";

export interface IProductListProps {
  products: string[];
  setProducts?: any;
  removeProduct?: any;
}

export default function ProductList(props: IProductListProps) {
  const { products, setProducts, removeProduct } = props;
  if (!products) return <></>;
  const remove = (item:string) => {
    if (setProducts !== undefined) {
      setProducts(products.filter((prod) => prod !== item));
    } else {
      removeProduct(item);
    }
  };

  const Line = (item: string, index: number) => {
    return (
      <div
        className="flex items-center justify-between  text-center border-2 rounded-lg p-2 my-2"
        key={index}
      >
        {item}
        <FiDelete
          className="cursor-pointer ml-4 my-auto opacity-60 h-8 w-8 text-base"
          onClick={()=> remove(item)}
        />
      </div>
    );
  };

  return <div className="py-5">{products.map(Line)}</div>;
}
