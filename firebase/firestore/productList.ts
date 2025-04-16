import { database } from "../config";

import {
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
  limit,
  getDocs,
} from "@firebase/firestore";

const usersCollection = collection(database, "user");

export const getListsByUserId = async (userId: string) => {
  // construct a query to get up to 10 undone todos
  const lists = query(usersCollection, where("owner", "==", userId), limit(10));
  // get the todos
  const querySnapshot = await getDocs(lists);

  // map through todos adding them to an array
  const result: QueryDocumentSnapshot<DocumentData>[] = [];
  querySnapshot.forEach((snapshot) => {
    result.push(snapshot);
  });
  return result;
};

// export const getListsByUserId = async (id: string) => {
//   try {
//     const lists = await usersCollection.
//   } catch (error) {}
// };
