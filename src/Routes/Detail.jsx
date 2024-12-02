/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {id} = useParams()
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [user, setUSer] = useState({})
  const urlId = `https://jsonplaceholder.typicode.com/users/${id}`

  useEffect( ()=>{
    axios(urlId)
    .then((res) =>{
      setUSer(res.data)
    });
  }, [] )

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h2>FULLNAME: {user.name}</h2>
      <h3>EMAIL: {user.email}</h3>
      <h3>PHONE: {user.phone}</h3>
      <h3>WEBSITE: {user.website}</h3>
    </>
  )
}

export default Detail