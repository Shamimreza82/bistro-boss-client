import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loeading, setLoeading] = useState(true)

    // create user
    const createUser = (email, password) => {
        setLoeading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const login = (email, password) => {
        setLoeading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout

    const logOut = () => {
        setLoeading(true)
        return signOut(auth)
    }


    // user watch 
    useEffect(()=> {
       const unSubcribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoeading(false)
            console.log("current user", currentUser);
        })
        return () => {
            unSubcribe()
        }
    },[] )



    const authInfo = {
        createUser, 
        user, 
        loeading, 
        login, 
        logOut
    }
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;