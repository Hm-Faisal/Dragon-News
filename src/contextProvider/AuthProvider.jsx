import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Refresh User when load first time

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  //   Register New User

  const createNewUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Logout User

  const logoutUser = () => {
    return signOut(auth);
  };

  //   Log In user

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const authInfo = { user, setUser, createNewUser, logoutUser, loginUser };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
