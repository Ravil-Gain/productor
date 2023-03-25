import { createContext, useContext, Context } from 'react'
import useFirebaseAuth from "../firebase/authUser";

export const authUserContext = createContext({
  authUser: {
    uid: null,
    displayName: null,
    email: null
  },
  loading: true,
  signOut: async () => { }
});

export function AuthUserProvider({ children }: any) {
  const auth = useFirebaseAuth();
  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);