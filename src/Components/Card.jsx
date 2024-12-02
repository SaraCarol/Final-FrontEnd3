/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import '../index.css'
import { Link } from 'react-router-dom'

const Card = ({ name, username, id }) => {
  

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <Link to={`/detail/${id}`} >
          <img src="/public/images/doctor.jpg"></img>
          <h2>{name}</h2>
          <h4>{username} </h4>
        </Link>
        
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
