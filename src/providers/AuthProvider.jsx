import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loeading, setLoeading] = useState(true)
    const provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()
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

    // google login 

    const signInWithGoogle = () => {
        setLoeading(true)
        return signInWithPopup(auth, provider)
    }


    // logout

    const logOut = () => {
        setLoeading(true)
        return signOut(auth)
    }

    // User Profile Update

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    // user watch 
    useEffect(()=> {
       const unSubcribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoeading(false)
            console.log("current user", currentUser);
            if(currentUser){
                   // get token and store in client side  
                const userInfo = {email: currentUser.email} 
                axiosPublic.post('/jwt', userInfo )
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            } else {
                // TODO: remove token (if token sotroed in the client side)
                     localStorage.removeItem('access-token')
            }


        })
        return () => {
            unSubcribe()
        }
    },[axiosPublic] )



    const authInfo = {
        createUser, 
        user, 
        loeading, 
        login, 
        logOut, 
        updateUserProfile, 
        signInWithGoogle
    }
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;