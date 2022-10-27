import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
export const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {

        return updateProfile(auth.currentUser, profile);
    }
    const githubLogin = () => {
        const provider = new GithubAuthProvider();

        return signInWithPopup(auth, provider)

    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Inside auth state change', currentUser);
            if (currentUser === null || currentUser) {
                setUser(currentUser);
                console.log(currentUser);
            }
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = { user, loading, setLoading, providerLogin, createUser, githubLogin, updateUserProfile, verifyEmail, signIn, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;