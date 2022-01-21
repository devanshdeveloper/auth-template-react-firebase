import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import useLoader from "../hooks/useLoader";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [setLoading] = useLoader();
  const [user, setUser] = useState();
  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      navigate(user ? "/dashboard" : "/signin");
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    signUserIn() {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
    },
    signUserOut() {
      return signOut(auth);
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
