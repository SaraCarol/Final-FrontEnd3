/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import {routes} from "./utils/routes"
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <Link to={routes.home}><h4>HOME</h4></Link>
      <Link to={routes.detail}><h4>DETAILS</h4></Link>
      <Link to={routes.favs}><h4>FAVORITES</h4></Link>
      <Link to={routes.contact}><h4>CONTACT</h4></Link>

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar