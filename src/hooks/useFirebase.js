import initializeAuthentication from "../Firebase/firebase.initialize"
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            }).catch(error => {
                setError(error.message)
            })
    }

    const signout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
                console.log("clicked");
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        error,
        signInWithGoogle,
        signout
    }
}

export default useFirebase;