import {useState} from 'react'
import './Login.css'
import logo from '../../../assets/logo.png'
import {login,signup} from "../../../firebase"
import netflix_spinner from '../../../assets/netflix_spinner.gif'

function Login() {
  const [name,setName] =useState("")
  const [email,setEmail] =useState("")
  const [password,setPassword] =useState("")
  const [signState,setSignState] = useState("Sign In")
  const [loading,setLoading] = useState(false);

  const userAuth = async (event)=>{
    event.preventDefault()
    setLoading(true)
    if (signState==="Sign In"){
      await login(email,password)
    }
    else{
      await signup(name,email,password)
    }
    setLoading(false)
  }
  return (
    loading ? <div className="logging-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState==="Sign Up"?<input type="text" placeholder='Your name' onChange={(event)=>{setName(event.target.value)}} value={name}/>:<></>}
          
          <input type="email"  placeholder='Email' onChange={(event)=>{setEmail(event.target.value)}} value={email}/>
          <input type="password" placeholder='password' onChange={(event)=>{setPassword(event.target.value)}} value={password}/>
          <button onClick={userAuth} type='submit'
          >{signState}</button>
          <div className="form-help">
            <div className="remeber">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In" ?<p>New to Netflix?<span onClick={()=>{
            setSignState("Sign Up")
          }}>Sign Up Now</span></p>:<p>Already Have Account?<span onClick={()=>{
            setSignState("Sign In")}}>Sign In now</span></p>}
          
          
        </div>
      </div>
    </div>
  )
}

export default Login
