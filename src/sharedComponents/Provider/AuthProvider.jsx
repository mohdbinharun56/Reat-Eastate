import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/FirebaseConfig";

export const CreateContext = createContext();

const AuthProvider = ({children}) => {

   const auth = getAuth(app);

    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = ()=> {
        return signOut(auth);
    }
    const info = {
        signUp,signIn,logOut
    }
    return (
        <CreateContext.Provider value={info}>
            {children}
        </CreateContext.Provider>
    );
};

export default AuthProvider;