import { createContext } from "react";
export const CreateContext = createContext();

const AuthProvider = ({children}) => {

   
    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
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