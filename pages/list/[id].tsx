// This will contain a form to edit list and assign users
import ProductList from "@/components/products/ProductsList";
import { database } from "@/firebase/config";
import { ListDocument } from "@/firebase/firestore/list";
import { doc, DocumentData, getDoc } from "firebase/firestore";
// import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

// interface IList {
//   id: string;
// }

export default function List(list: ListDocument) {
  const { id } = list;
  const removeProduct = (prod: string) => {
    console.log(prod);
  };
  return (
    <div>
      <div> {id} </div>

      {list && (
        <ProductList products={list.products} removeProduct={removeProduct} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const docRef = doc(database, "todos", context.query.id);
  const docSnap = await getDoc(docRef);
  const data: ListDocument = docSnap.data() as ListDocument;
  data.id = context.query.id;
  return {
    props: JSON.parse(JSON.stringify(data)),
  };
}
