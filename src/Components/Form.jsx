/* eslint-disable no-unused-vars */
import React, { useState} from "react";




const Form = () => {
  const [user, setUser] = useState({
    name: '',
    email: ''
  })
  const [error, setError] = useState(false)
  const [message, setMessage] = useState(false)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const testEmail = emailRegex.test(user.email)

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (testEmail) {
      if(user.name.trim().length > 5){
        setError(false)
        setMessage(true)
        console.log(user)
      } else {
        setError(true)
        setMessage(false)
      }
    } else {
      setError(true)
      setMessage(false)
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
            ): message ? <h6 style={{color:"green"}}> **Gracias {user.name}, te contactaremos cuanto antes vía mail**</h6>: null}
      </form>
    </div>
  );
};

export default Form;
