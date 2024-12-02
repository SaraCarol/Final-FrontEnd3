/* eslint-disable no-unused-vars */
import React, { useReducer, useState} from "react";




const Form = () => {
  const [user, setUser] = useState({
    name: '',
    email: ''
  })
  const [error, setError] = useState(false)
  const [message, setMessage] = useState(false)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (
      user.name.trim().length < 5 &&
      !emailRegex.test(user.email)
      //FALTA VALIDACION DE EMAIL
    ){
      setError(true)
      setMessage(false)
    } else {
      setMessage(true)
      setError(false)
      console.log(user)
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Full name </label>
        <input type="text"
        value={user.name}
        onChange={e=>{
          setUser({...user, name: e.target.value})
        }}/>
        
        <label>User email </label>
        <input type="email"
        value={user.email}
        onChange={e =>{
          setUser({...user, email: e.target.value})
        }}/>
        
        <button type="submit">Submit</button>
        {error ? (
                <h6 style={{color:"red"}}> **Por favor verifique su información nuevamente** </h6>
            ): message ? <h6 style={{color:"green"}}> **Gracias {user.name}, te contactaremos cuando antes vía mail**</h6>: null}
      </form>
    </div>
  );
};

export default Form;
