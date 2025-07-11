import { useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register new user
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }







    // update user profile
    const updateUserProfile =(userInfo)=>{
        return updateProfile(auth.currentUser, userInfo);
    }


    // user state manage
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => unsubscribe();
    }, [])


    const authInfo = {
        user,
        registerUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;