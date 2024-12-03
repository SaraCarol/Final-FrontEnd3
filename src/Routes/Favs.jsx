/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import Home from "./Home";

const Favs = () => {
  const {state} = useContextGlobal()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map( user =>(
          <Card key={user.id} user={user}/>
        ))}
      </div>
    </>
  );
};

export default Favs;
