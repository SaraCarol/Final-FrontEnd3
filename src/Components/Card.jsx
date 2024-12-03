/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import '../index.css'
import { Link } from 'react-router-dom'
import { useContextGlobal } from "./utils/global.context";

const Card = ({ user }) => {
  
  const {dispatch} = useContextGlobal()

  const addFav = ()=>{
    dispatch({type: 'FAVS_ACTION', payload: user})
  }

  return (
    <div className="card">
        <Link to={`/detail/${user.id}`} >
          <img src="/public/images/doctor.jpg"></img>
          <h2>{user.name}</h2>
          <h4>{user.username} </h4>
        </Link>
        
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
