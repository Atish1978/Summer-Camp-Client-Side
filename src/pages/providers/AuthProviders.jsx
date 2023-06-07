import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";


export const AuthContext = createContext();

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();


const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
        const signIn= (email, password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password)
        }


        const logOut=()=>{
            setLoading(true);
            return signOut(auth);
        }

        const signInWithGoogle = () => {
            return signInWithPopup(auth, googleAuthProvider)
        }
    
      


        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                console.log('Current user', currentUser);
                setLoading(false);
            });
            return () => {
                return unsubscribe();
            }
        }, [])
    

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
     
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;