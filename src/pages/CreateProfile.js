import React from "react"
import { Footer } from "../components/Footer"




export function CreateProfile(){
    return(

<React.Fragment>

<div className="Profile">
<form action="#">
  <h1>Create Account</h1>

  <span>crea tu perfil</span>

  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Password" />
  <input type="password" placeholder="Repeat your password" />
  <button type="button">Sign Up</button>
</form>
</div>

<Footer/>
</React.Fragment>
    )
}