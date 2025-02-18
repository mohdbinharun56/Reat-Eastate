import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/FirebaseConfig";

export const CreateContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currenUser=>{
            setUser(currenUser);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }
    const info = {
        signUp, signIn, logOut,user
    }
    return (
        <CreateContext.Provider value={info}>
            {children}
        </CreateContext.Provider>
    );
};

export default AuthProvider;