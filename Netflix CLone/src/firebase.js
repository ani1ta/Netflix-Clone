/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB3vZLtfeXi4Q5j5lFj-o0YYwVHPLl7f3U",
  authDomain: "netflix-clone-ec9c3.firebaseapp.com",
  projectId: "netflix-clone-ec9c3",
  storageBucket: "netflix-clone-ec9c3.appspot.com",
  messagingSenderId: "93341529925",
  appId: "1:93341529925:web:143108e22df07c9162b02c",
  measurementId: "G-K2LVSZ5TYD"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) =>{
    try{
       const res = await createUserWithEmailAndPassword(auth, email, password)
       const user = res.user;
       await addDoc(collection (db, "user"), {
        uid: user.uid,
        name,
        authProvider : "local",
        email,
       })
    }catch(error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async (email, password) => {
  try{
    await signInWithEmailAndPassword(auth, email, password)
  }catch(error){
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const logout  = () =>{
  signOut(auth)
}

export {auth, db, login, signup, logout}