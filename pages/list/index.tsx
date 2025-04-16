import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "@/firebase/config";
import { FiArrowRightCircle, FiList, FiPlus, FiUsers } from "react-icons/fi";
import { ListDocument } from "@/firebase/firestore/list";
import { useRouter } from "next/router";

// This will contain a list of shopingLists
export default function Page() {
  const [lists, setLists] = useState<any>([]);
  const collectionRef = collection(database, "todos");
  const router = useRouter();

  useEffect(() => {
    const getLists = async () => {
      const data = await getDocs(collectionRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLists(filteredData);
      console.log(filteredData);
    };
    getLists();
  }, []);

  const gotoList = (id: string) => {
    router.push(`/list/${id}`);
  };
  
  return (
    <>
      <div className="flex justify-between">
        <div className="cursor-pointer">
          <div className="flex">
            <FiList className="h-10 w-10" />
            <FiPlus className="h-10 w-10" />
          </div>
          <strong>Create a List</strong>
        </div>

        <div className="cursor-pointer">
          <FiUsers className="h-10 w-10" />
          <strong>Share</strong>
        </div>
      </div>
      <div className="mt-8 p-2 shadow-md shadow-gray-500">
        {lists.map((list: ListDocument, index: number) => {
          return (
            <div
              className="flex justify-between items-center"
              onClick={() => gotoList(list.id)}
              key={index}
            >
              {list.name} - {list.products.length} <FiArrowRightCircle />
            </div>
          );
        })}
      </div>
    </>
  );
}
