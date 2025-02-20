import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth, GoogleAuthProvider,GithubAuthProvider  } from "firebase/auth";
import app from "../../Firebase/FirebaseConfig";

// create context 
export const CreateContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [toggle,setToggle] = useState(false);
    const auth = getAuth(app);

    // observe user is exist or not. use onAuthSatate
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currenUser => {
            if (currenUser) {
                setUser(currenUser);
                // console.log("",currenUser);
                setLoading(false);
            }else{
                setUser(null);
                setLoading(false);
                // console.log("No user loged in");
            }
        })
        return () => {
            unSubscribe(); // clear
        }
    }, [])

    // create user
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signin
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // update profile
    const profileUpdate = (name,photoURL) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoURL
          })
    }

    // login google
    const loginWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider);
    }

    // login github
    const loginWithGithub = () =>{
        const gitHubProvider = new GithubAuthProvider();
        return signInWithPopup(auth,gitHubProvider);
    }

    // toggle
    const toggleCheck = () =>{
        return setToggle(!toggle);
    }


    // information object to sent via context value
    const info = {
        signUp, signIn, logOut, user, loading, profileUpdate, loginWithGoogle,
        loginWithGithub,toggleCheck,toggle,
    }

    
    return (
        <CreateContext.Provider value={info}>
            {children}
        </CreateContext.Provider>
    );
};

export default AuthProvider;