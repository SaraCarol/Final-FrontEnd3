/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import {routes} from "./utils/routes"
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'


const Navbar = () => {
  const {dispatch, state} = useContextGlobal();

  return (
    <nav>
      <Link to={routes.home} className="navbar-link"><h4>HOME</h4></Link>
      <Link to={routes.favs} className="navbar-link"><h4>FAVORITES</h4></Link>
      <Link to={routes.contact} className="navbar-link"><h4>CONTACT</h4></Link>

      <button onClick={() => dispatch({type: 'THEME_ACTION'})}>Change theme</button>
    </nav>
  )
}

export default Navbar