import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <section className='navbar-container'>
        <div>Umair Navbar</div>
        <div>
            <ul>
                <li>
                    <Link to={"/home"}>Home</Link> </li>
                <li><Link to={"/"}>Login</Link></li>
                <li><Link to={"/signup"}>Signup</Link></li>
                
            </ul>
        </div>
      </section>

    </div>
  )
}

export default Navbar
