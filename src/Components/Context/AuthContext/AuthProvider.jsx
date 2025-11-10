import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { Children, useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase.init";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider =({children})=>{
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);


   const creatUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
   }

   const signInUser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
   }

   const signInWithGoogle=()=>{
      setLoading(true);
      return signInWithPopup(auth,googleProvider);
   }

const signOutUser=()=>{
    setLoading(true);
    console.log('sign')
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser)
        setUser(currentUser);
        setLoading(false)
    })
    return ()=>{
        unsubscribe();
    }
},[])
const authInfo={
    user,
     loading,
     creatUser,
     signOutUser,
     signInWithGoogle,
     signInUser
}
   return(
    <div>
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    </div>
   );

};

export default AuthProvider;