import Home from "./components/pages/Home/Home"
import {Routes,Route, useNavigate} from 'react-router-dom'
import Login from './components/pages/Login/Login'
import Player from "./components/pages/Player/Player"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "./firebase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate =  useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth,
      async (user)=>{
        if (user){
          console.log("Login");
          navigate("/")
        }
        else{
          console.log("logged Out");
          navigate("/login")
        }
      }
    )
  },[])
  return (
    <>
    <ToastContainer theme="dark"/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/player/:id" element={<Player/>}/>
    </Routes>
  
    </>
  )
}

export default App
