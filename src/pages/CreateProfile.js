import React from "react"
import { Footer } from "../components/Footer"




export function CreateProfile(){
    return(

<React.Fragment>

<div className="Profile">
<form action="#">
  <h1>Create Account</h1>

  <span>crea tu perfil</span>

  <input type="text" placeholder="Nombre y Apellidos" />
  <input type="text" placeholder="Edad" />
  <input type="text" placeholder="Categoría Profesional" />
  <input type="text" placeholder="Puesto/Posición" />
  <input type="text" placeholder="Sobre Mi" />
  <button type="button">CREAR</button>
</form>
</div>

<Footer/>
</React.Fragment>
    )
}