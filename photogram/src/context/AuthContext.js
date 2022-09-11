import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from "../firebase";


const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState("")

  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  const logout= () => {
    return signOut(auth)
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser)
    })
    return () => {
      unsubscribe();
    }
  },[]);

  return (
    <UserContext.Provider value={{createUser, loginUser, user, logout}}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext);
}

