/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

const Home = () => {
  const {state} = useContextGlobal()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.map(user =>(
          <Card key={user.id} user={user} />
        ))}
        
      </div>
    </main>
  )
}

export default Home