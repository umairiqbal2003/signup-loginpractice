import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/NavbarCmp'

const Home = () => {
  
  const user = localStorage.getItem("uid");
  
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user){
       navigate("/") 
    }
  },[])

  const logoutHandler =()=>{
    localStorage.removeItem("uid");
    navigate("/")
  }

  return (
    <div>
        <Navbar/>
      <h1 style={{textAlign : "center", fontSize : "40px"}}>Han Jani apka hi intezar tha bhai 😁😍
       <button className='home-button' onClick={logoutHandler} >Logout</button> </h1>
      
    </div>
  )
}

export default Home
