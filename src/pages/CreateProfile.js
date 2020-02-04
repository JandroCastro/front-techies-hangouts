import React from "react"
import { Footer } from "../components/Footer"




export function CreateProfile(){
    return(

      <React.Fragment>
  <h1>crea tu perfil</h1>

<div className="Profile">
<form action="#">
  


  <input type="text" placeholder="Nombre y Apellidos" />
  <input type="text" placeholder="Edad" />
  <input type="text" placeholder="Categoría Profesional" />
  <input type="text" placeholder="Puesto/Posición" />
  <input type="text" placeholder="Sobre Mi" />
</form>
  <button type="button">CREAR</button>
</div>

<Footer/>
</React.Fragment>
    )
}