/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal()


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data.map(user =>(
          <Card key={user.id} id={user.id} name={user.name} username= {user.username} />
        ))}
        
      </div>
    </main>
  )
}

export default Home