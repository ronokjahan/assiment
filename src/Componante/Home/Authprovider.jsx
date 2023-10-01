import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup }from "firebase/auth";
import app from './fairbase';
const auth = getAuth(app);
export const Authcontex=createContext(null)

const Authprovider = ({children}) => {
    const[user ,setuser]=useState(null)
   const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)

   };
 
   const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)

   };
  
 
   const userr={email:'ah ronok'}
   
    const authinfo={createUser,userr,signIn,auth}


    
    return (
       <Authcontex.Provider value={authinfo}>
        {children}
       </Authcontex.Provider>
    );
};

export default Authprovider;