import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/FirebaseConfig";

export const CreateContext = createContext();

const AuthProvider = ({children}) => {

   const auth = getAuth(app);
   
    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const info = {
        signUp,
    }
    return (
        <CreateContext.Provider value={info}>
            {children}
        </CreateContext.Provider>
    );
};

export default AuthProvider;