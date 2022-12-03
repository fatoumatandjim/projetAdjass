import { createContext, useContext, useState, useEffect } from "react";
import {auth, db} from '../firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { RotatingSquare  } from 'react-loader-spinner'

import { doc, setDoc } from "firebase/firestore";

const UserContext = createContext();
export const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState({});
    const [pending, setPending] = useState(true);

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
        return setDoc(doc(db, 'users', email), {
            watchList: []
        });
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setPending(false);
        })

        return ()=>{
            unsubscribe();
        }
    }, [user]);
    if(pending){
        return <><div style={{
            position:"relative",
            width:"100%",
            height:"100vh",
        }}>
            <div style={{
                position:"absolute",
                top:"50%",
                left:"50%",
                transform:"translate(-50%, -50%)"
            }}>
                <RotatingSquare  
                    height="150"
                    width="150"
                    color="#4fa94d"
                    ariaLabel="hearts-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
            </div></>
      }
    return (
        <UserContext.Provider value={{signUp, signIn, logout, user}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () =>{
    return useContext(UserContext);
}