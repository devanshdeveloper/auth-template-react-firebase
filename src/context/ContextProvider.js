import { useContext } from "react";
import AuthProvider, { AuthContext } from "./AuthProvider";


export function useAuth() {
  return useContext(AuthContext);
}

export default function ContextProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
