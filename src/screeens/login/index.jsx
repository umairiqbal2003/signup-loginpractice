import React, { useEffect } from 'react'
import Navbar from '../../components/NavbarCmp'
import { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    
  const user = localStorage.getItem("uid")
   useEffect(()=>{
    if(user){
      navigate("/home");
    }
   })
    const[email ,setEmail] = useState("")
    const[password ,setPassword] = useState("")
    const[resolvemessage , setResolvemessage] = useState("")
    const[errormessage , seterrormessage] = useState("")
    const navigate = useNavigate()
    const loginHandler = (e)=>{
      e.preventDefault();
      console.log("form login submit")
      signInWithEmailAndPassword(auth,email,password)
      .then((resolve)=>{
         const user = resolve.operationType
         console.log(user)
         setResolvemessage(user)
         localStorage.setItem("uid" , resolve.user.uid)
         navigate("/home")
      })
      .catch((error)=>{
        const  err = error.message
        console.log(err);
        seterrormessage(err);
      })
    }
    const signupHandler=()=>{
      navigate("/signup")
    }
  return (
    <div>
        <Navbar/>
        <section className='form-container'>
        <form onSubmit={loginHandler}>
           
            <div className='form-input'>
                <label htmlFor="name">Email:</label>
                <input type="text"  onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email" />
            </div>
            <div className='form-input'>
                <label htmlFor="name">Password:</label>
                <input type="text"  onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password" />
            </div>
            <button className='form-button' type='submit'>Login</button>
            <br />
            
            <b style={{color : "red", fontSize : "20px" }}>{resolvemessage}</b>
            
            <b style={{color : "red", fontSize : "20px" }}>{errormessage}</b>
        </form>
        <button className='signup-button' onClick={signupHandler}>Create an Account</button>
      </section>
    </div>
  )
}

export default Login
