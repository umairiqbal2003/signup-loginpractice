import React from 'react'
import Navbar from '../../components/NavbarCmp'
import { useState ,useEffect} from 'react'
import { auth , db } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom'


const Signup = () => {

    const[firstname ,setFirstname] = useState("")
    const[lastname ,setLastname] = useState("")
    const[email ,setEmail] = useState("")
    const[password ,setPassword] = useState("")
    const[resolvemessage ,setResolvemessage] = useState("")
    const[errormessage ,setErrormessage] = useState("")

    const user = localStorage.getItem("uid")
   useEffect(()=>{
    if(user){
      navigate("/home");
    }
   })

    const navigate = useNavigate()
    const signupHandler = (e)=>{
      e.preventDefault();
      console.log("form submit")
      const dbCollection = collection(db , "users")
      createUserWithEmailAndPassword(auth,email,password)
      .then( async (resolve)=>{
        const obj= {
            firstname : firstname,
            lastname : lastname,
            email : email,
        }
        await addDoc(dbCollection , obj)
        const usermessage = resolve.operationType
         setResolvemessage(usermessage);
        // console.log(usermessage)
        navigate("/")
      })
      .catch((error)=>{
            console.log("errorr",error)
            const err = error.message
            setErrormessage(err);
      })

    }
    

  return (
    <div>
        <Navbar/>
      <section className='form-container'>
        <form onSubmit={signupHandler}>
            <div className='form-input'>
                <label htmlFor="name">FirstName:</label>
                <input type="text" onChange={(e)=>{setFirstname(e.target.value)}}  placeholder='Enter your firstname' />
            </div>
            <div className='form-input'>
                <label htmlFor="name">LastName:</label>
                <input type="text"  onChange={(e)=>{setLastname(e.target.value)}} placeholder="Enter your lastname" />
            </div>
            <div className='form-input'>
                <label htmlFor="name">Email:</label>
                <input type="text"  onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email" />
            </div>
            <div className='form-input'>
                <label htmlFor="name">Password:</label>
                <input type="text"  onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password" />
            </div>
            <button className='form-button' type='submit'>Submit</button>
            <br />
            <b style={{color : "red" , fontSize : "30px"}} >{resolvemessage}</b>
            <br />
            <b style={{color : "red" , fontSize : "30px"}} >{errormessage}</b>
            <br />
            
        </form>
      </section>
    </div>
  )
}

export default Signup
