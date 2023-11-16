import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState, } from "react";
import auth from "../auth/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


 export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const googleProvider=new GoogleAuthProvider()
    const axiosPublic=useAxiosPublic()

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }



    const signIn=(email,password)=>{
        setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
    }


    const GooglePopUp=()=>{
        setLoading(true)

         return signInWithPopup(auth,googleProvider)
    }


    const updateUserProfile=(name,photo)=>{
          return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const logOut=()=>{
         setLoading(true)
         return signOut(auth)
    }


    useEffect(()=>{
          const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
              setUser(currentUser)

                 if(currentUser){
                    //assign token and store client

                    const userInfo={email:currentUser?.email}
                    axiosPublic.post('/jwt',userInfo)
                    .then(res=>{
                        // console.log('localstr',res.data.token);
                         if(res.data?.token){
                             localStorage.setItem('access-token',res.data.token)
                         }
                    })


 
                 }else{
                    //TODO: remove token (if token stored in client side)

                    localStorage.removeItem('access-token')
                 }


              setLoading(false)
          })

          return ()=>{
              return unSubscribe()
          }
    },[axiosPublic])



    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        GooglePopUp,
        






    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;