import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBWjqOM30H4svPq0zzj99EHEaqp1PmQgqE",
  authDomain: "netflix-b9d81.firebaseapp.com",
  projectId: "netflix-b9d81",
  storageBucket: "netflix-b9d81.firebasestorage.app",
  messagingSenderId: "307257064201",
  appId: "1:307257064201:web:9f93b31b538aa367fbf1d8",
  measurementId: "G-0TL7DGDS0V"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const signup = async (name,email,password) => {
    try {
    const response =    await createUserWithEmailAndPassword(auth,email,password);
    const user = response.user;
    await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
    });
    } catch (error) {
       console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(" "))
        
    }
}
const login = async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}
const logout=() =>{
    signOut(auth)
}
export {auth,db,login,signup,logout}