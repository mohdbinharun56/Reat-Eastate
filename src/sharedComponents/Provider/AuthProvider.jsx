import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth, GoogleAuthProvider,GithubAuthProvider  } from "firebase/auth";
import app from "../../Firebase/FirebaseConfig";


export const CreateContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currenUser => {
            if (currenUser) {
                setUser(currenUser);
                console.log("",currenUser);
                setLoading(false);
            }else{
                setUser(null);
                setLoading(false);
                console.log("No user loged in");
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const profileUpdate = (name,photoURL) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoURL
          })
    }

    const loginWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider);
    }
    const loginWithGithub = () =>{
        const gitHubProvider = new GithubAuthProvider();
        return signInWithPopup(auth,gitHubProvider);
    }
    const info = {
        signUp, signIn, logOut, user, loading, profileUpdate, loginWithGoogle,
        loginWithGithub,
    }
    return (
        <CreateContext.Provider value={info}>
            {children}
        </CreateContext.Provider>
    );
};

export default AuthProvider;