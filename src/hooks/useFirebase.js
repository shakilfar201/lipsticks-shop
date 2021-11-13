import { useState, useEffect } from "react"
import initializeFirebase from "../pages/Login/firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";

initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveGoogleUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('')
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const register = (email, password, name, history, country, address, phone) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name }
                setUser(newUser);
                saveUser(email, name, country, address, phone, 'POST')
                console.log(newUser)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])

    const login = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const logOut = (location ,history) => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            const destination = location?.state?.from || '/';
            history.replace(destination);
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, country, address, phone, method) => {
        const user = { email, displayName, country, address, phone };
        fetch('https://mysterious-cove-34253.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const saveGoogleUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://mysterious-cove-34253.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    // search admin
    useEffect(() => {
        fetch(`https://mysterious-cove-34253.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])

    return {
        user,
        error,
        isLoading,
        admin,
        googleSignIn,
        register,
        login,
        logOut
    }
}

export default useFirebase;